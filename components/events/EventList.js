import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

function EventList(props) {
  const { items } = props;
  console.log("items", items);
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id} // fixed identifier error
          title={event.title}
          location={event.location}
          startTime={event.startTime} // fixed missing property
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
