import styled, { css } from "styled-components";

const playfairDisplayFontCss = css`
  font-family: "Playfair Display", serif;
`;

const PlayfairDisplayFontStyled = styled.div`
  ${playfairDisplayFontCss};
`;

const italicPlayfairDisplayFont = css`
  ${playfairDisplayFontCss};
  font-style: italic;
`;

export {
  italicPlayfairDisplayFont,
  playfairDisplayFontCss,
  PlayfairDisplayFontStyled,
};
