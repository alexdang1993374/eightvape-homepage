import { StaticImageData } from "next/image";

export interface IProduct {
  image: StaticImageData;
  price: string;
  properties: Record<string, string>;
  title: string;
  _id: string;
}
