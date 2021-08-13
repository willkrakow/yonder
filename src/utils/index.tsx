export const capitalizeString = (str: string) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

//convert month number to string
export const monthName = (num: number): string => {
  const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return months[num]
}