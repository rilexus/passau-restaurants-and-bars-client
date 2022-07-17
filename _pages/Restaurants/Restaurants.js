import React, { useEffect } from "react";
import { Container } from "ui/Container";
import { Header } from "components/Header";
import { Restaurant } from "./components";
import { Article, Author, DatePublished } from "libs/schema-org/Article";
import Link from "next/link";
import { Flex } from "ui/Flex";
import { Spacer } from "../../ui/Spacer";
import { HorizontalLine } from "../../ui/HorizontalLine";

const RestaurantsPage = () => {
  return (
    <Container>
      <Header />

      <ul>
        <li>
          <Article as={"article"}>
            <Link href={"/reviews/inn-cafe"}>
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Restaurant
                  ratingValue={5}
                  cuisine={"Italian"}
                  name={"Inn-Cafe"}
                  priceRange={["100$", "200$"]}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid at autem cupiditate eius eos eum fuga itaque magni neque officia, pariatur rem repudiandae sapiente tempore ullam veniam? Dignissimos, quae."
                  }
                />
              </a>
            </Link>
            <Spacer top={"0.5rem"} />
            <div
              style={{
                color: "#999",
                fontSize: "0.9rem",
              }}
            >
              <Flex>
                <div
                  style={{
                    marginRight: ".5rem",
                  }}
                >
                  <Author>By: Stanislav Panchenko</Author>
                </div>
                <div>
                  at <DatePublished date={new Date()} />
                </div>
              </Flex>
            </div>
          </Article>
          <Spacer top={"1rem"} />
          <HorizontalLine />
        </li>
      </ul>
    </Container>
  );
};

export default RestaurantsPage;
