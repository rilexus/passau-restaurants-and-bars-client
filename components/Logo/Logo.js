import styled, { css } from "styled-components";
import { playfairDisplayFontCss } from "ui/typography";

const PlayfairDisplayFontStyled = styled.div`
  ${playfairDisplayFontCss};
`;

const RestaurantWrapper = styled(PlayfairDisplayFontStyled)`
  & > span {
    margin: 0 0.2rem;
  }
`;

const PassauStyled = styled.div`
  ${playfairDisplayFontCss};
  font-size: 4rem;
  line-height: 1;
`;

const Logo = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <PassauStyled>Passau</PassauStyled>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              fontWeight: "lighter",
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem",
            }}
          >
            <RestaurantWrapper>
              <span>Cafes</span>
            </RestaurantWrapper>
            <span>&#183;</span>
            <RestaurantWrapper>
              <span>Restaurants</span>
            </RestaurantWrapper>
            <span>&#183;</span>
            <RestaurantWrapper>
              <span>Bars</span>
            </RestaurantWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
