// Edit your parameters below! (Only strict 4 objects in array!)
const items = [
{ name: 'Sold', color: '#BD1FBE', value: 677 },
{ name: 'Got free', color: '#FC64FF', value: 23 },
{ name: 'Burned', color: 'green', value: 202 },
{ name: 'Free float', color: 'grey', value: 323 }];

// Edit your parameters above!

const sumValues = items.map(item => item.value).reduce((sumOfValues, value) => sumOfValues + value); // find total amount of values

let ceilAmountOfSolid = Math.ceil(items[0].value * 74 / sumValues);
let ceilAmountOfGotFree = Math.ceil(items[1].value * 74 / sumValues);
let ceilAmountOfBurned = Math.ceil(items[2].value * 74 / sumValues);
let ceilAmountOfFreeFloat = Math.ceil(items[3].value * 74 / sumValues);
const diffOfBars = ceilAmountOfSolid + ceilAmountOfGotFree + ceilAmountOfBurned + ceilAmountOfFreeFloat - 74; // determine how many bars each item should have

if (ceilAmountOfSolid == Math.max(ceilAmountOfSolid, ceilAmountOfGotFree, ceilAmountOfBurned, ceilAmountOfFreeFloat)) {
  ceilAmountOfSolid -= diffOfBars;
} else if (ceilAmountOfGotFree == Math.max(ceilAmountOfSolid, ceilAmountOfGotFree, ceilAmountOfBurned, ceilAmountOfFreeFloat)) {
  ceilAmountOfGotFree -= diffOfBars;
} else if (ceilAmountOfBurned == Math.max(ceilAmountOfSolid, ceilAmountOfGotFree, ceilAmountOfBurned, ceilAmountOfFreeFloat)) {
  ceilAmountOfBurned -= diffOfBars;
} else {
  ceilAmountOfFreeFloat -= diffOfBars;
} // condition that'll help correct amount of bars for each item

function typeOfColor(num) {
  if (num <= ceilAmountOfSolid) {
    return items[0].color;
  } else if (num <= ceilAmountOfSolid + ceilAmountOfGotFree) {
    return items[1].color;
  } else if (num <= ceilAmountOfSolid + ceilAmountOfGotFree + ceilAmountOfBurned) {
    return items[2].color;
  } else {
    return items[3].color;
  }
} // function that determines color for each bar in progressbar. 'Num' is used in React Component Bars as the number of each bar

const Bars = () => {return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(1) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(2) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(3) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(4) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(5) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(6) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(7) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(8) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(9) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(10) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(11) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(12) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(13) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(14) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(15) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(16) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(17) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(18) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(19) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(20) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(21) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(22) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(23) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(24) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(25) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(26) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(27) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(28) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(29) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(30) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(31) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(32) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(33) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(34) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(35) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(36) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(37) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(38) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(39) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(40) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(41) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(42) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(43) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(44) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(45) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(46) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(47) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(48) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(49) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(50) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(51) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(52) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(53) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(54) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(55) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(56) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(57) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(58) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(59) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(60) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(61) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(62) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(63) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(64) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(65) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(66) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(67) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(68) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(69) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(70) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(71) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(72) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(73) } }), /*#__PURE__*/
    React.createElement("div", { className: "bar", style: { background: typeOfColor(74) } })));

}; // This stateless React Component render progressbar

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "box" }, /*#__PURE__*/
      React.createElement("div", { id: "bars" }, /*#__PURE__*/
      React.createElement(Bars, null)), /*#__PURE__*/

      React.createElement("div", { id: "legend" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "dots", style: { backgroundColor: items[0].color } }), /*#__PURE__*/
      React.createElement("p", null, items[0].name, ": ", items[0].value, " (", parseFloat((items[0].value / sumValues * 100).toFixed(1)), " %)")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "dots", style: { backgroundColor: items[1].color } }), /*#__PURE__*/
      React.createElement("p", null, items[1].name, ": ", items[1].value, " (", parseFloat((items[1].value / sumValues * 100).toFixed(1)), " %)")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "dots", style: { backgroundColor: items[2].color } }), /*#__PURE__*/
      React.createElement("p", null, items[2].name, ": ", items[2].value, " (", parseFloat((items[2].value / sumValues * 100).toFixed(1)), " %)")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "dots", style: { backgroundColor: items[3].color } }), /*#__PURE__*/
      React.createElement("p", null, items[3].name, ": ", items[3].value, " (", parseFloat((100 - (items[0].value / sumValues * 100).toFixed(1) - (items[1].value / sumValues * 100).toFixed(1) - (items[2].value / sumValues * 100).toFixed(1)).toFixed(1)), " %)")))));



  }}
// Full React Component

ReactDOM.render( /*#__PURE__*/React.createElement(ProgressBar, null), document.getElementById("app")); // sending component ProgressBar to div-element with id='app'