import classes from "./LogisticsItem.module.css";

function LogisticsItem(props) {
  const { icon: Icon } = props;
  // console.log("icon props", props);

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
