import itemProps from "./itemPropComponentFactory";

const Component = itemProps.ratingValue();

const RatingValue = ({ as = "meta", rating, children }) => (
  <Component as={as} content={rating}>
    {children}
  </Component>
);

export default RatingValue;
