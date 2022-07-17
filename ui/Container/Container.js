import { Media } from "../Media";

const Container = (props) => {
  return (
    <Media
      {...props}
      default={`
        margin-right: auto;
        margin-left: auto;
        padding-right: 2.5rem;
        padding-left: 2.5rem;
        width: 100%;
      `}
      xsm={`
        width: 100%;
        padding: 0 5px;
      `}
      sm={`
        max-width: 540px;
      `}
      md={`
        max-width: 720px;
      `}
      lg={`
        max-width: 960px;
      `}
      xl={`
        max-width: 1140px;
      `}
    />
  );
};

export default Container;
