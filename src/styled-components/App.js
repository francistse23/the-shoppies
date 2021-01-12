import { colors, device, dimensions } from "../constants";

import styled from "styled-components";

export const AppMain = styled.div`
  box-sizing: border-box;
  color: ${colors.fontColor};
  display: flex;
  flex: 1;
  font-family: Roboto Mono;
  height: 100%;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;

  @media ${device.tablet} {
    padding-bottom: 8%;
  }

  @media ${device.laptop} {
    padding-bottom: 5%;
  }
`;

export const AppTitle = styled.h1`
  font-family: Quicksand;
  font-size: ${dimensions.fontSize * 2.5}px;
  line-height: ${dimensions.fontSize * 4.5}px;
  padding: 0 ${dimensions.spacing * 2}px;
  text-align: center;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: ${dimensions.fontSize * 4}px;
  }
`;

export const FooterContainer = styled.footer`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: ${dimensions.spacing * 4}px auto;
  padding: ${dimensions.spacing * 4}px 0;
  width: 50%;

  @media ${device.laptop} {
    width: 30%;
  }

  @media ${device.desktop} {
    width: 25%;
  }
`;

export const HoverButton = styled.button`
  background-color: ${colors.mainColor};
  border: none;
  border-radius: 50%;
  bottom: 5%;
  cursor: pointer;
  padding: 2%;
  position: fixed;
  right: 2.5%;
  outline-style: none;

  :hover {
    box-shadow: 0 0 5px 5px ${colors.lighterColor};
  }

  @media ${device.tablet} {
    bottom: ${(props) => (props.maxNominations ? "5%" : "2.5%")};
  }

  @media ${device.desktop} {
    bottom: ${(props) => (props.maxNominations ? "10%" : "3.5%")};
    padding: 0.75%;
  }
`;

export const SectionDiv = styled.section`
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.secondaryColor};
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${device.tablet} {
    height: ${(props) => props.height}px;
  }

  @media ${device.laptop} {
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    // padding: 0 ${dimensions.spacing * 4}px;
    width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${dimensions.fontSize}px;
  font-weight: 600;
  line-height: ${dimensions.fontSize * 2.5}px;
  width: 100%;

  @media ${device.laptop} {
    font-size: ${dimensions.fontSize * 1.5}px;
  }
`;

export const Subtitle = styled.p`
  font-size: ${dimensions.fontSize * 1.25}px;
  font-weight: 500;
  line-height: ${dimensions.fontSize * 1.5}px;
`;
