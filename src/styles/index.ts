import { createGlobalStyle } from "styled-components";
import resetStyle from "./reset";
import baseStyle from "./base";

export default createGlobalStyle`
  ${resetStyle}
  ${baseStyle}
`;
