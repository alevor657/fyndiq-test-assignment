import Loader from "../misc/Loader";
import { Status } from "../../services/baseService";
import { useProducts } from "../../services/productService";
import "../../styles/products.scss";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";
import { FC, useState } from "react";

export const ProductList: FC = () => {
  const [showCheap, setShowCheap] = useState(false);
  let products = useProducts(showCheap);

  return (
    <>
      <ProductFilters value={showCheap} onFilterChange={setShowCheap} />

      <section className="products">
        {products.status === Status.LOADING && <Loader />}
        {products.status === Status.LOADED &&
          products.payload.articles
            .filter((article) =>
              showCheap ? article.price.amount <= 50 : true
            )
            .map((article, idx) => <ProductCard {...article} key={idx} />)}

        {products.status === Status.ERROR && <p>Oopsie...</p>}
      </section>
    </>
  );
};
