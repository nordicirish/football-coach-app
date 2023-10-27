import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import { getHumanReadableDate } from "../../dummy-data";

function EventLogistics(props) {
  console.log("event-logistics", props);
  const { startTime, address, image, imageAlt } = props;

  const humanReadableDate = getHumanReadableDate(startTime);
  console.log("event-logistics humanReadable", humanReadableDate);
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
