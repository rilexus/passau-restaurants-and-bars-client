import React from "react";
import { ReviewPage } from "_pages/Review";

const Review = (props) => {
  return <ReviewPage {...props} />;
};

export async function getStaticProps({ params: { name } }) {
  return {
    props: {
      name,
    },
  };
}

export async function getStaticPaths() {
  const paths = [
    {
      params: { name: "inn-cafe", title: "", subtitle: "" },
    },
  ];

  return { paths, fallback: false };
}

export default Review;
