import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import sanityClient from "@sanity/client";
import { ICategory, IDrink } from '../typings'
import { flatten, flattenDeep, values } from "lodash";

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const search = req.query.search;
  const searchTerms = search.split(' ');

  const today = new Date();

  const client = sanityClient({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: today.toISOString().split("T")[0],
    token: process.env.SANITY_TOKEN,
    useCdn: true,
  });

  const query = '*[_type == "category" && name != $food && name != $togo] {name, subcategories}';
  const params = {
      food: "Food",
      togo: "To go",
  };

  const drinks = client.fetch(query, params).then((data: Partial<ICategory>[]) => {
    const allDrink = flatten(data.map(category => flattenDeep(category?.subcategories?.map(subcategory => subcategory.drinks))))
    return allDrink
  })

  const lowercaseValues = (drink: IDrink) => {
      return values(drink).map(prop => prop.toString().toLowerCase())
  }

   const termIsInArray = (
     drinkProps: any[]
   ): ((value: string, index: number, array: string[]) => unknown) => {
     return (term) =>
       drinkProps.toString().toLowerCase().includes(term.toLowerCase());
   };

  drinks.then((drinks: IDrink[]) => {
    const topResults = drinks.filter(drink => {
      const drinkProps = lowercaseValues(drink);
      return searchTerms.every(termIsInArray(drinkProps))
    })
    const partialResults = drinks.filter(drink => {
        const drinkProps = lowercaseValues(drink);
        return searchTerms.some(termIsInArray(drinkProps)) && !searchTerms.every(termIsInArray(drinkProps))
    })
    return { topResults, partialResults}
  }
  ).then(({topResults, partialResults }) => {
    res.send({ topResults, partialResults })
  })
}
