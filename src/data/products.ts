export type SKU = {
  id: string;
  name: string; // "Lumin Labz Disposable"
  flavor: string; // "Electric Berry"
  strain: "Sativa" | "Indica" | "Hybrid";
  potency: string; // "1g • Live Resin"
  image: string; // "/products/electric-berry.png"
};

export const PRODUCTS: SKU[] = [
  {
    id: "electric-berry",
    name: "Lumin Labz Disposable",
    flavor: "Electric Berry",
    strain: "Sativa",
    potency: "1g • Live Resin",
    image: "/boxes/packaging.png",
  },
  {
    id: "peach-buzz",
    name: "Lumin Labz Disposable",
    flavor: "Peach Buzz",
    strain: "Hybrid",
    potency: "1g • Live Resin",
    image: "/boxes/packaging.png",
  },
  {
    id: "pineapple-wave",
    name: "Lumin Labz Disposable",
    flavor: "Pineapple Wave",
    strain: "Sativa",
    potency: "1g • Live Resin",
    image: "/boxes/packaging.png",
  },
  {
    id: "grape-nebula",
    name: "Lumin Labz Disposable",
    flavor: "Grape Nebula",
    strain: "Indica",
    potency: "1g • Live Resin",
    image: "/boxes/packaging.png",
  },
  {
    id: "mango-ice",
    name: "Lumin Labz Disposable",
    flavor: "Mango Ice",
    strain: "Hybrid",
    potency: "1g • Live Resin",
    image: "/boxes/packaging.png",
  },
];


