import Button from "../ui/Button";
import classes from "./ResultsTitle.module.css";
import { getHumanReadableDate } from "../../dummy-data";

function ResultsTitle(props) {
  const { startTime } = props;

  const humanReadableDate = getHumanReadableDate(startTime);
  // console.log(humanReadableDate);
  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <br />
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
