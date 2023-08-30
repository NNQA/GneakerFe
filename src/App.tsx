import "./App.css";
import Card from "./Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { getAllProduct } from "./store/FetchApi";
import CardItem from "./Components/CardItem";
import CardItemOrder from "./Components/CardItemOrder";
function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [disabledProducts, setDisabledProducts] = useState<any[]>([]);
  const product = useSelector((state: any) => state.product);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [total, setTotal] = useState<Number>(0);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    dispatch(getAllProduct("get"));
  }, [dispatch]);
  const addToCard = (a: any) => {
    setProducts((prevProducts) => [...prevProducts, a]);
    setDisabledProducts((prevProducts) => [...prevProducts, a]);
  };
  const removeFromCard = (a: any) => {
    const count = disabledProducts.reduce((count, item) => {
      if (item === a) {
        return count + 1;
      }
      return count;
    }, 1);
    setProducts((prevProducts) => prevProducts.filter((item) => item !== a));
    setDisabledProducts((prevProducts) =>
      prevProducts.filter((item) => item !== a)
    );
    if (disabledProducts.length === 1) {
      setTotal((pre: any) => (pre -= pre));
    } else {
      setTotal((pre: any) => pre - count * parseFloat(a.price));
    }
  };

  if (product === null) return <div>Loading...</div>;
  return (
    <div className="container">
      <Card title="Our Products" check={true}>
        {product.product === null
          ? ""
          : product.product.map((i: any, idx: any) => (
              <CardItem
                props={i}
                key={idx}
                onClick={() => addToCard(i)}
                disable={disabledProducts}
              />
            ))}
      </Card>
      <Card title="Your Card" price={total} check={check}>
        {products.map((i: any, idx: number) => (
          <CardItemOrder
            product={i}
            key={idx}
            remove={() => removeFromCard(i)}
            total={setTotal}
            setCheck={setCheck}
            disable={disabledProducts.includes(i)}
          ></CardItemOrder>
        ))}
      </Card>
      <div className="custom-shape-divider-bottom-1693323328">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
