import React from "react";
import styled from "styled-components";
import { LargeTitle } from "ui/typography";
import { Header } from "components/Header";

const Container = styled.div`
  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
  max-width: 600px;
  margin: 0 20px 0.78125rem 20px;
`;

const P = styled.p`
  @media (min-width: 740px) {
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin-bottom: 2rem;
    margin-top: 0;
  }

  overflow-wrap: break-word;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  width: 100%;
`;

const Title = styled(LargeTitle)`
  @media (min-width: 740px) {
    max-width: none;
    position: relative;
    width: 600px;
    font-size: 2.75rem;
    line-height: 3.125rem;
  }

  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
  font-size: 3.2rem;
  line-height: 1;
  margin: 0 20px 1rem 20px;

  width: 100%;
  max-width: 600px;
`;

const Subtitle = styled.div`
  @media (min-width: 740px) {
    text-align: left;
    width: 600px;
    margin-bottom: 1.875rem;
    font-size: 1.4375rem;
    line-height: 1.875rem;
  }
  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }

  margin: 0 20px 1.25rem 20px;

  width: 100%;
  max-width: 600px;

  font-style: normal;
  font-stretch: normal;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.5625rem;
`;

const Hr = styled.hr`
  border: 1px solid #ebebeb;
`;

const ImgContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Dt = styled.dt`
  display: inline;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin-right: 4px;
`;

const Dd = styled.dd`
  display: inline;
  font-weight: 500;
  margin-inline-start: 4px;
`;

const DefinitionBlock = styled.div`
  break-inside: avoid;
  width: 100%;
  margin-bottom: 8px;
`;

