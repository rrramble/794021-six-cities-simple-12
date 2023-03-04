export type Offer = {
  bedrooms: number;
  id: number;
  isPremium: boolean;
  images: Images;
  maxAdults: number;
  price: number;
  rating: number;
  type: string;
  title: string;
}

export type Offers = Offer[]

export type City = {
  name: string;
}

export type Image = string
export type Images = string[]