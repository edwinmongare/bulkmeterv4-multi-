// ?* getLoginFrame reply start
let messageData =
  "403a0047151320592364012438210323200126000141814a26485a4739344e4232303130313256312d312e34234b734c03844d66343135313332303539323336344f07000060006e192f500d0a";
const getLoginFrame = (l1, l2, l3, l4, l5, l6, l7, l8, l9, l10) => {
  return parseInt(l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10, 10)
    .toString(16)
    .slice(1, 3);
};
console.log(
  getLoginFrame(
    0x00,
    0x09,
    Number(`0x${messageData.slice(8, 10)}`),
    Number(`0x${messageData.slice(10, 12)}`),
    Number(`0x${messageData.slice(12, 14)}`),
    Number(`0x${messageData.slice(14, 16)}`),
    Number(`0x${messageData.slice(16, 18)}`),
    Number(`0x${messageData.slice(18, 20)}`),
    0x01,
    0x00
  )
);
// ?* getLoginFrame reply end
// ?* getDataFrame reply start
let messageData =
  "403a0281151320592364084a010f4181002103181515000000000000000000000000000000000000000000000000000000000000000000004181002103181530000000000000000000000000000000000000000000000000000000000000000000004181002103181545000000000000000000000000000000000000000000000000000000000000000000004181002103181600000000000000000000000000000000000000000000000000000000000000000000004181002103181615000000000000000000000000000000000000000000000000000000000000000000004181002103181630000000000000000000000000000000000000000000000000000000000000000000004181002103181645000000000000000000000000000000000000000000000000000000000000000000004181002103181700000000000000000000000000000000000000000000000000000000000000000000004181002103181715000000000000000000000000000000000000000000000000000000000000000000004181002103181730000000000000000000000000000000000000000000000000000000000000000000004181002103181745000000000000000000000000000000000000000000000000000000000000000000004181002103181800000000000000000000000000000000000000000000000000000000000000000000004181002103181815000000000000000000000000000000000000000000000000000000000000000000004181002103181830000000000000000000000000000000000000000000000000000000000000000000004181002103181845000000000000000000000000000000000000000000000000000000000000000000006a0d0a";
const getDataFrame = (l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12) => {
  return parseInt(
    l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12,
    10
  )
    .toString(16)
    .slice(1, 3);
};
console.log(
  getDataFrame(
    0x00,
    0x0b,
    Number(`0x${messageData.slice(8, 10)}`),
    Number(`0x${messageData.slice(10, 12)}`),
    Number(`0x${messageData.slice(12, 14)}`),
    Number(`0x${messageData.slice(14, 16)}`),
    Number(`0x${messageData.slice(16, 18)}`),
    Number(`0x${messageData.slice(18, 20)}`),
    0x08,
    0x01,
    Number(`0x${messageData.slice(24, 26)}`),
    0x00
  )
);
// ?* getDataFrame reply end