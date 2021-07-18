/**@jsx jsx */
import React from 'react'
import { jsx, Themed, Grid, Button, Card } from 'theme-ui'
import { Link } from 'gatsby'
import PictureCard from '../pictureCard'
import { ImageGridProps } from '../../typings'



const MenuSection = ({categories}: ImageGridProps) => {
    
    return (
      <React.Fragment>
        <Grid columns={[1, 2, 3]} gap={1} sx={{ mb: 1 }}>
          {categories.map((category) => (
            <Card key={category.slug.current} >
              <PictureCard
                image={category.categoryImage}
                title={category.name}
                link={`/${category.slug.current}`}
              />
            </Card>
          ))}
          <Link to={"/menu"} sx={{ placeSelf: "center", textAlign: "center" }}>
            <Themed.h4>Feeling indecisive?</Themed.h4>
            <Button sx={{ mt: 4 }} variant="primary">
              See the full menu
            </Button>
          </Link>
        </Grid>
      </React.Fragment>
    );
}

export default MenuSection


