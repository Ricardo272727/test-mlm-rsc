import { useEffect, useState } from "react";
import { useHttpClient } from "./useHttpClient";
import _ from "lodash";

export const useProductDetail = ({ id = "" }) => {
  const [product, setProduct] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    soldQuantity: '',
    condition: '',    
    picture: ''
  });
  const [categories, setCategories] = useState([]);
  const httpClient = useHttpClient({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const loadProductDetails = async (id) => {
    if (!id) throw Error(`Invalid product id ${id}`);
    const { response, success } = await httpClient.get(`/api/items/${id}`);
    if (!success) console.error(`Cannot get product details`);
    const item = _.get(response, "item", {})

    setProduct({
        id: item.id,
        title: item.title,
        description: item.description,
        picture: item.picture,
        price: item.price.amount,
        condition: item.condition,
        soldQuantity: item.sold_quantity,
    });
  };

  useEffect(() => {
    loadProductDetails(id)
  }, [id]);

  return { product, categories };
};
