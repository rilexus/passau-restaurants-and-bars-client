import { createElement } from "react";
import typeNames from "./typeNames";

const itemTypes = () => {};

(() => {
  Object.entries(typeNames).forEach(([key, name]) => {
    itemTypes[key] = () => {
      const Wrapper = ({
        as = "div",
        itemScope = true,
        children,
        ...props
      }) => {
        return createElement(
          as,
          { ...props, itemScope, itemType: `https://schema.org/${name}` },
          children
        );
      };
      Wrapper.itemType = name;
      Wrapper.displayName = `${name}ItemType`;

      return Wrapper;
    };
  });
})();

export default itemTypes;
