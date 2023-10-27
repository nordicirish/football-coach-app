import React from "react";
import EventItem from "./event-item";
import classes from "./EventList.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          startTime={event.startTime}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