const Review = () => {
  return (
    <div>
      <Header />
      <main>
        <article>
          <header
            style={{
              marginTop: "3.75rem",
            }}
          >
            <Title as={"h1"}>
              Restaurant Review: Saigon Social Looks Back at Vietnam
            </Title>
            <Subtitle>
              At her Lower East Side restaurant, the chef Helen Nguyen conjures
              the country her family left behind.
            </Subtitle>
            <Container>
              <Hr />
            </Container>
            <ImgContainer>
              <figure
                style={{
                  margin: 0,
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    verticalAlign: "top",
                  }}
                  alt=""
                  src="https://static01.nyt.com/images/2022/07/06/dining/06rest-saigon1/05rest-saigon1-articleLarge.jpg?quality=75&amp;auto=webp&amp;disable=upscale"
                  srcSet={`
                    https://static01.nyt.com/images/2022/07/06/dining/06rest-saigon1/05rest-saigon1-articleLarge.jpg?quality=75&amp;auto=webp 600w,
                    https://static01.nyt.com/images/2022/07/06/dining/06rest-saigon1/05rest-saigon1-jumbo.jpg?quality=75&amp;auto=webp 1024w,
                    https://static01.nyt.com/images/2022/07/06/dining/06rest-saigon1/05rest-saigon1-superJumbo.jpg?quality=75&amp;auto=webp 2048w
                  `}
                  sizes="((min-width: 600px) and (max-width: 1004px)) 84vw, (min-width: 1005px) 80vw, 100vw"
                  decoding="async"
                  width="600"
                  height="400"
                />
                <figcaption></figcaption>
              </figure>
            </ImgContainer>
            <Container>
              <div
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <span
                    style={{
                      marginRight: "0.3rem",
                    }}
                  >
                    By
                  </span>
                  <span
                    itemProp="author publisher"
                    itemScope
                    itemType="http://schema.org/Organization"
                  >
                    <span itemProp="name">Stanislav Panchenko</span>
                  </span>
                </div>

                <time
                  style={{
                    fontWeight: "lighter",
                  }}
                  dateTime="2022-07-05T11:17:32-04:00"
                >
                  July 5, 2022
                </time>
              </div>
              <Hr />
            </Container>
          </header>
          <Container>
            <aside
              style={{
                margin: "3rem 0",
              }}
            >
              <DefinitionBlock>
                <address>
                  <Dt>Inn-Cafe</Dt>
                  <Dd>Am Inn Strasse 6</Dd>
                  <Dd className="phone">
                    <a href="tel:+646-609-3202">646-609-3202</a>
                  </Dd>
                </address>
              </DefinitionBlock>
              <div
                style={{
                  columns: "auto 2",
                  columnGap: "30px",
                  display: "block",
                }}
              >
                <DefinitionBlock>
                  <Dt>Atmosphere</Dt>
                  <Dd>
                    A crisply designed dining room with a wall of windows along
                    the street and a relaxed feel.
                  </Dd>
                </DefinitionBlock>
                <DefinitionBlock>
                  <Dt>Noise Level</Dt>
                  <Dd>
                    Lots of hard surfaces can make conversation difficult at
                    peak hours.
                  </Dd>
                </DefinitionBlock>
                <DefinitionBlock>
                  <Dt>Recommended Dishes</Dt>
                  <Dd>
                    Banh beo chen (steamed rice cakes); banh cuon nam (steamed
                    rice rolls); banh tet chien (fried sticky rice cakes); nem
                    cua be (imperial rolls); bun rieu (crab and tomato noodle
                    soup); mi xao tom toi (garlic noodles with shrimp); bun cha
                    Hanoi (Hanoi-style vermicelli).
                  </Dd>
                </DefinitionBlock>
                <DefinitionBlock>
                  <Dt>Drinks</Dt>
                  <Dd>
                    The list of beer, wine and cocktails is brief, but smartly
                    chosen and well priced.
                  </Dd>
                </DefinitionBlock>
                <DefinitionBlock>
                  <Dt>Price</Dt>
                  <Dd>$$ (moderate)</Dd>
                </DefinitionBlock>
                <DefinitionBlock>
                  <Dt>Open</Dt>
                  <Dd>Daily for dinner.</Dd>
                </DefinitionBlock>
                <DefinitionBlock>
                  <Dt>Reservations</Dt>
                  <Dd>Accepted.</Dd>
                </DefinitionBlock>
                <DefinitionBlock>
                  <Dt>Wheelchair Access</Dt>
                  <Dd>
                    There are two short steps up from the sidewalk to the dining
                    room entrance. Restrooms, in the basement, are not
                    accessible.
                  </Dd>
                </DefinitionBlock>
              </div>
            </aside>
          </Container>
          <section>
            <Container>
              <P>
                Consectetur deserunt doloribus, ex laboriosam laborum libero
                sint tenetur unde ut. Aliquid animi aspernatur, beatae
                consectetur dignissimos error esse nulla reiciendis velit.
              </P>
            </Container>
            <Container>
              <P>
                A animi corporis cumque doloribus eum facere illo iste labore
                laudantium modi non officia, quam reprehenderit, sint tempore,
                vel velit voluptatum. Laudantium! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. A ad, aperiam assumenda beatae
                culpa cum dolore ducimus ex hic neque officia reprehenderit sed
                tempora ullam veritatis voluptas voluptatum. Nemo, quod. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                commodi corporis cupiditate doloremque eaque et eum explicabo
                impedit obcaecati, officia perferendis praesentium quas quis
                reprehenderit similique soluta temporibus. Iusto.
              </P>
            </Container>
            <Container>
              <P>
                Accusamus ad, aut culpa magnam nihil nulla perferendis quam quas
                veniam! Aut debitis, deleniti distinctio earum fugiat impedit
                quis suscipit temporibus ut.
              </P>
            </Container>
            <Container>
              <P>
                Accusantium amet architecto atque aut deserunt, distinctio eaque
                in iste iure maxime nam neque, omnis praesentium, reprehenderit
                sequi similique soluta suscipit unde.
              </P>
            </Container>
            <Container>
              <P>
                Blanditiis cupiditate hic illum, itaque natus perspiciatis
                quibusdam veniam! Doloremque dolorum error inventore itaque
                maiores porro provident, quae, repellat unde ut vero.
              </P>
            </Container>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Review;
