import { useEffect, useState } from "react";
import { getProducts, ProductsResponse } from "../repository/productRepository";
import { Service, Status } from "./baseService";

export const useProducts = (showCheap: boolean) => {
  const [products, setProducts] = useState<Service<ProductsResponse>>({
    status: Status.LOADING,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productsResponse = await getProducts();

        setProducts({ payload: productsResponse, status: Status.LOADED });
      } catch (error) {
        console.error(error);
        // Display some error to the user
      }
    };

    fetchProducts();
  }, []);

  return products;
};
