export default `
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Avenir, Helvetica, Arial, sans-serif";
  font-size: 14px;
  background: #fff;
}

* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin: 0;
  outline: none;
  box-shadow: none;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

p {
  margin: 0;
  padding: 0;
}

img {
  border: none;
}

input, button, select, textarea {
  outline: none;
  border: none;
}

input:focus, textarea:focus {
  border-color: #fff;
  outline: none !important;
}

a {
  text-decoration: none;
  outline: none;
  color: #fff;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    outline: none;
  }
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
  }
}

button,
button:focus,
button:active,
button:hover {
  outline: none;
}

button::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner {
  border: none
}

input::-webkit-contacts-auto-fill-button {
  visibility: hidden;
  display: none !important;
  pointer-events: none;
  position: absolute;
  right: 0;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
}
`;
