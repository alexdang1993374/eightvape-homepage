import {
  cloudNerds,
  dotmod,
  geekvape,
  heisenberg,
  juiceMan,
  pacha,
  smok,
  vaporesso,
} from "@/assets";
import { IProduct } from "@/types";

export const products: IProduct[] = [
  {
    image: pacha,
    price: "$10.95",
    properties: {
      Popular: "true",
    },
    title: "Pacha Syn Fuji Apple Strawberry Nectarine 60ml Vape Juice",
    _id: "1",
  },
  {
    image: heisenberg,
    price: "$10.95",
    properties: {
      Popular: "false",
    },
    title: "Innevape Heisenberg Menthol 75ml Vape Juice",
    _id: "2",
  },
  {
    image: cloudNerds,
    price: "$10.88",
    properties: {
      Popular: "true",
    },
    title: "Cloud Nurdz Watermelon Apple 100ml Vape Juice",
    _id: "3",
  },
  {
    image: juiceMan,
    price: "$9.95",
    properties: {
      Popular: "false",
    },
    title: "Juice Man Unicorn Frappe 100ml Vape Juice",
    _id: "4",
  },
  {
    image: smok,
    price: "$19.88",
    properties: {
      Popular: "true",
    },
    title: "SMOK Propod 22W Pod Kit",
    _id: "5",
  },
  {
    image: vaporesso,
    price: "$43.88",
    properties: {
      Popular: "false",
    },
    title: "Vaporesso Luxe XR Max 80W Pod Mod Kit",
    _id: "6",
  },
  {
    image: geekvape,
    price: "$28.88",
    properties: {
      Popular: "true",
    },
    title: "Geekvape Wenax Q 25W Pod Kit",
    _id: "7",
  },
  {
    image: dotmod,
    price: "$77.88",
    properties: {
      Popular: "false",
    },
    title: "dotMod dotAIO V2 Lite 75W AIO Pod Kit",
    _id: "8",
  },
];
