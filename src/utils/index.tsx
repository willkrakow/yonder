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

interface GoogleMapProps {
  lat: number;
  lng: number;
  width: number;
  height: number;
  zoom: number;
  color?: string;
}

export const buildGoogleMapsUrl = ({
  lat,
  lng,
  width,
  height,
  zoom,
  color = "3374e5",
}: GoogleMapProps) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${width}x${height}&maptype=roadmap&markers=color:0x3374e5%7Clabel:Y%7C${lat},${lng}&key=${process.env.GATSBY_GOOGLE_MAP_KEY}`;
};
