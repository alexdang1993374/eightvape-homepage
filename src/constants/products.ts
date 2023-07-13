import { IProduct } from "@/types";
import { pacha, heisenberg, cloudNerds, juiceMan } from "@/assets";

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
];
