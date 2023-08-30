import classes from "./CardItem.module.css";
import tick from "../assets/check.png";

const CardItem = (props: any) => {
  if (!props.props) return <div>Loanding...</div>;
  const check = props.disable.includes(props.props);

  return (
    <div className={classes.container}>
      <div
        style={{ backgroundColor: props.props.color }}
        className={classes.contents}
      >
        <img src={props.props.image} alt="" className={classes.mainImg} />
      </div>
      <div className={classes.name}>{props.props.name}</div>
      <div className={classes.description}>{props.props.description}</div>
      <div className={classes.addCard}>
        <p>$ {props.props.price}</p>
        <button className={classes.addTocard} onClick={props.onClick}>
          {check ? (
            <img
              src={tick}
              alt=""
              className={`${classes.img} ${check ? classes.show : ""}`}
            />
          ) : (
            <p
              className={`${classes.TextAddtoCard} ${
                !check ? classes.show : classes.hide
              }`}
            >
              Add to card
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default CardItem;
