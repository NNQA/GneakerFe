import classes from "./Card.module.css";
import nike from "../assets/nike.png";
const Card = (props: any) => {
  const threshold = 0.001;
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.a}></div>
        <div className={classes.title}>
          <img src={nike} alt="" className={classes.imgTitle} />
          <div className={classes.titleAndprice}>
            <div>{props.title}</div>
            {!props.check ? (
              <div>
                {props.price !== 0 ? (
                  <div>
                    {" "}
                    {Math.abs(props.price.toFixed(2)) < threshold ? (
                      <div>$ 0.00</div>
                    ) : (
                      <div>$ {props.price.toFixed(2)}</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
