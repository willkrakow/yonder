export const capitalizeString = (str: string) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};


const MONTHS = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//convert month number to string
export const monthName = (num: number): string => {
  return MONTHS[num]
}

export const monthNumber = (str: string): number => {
  return MONTHS.indexOf(str)
}

export const sanityConfig = {
  projectId: "hiyhitvr",
  dataset: "production",
};
