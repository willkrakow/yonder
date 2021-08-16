import { IGatsbyImageData } from "gatsby-plugin-image";
import {eventTags} from './eventTags'

export { eventTags }
export interface IDrink {
    name: string,
    price: number,
    slug: ISlug,
    id: string,
    category: any,
    available?: boolean
    _key?: string
}


export interface ICategory {
  _key: string,
  _type: string,
  name: string,
  slug: ISlug,
  categoryImage: ISanityImage,
  description: string,
  drinks: Array<WineProps & BeerProps & CocktailProps>
}


export interface ISlug {
    current: string
}
export interface IBeer {
    ABV: number,
    IBU: number,
    maker?: string,
    origin?: string,
    medium: "Bottle" | "Can" | "Draft",
    drinkType: string | any,
}


export interface IWine {
    drinkType: string,
    ABV: number,
    maker?: string,
    origin?: string,
    variety?: string,
}



export interface ICocktail {
    liquor: string,
    ingredients: string
}

export type BeerProps = IBeer & IDrink
export type WineProps = IWine & IDrink
export type CocktailProps = ICocktail & IDrink


export interface ImageAsset {
    asset: {
        gatsbyImageData: IGatsbyImageData
    }
    caption?: string
    altText?: string
}

export interface BlockText {
    _key: string,
    _type: string,
    children: Array<{
        text: string,
    }>
}[]

export enum EEventTag {
Music = "Music",
Local = "Local",
Poetry = "Poetry",
Art = "ART",
Yoga = "YOGA",
Authors = "AUTHORS",
Weekly = "WEEKLY",
Holiday = "HOLIDAY",
}

export type EventTag = EEventTag | string | null

export interface IEvent {
    name: string,
    subtitle?: string,
    date: string,
    fromNow: string,
    dateEnd: string,
    timeStart: string,
    timeEnd?: string,
    image: ISanityImage,
    description: BlockText[],
    id: string,
    slug: ISlug,
    eventUrl?: string,
    eventTags?: EventTag[]

}

export interface Art {
    _key: string,
    name: string,
    artist: Artist,
    images: Array<ImageAsset>,
    description: Array<{
        _key: string,
        children: Array<{
            _key: string,
            text: string,
        }>
    }>,
    startDate?: string,
    endDate?: string,
    slug: ISlug
}

export interface Artist {
    _key: string,
    name: string,
    bio: string,
    email?: string,
    facebook?: string,
    twitter?: string,
    instagram?: string,
    website?: string,
    image: ImageAsset,
}


export interface IconProps {
    link: string,
    withText?: boolean,
}

export interface Address {
    streetOne: string,
    streetTwo?: string,
    zip: string,
    city: string,
    region: string,
    country: string,
}



export interface IDailyHours {
    day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday",
    opensAt: string | Date,
    closesAt: string | Date,
}

export type HeroProps = IHero & QueryPrototypeProps

export interface IHero  {
    title: string,
    subtitle?: string,
    image: ISanityImage,
    cta?: CtaProps
}

export interface ISanityImage {
  asset: {
    _id: string,
    _type: "sanity.imageAsset"
    _createdAt: string,
    _updatedAt: string,
    assetId: string,
    extension: "jpg" | "png" | "webp" | "jpeg",
    metadata: {
      dimensions: {
        aspectRatio: number,
        height: number,
        width: number,
      },
      hasAlpha: boolean,
      isOpaque: boolean,
      lqip: string,
      palette: ISanityImagePalette
    },
    path: string,
    uploadId: string,
    url: string,
    id: string,
  }
}

export interface ISanityImagePalette {
  darkMuted: ISanityImagePaletteSwatch,
  darkVibrant: ISanityImagePaletteSwatch,
  lightMuted: ISanityImagePaletteSwatch,
  lightVibrant: ISanityImagePaletteSwatch,
  dominant: ISanityImagePaletteSwatch,
  muted: ISanityImagePaletteSwatch,
  vibrant: ISanityImagePaletteSwatch,
}

export interface ISanityImagePaletteSwatch {
  background: string,
  foreground: string,
  population: number,
  title: string,
}

export type CenterTextProps = ICenterText & QueryPrototypeProps


export interface ICenterText {
  bodyText: string;
  headerText: string;
}

export interface QueryPrototypeProps {
  _key: string;
  _type: string;
}

export type CtaProps = ICta & QueryPrototypeProps

export interface ICta {
  buttonText: string;
  isInternal: boolean;
  link: string;
  text?: string;
}



export interface ImageGridProps {
  categories: ICategory[]
}


export interface IEventsPrototype {
  data: {
    allSanityMutatedEvent: {
      group: Array<{
        fieldValue: string;
        nodes: Array<MutatedEvent>;
      }>;
    };
  };
}

export interface IMutatedEvent {
  month: number;
  day: number;
  year: number;
  parent: IEvent;
}

export type MutatedEvent = IEvent & IMutatedEvent;

export interface IMonthGroup {
  nodes: MutatedEvent[];
  filterEvents: (e: MutatedEvent) => boolean;
  monthNumberString: string,
  index: number,
}
