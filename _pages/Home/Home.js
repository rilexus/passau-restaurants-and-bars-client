import React from "react";
import { Container } from "ui/Container";
import { Header } from "components/Header";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Header />
        <div
          style={{
            height: "200vh",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          consectetur, doloremque eius exercitationem facilis incidunt, libero
          nobis pariatur reprehenderit rerum, sed sequi suscipit. Amet
          asperiores facere porro ratione reiciendis, vitae?
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
