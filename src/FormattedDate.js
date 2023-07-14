import React from "react";

export default function FormattedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Tursday",
    "Friday",
    "Saturday",
  ];
  const day = days[props.date.getDay()];
  const hours = props.date.getHours();
  const minutes = props.date.getMinutes();
  return (
    <div className="FormattedDate">
      {day} {hours}:{minutes}
    </div>
  );
}
