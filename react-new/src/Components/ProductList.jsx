import ProductItem from "./ProductItem";

const ProductList = ({ products = [] }) => {
  return <div data-testid="products-container">
    {[].map((product) => {
      <ProductItem product={product}/>
    })}
    </div>;
};

export default ProductList;
