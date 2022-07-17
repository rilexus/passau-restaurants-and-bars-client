import { Fragment, createElement } from "react";
import propNames from "./propNames";

const itemProps = () => {};

(() => {
  propNames.forEach((name) => {
    // Note: you can assign "name" property on a function in javascript. Its protected!
    itemProps[name] = (itemTypeComponent) => {
      const isScoped = !!itemTypeComponent;
      const type = itemTypeComponent?.itemType;

      const scopedItemProps = isScoped
        ? {
            itemScope: true,
            itemType: `https://schema.org/${type}`,
          }
        : {};

      const Wrapper = ({ as = "div", children, ...props }) => {
        if (as === "meta" && children) {
          // Note: You cant pass children to the "meta" tag
          return createElement(
            Fragment,
            null,
            createElement(as, { itemProp: name, ...props }),
            createElement(Fragment, null, children)
          );
        }
        return createElement(
          as,
          {
            itemProp: name === "Name" ? "name" : name,
            ...scopedItemProps,
            ...props,
          },
          children
        );
      };
      const [firstLetter, ...rest] = name;
      Wrapper.itemProp = name;
      Wrapper.displayName = `${firstLetter.toUpperCase()}${rest.join(
        ""
      )}ItemProp`;

      return Wrapper;
    };
  });
})();

export default itemProps;
