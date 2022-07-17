import itemProps from "./itemPropComponentFactory";

const Component = itemProps.datePublished();

import React from "react";

const defaultFormatter = (date) => {
  const d = date.toISOString().slice(0, 10);
  const [monthName, dayCount, year] = date.toDateString().slice(4).split(" ");
  const str = `${monthName} ${dayCount}, ${year}`;
  // NOTE: Must be of format [2022-7-17, Jul 17, 2022] to be considered valid by Schema.org
  return [d, str];
};

const DatePublished = ({
  date,
  dateFormatter = defaultFormatter,
  ...props
}) => {
  if (date) {
    const [d, str] = dateFormatter(date);
    return (
      <Component as={"meta"} content={d}>
        {str}
      </Component>
    );
  }
  return <Component {...props} />;
};

export default DatePublished;
