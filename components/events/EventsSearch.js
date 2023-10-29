import React, { useState } from "react";
import Button from "../ui/Button";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import fi from "date-fns/locale/fi";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./EventsSearch.module.css";
registerLocale("fi", fi);
setDefaultLocale("fi");

function EventsSearch(props) {
  const [startDate, setStartDate] = useState(new Date());

  const submitHandler = (e) => {
    e.preventDefault();

    const selectedYear = startDate.getFullYear();
    const selectedMonth = startDate.getMonth() + 1;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="startDate" className={classes.label}>
          Select Date
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          id="startDate"
          name="startDate"
          locale="fi"
          className={classes.datepicker}
        />
      </div>
      <Button className={classes.button}>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
