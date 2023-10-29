import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./LogisticsItem";
import classes from "./EventLogistics.module.css";
import { getHumanReadableDate } from "../../dummy-data";
import Image from "next/image";
function EventLogistics(props) {
  const { startTime, address, image, imageAlt } = props;

  const humanReadableDate = getHumanReadableDate(startTime);

  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={300} height={200} />
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
