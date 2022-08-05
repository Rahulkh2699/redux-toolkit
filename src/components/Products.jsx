import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProduct, STATUES } from "../store/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    // const fetchProducts = () => {
    //   axios
    //     .get("https://fakestoreapi.com/products")
    //     .then((res) => {
    //       setProducts(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };

    // fetchProducts();
    dispatch(fetchProduct());
    // console.log(products);
  }, []);

  const handleAdd = (product) => {
    console.log("hello");
    dispatch(add(product));
  };

  if (status === STATUES.LOADING) return <h1>Loading...</h1>;
  if (status === STATUES.ERROR) return <h1>Something went Wrong</h1>;
  if (status === STATUES.IDLE)
    return (
      <div className="productsWrapper">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img className=" m-auto" src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    );
};

export default Products;
