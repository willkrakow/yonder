import { IGatsbyImageData } from "gatsby-plugin-image";

export interface Drink {
    name: string,
    price: number,
    slug: Slug,
    id: string,
    category: any,
    available?: boolean
    _key?: string
}


export interface Category {
  _key: string,
  _type: string,
  name: string,
  slug: Slug,
  categoryImage: ImageAsset,
  description: string,
  drinks: Array<Wine & Beer & Cocktail>
}


export interface Slug {
    current: string
}
export interface Beer extends Drink{
    ABV: number,
    IBU: number,
    maker?: string,
    origin?: string,
    medium: "Bottle" | "Can" | "Draft",
    drinkType: string | any,
}

export interface Wine extends Drink {
    drinkType: string,
    ABV: number,
    maker?: string,
    origin?: string,
    variety?: string,
}

export interface Cocktail extends Drink {
    liquor: string,
    ingredients: string[]
}

export interface ImageAsset {
    asset: {
        gatsbyImageData: IGatsbyImageData
    }
    caption?: string
}

export interface BlockText {
    children: Array<{
        text: string,
    }>
}[]

export type EventTag = "Music" | "Art" | "Local" | "Poetry" | "Yoga" | "Authors" | "Weekly Event" | "Holiday" | string | null

export interface Event {
    name: string,
    subtitle?: string,
    date: string,
    fromNow: string,
    dateEnd: string,
    timeStart: string,
    timeEnd?: string,
    image: ImageAsset,
    description: BlockText[],
    id: string,
    slug: Slug,
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
    slug: Slug
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
    link: string
}

export interface Address {
    streetOne: string,
    streetTwo?: string,
    zip: string,
    city: string,
    region: string,
    country: string,
}

export interface DailyHours {
    day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday",
    closed: boolean,
    hourClose: number | null | undefined,
    minuteClose: number | null | undefined,
    hourOpen: number | null | undefined,
    minuteOpen: number | null | undefined,
    isAm?: boolean,
}

export interface HeroProps extends QueryPrototypeProps {
    mainText: string,
    subtitleText?: string,
    heroImage: ImageAsset,
    cta?: CtaProps
}


export interface CenterTextProps extends QueryPrototypeProps {
  bodyText: string;
  headerText: string;
}

export interface QueryPrototypeProps {
  _key: string;
  _type: string;
}

export interface CtaProps extends QueryPrototypeProps {
  buttonText?: string;
  isInternal?: boolean;
  link: URL;
  text?: string;
}

export interface EventSectionProps extends QueryPrototypeProps {
  mainText?: string;
  content: Event[];
  backgroundImage?: ImageAsset;
}

export interface FormSectionProps extends QueryPrototypeProps {
  collectEmail?: boolean;
  collectName?: boolean;
  collectMessage?: boolean;
}


export interface ImageGridProps {
  categories: Category[]
}