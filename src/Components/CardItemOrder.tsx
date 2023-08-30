import { useEffect, useState } from "react";
import classes from "./CardItemOrder.module.css";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import trash from "../assets/trash.png";
const CardItemOrder = (props: any) => {
  const [showImage, setShowImage] = useState(false);
  /* @ts-ignore */
  const [showContent, setShowContent] = useState(false);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  if (!props.product) return;
  const handleMinus = () => {
    if (amount === 0) {
      return;
    }
    setAmount((pre) => --pre);
    props.total(
      (pre: number) => (pre - parseFloat(props.product.price)) as number
    );
  };
  const handlePlus = () => {
    setAmount((pre) => ++pre);
    props.total(
      (pre: number) => (pre + parseFloat(props.product.price)) as number
    );
  };
  return (
    <div
      className={`${classes.orderContainer} ${
        props.disable === false ? classes.hidden : ""
      }`}
    >
      <div
        className={`${classes.roundedImg} ${
          showImage ? classes.showImage : ""
        }`}
        style={{ backgroundColor: props.product.color }}
      >
        <img src={props.product.image} alt="" />
      </div>
      <div className={`${classes.contents} ${showImage ? classes.appear : ""}`}>
        <p className={classes.name}>{props.product.name}</p>
        <p className={classes.price}>$ {props.product.price}</p>
        <div className={classes.action}>
          <button className={classes.plus} onClick={handleMinus}>
            <img src={minus} alt="" />
          </button>
          <p>{amount}</p>
          <button className={classes.plus} onClick={handlePlus}>
            <img src={plus} alt="" />
          </button>
          <button className={classes.trash} onClick={props.remove}>
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItemOrder;
