// TODO: define an interface but better use satisfies
interface Product {
  name: string;
  price: number;
  description: string;
}

const product: Product = {
  name: "Product 1",
  price: 10,
  description: "Product 1 description",
};

product.name;

// TODO: Define a type alias
