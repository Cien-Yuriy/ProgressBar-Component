// Edit your parameters below! (Only strict 4 objects in array!)
const items = [
  {name: 'Sold', color: '#BD1FBE', value: 677},
  {name: 'Got free', color: '#FC64FF', value: 23},
  {name: 'Burned', color: 'green', value: 202},
  {name: 'Free float', color: 'grey', value: 323}
];
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

function typeOfColor (num) {
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

const Bars = () => {return(
  <div>
    <div className="bar" style={{background: typeOfColor(1)}}></div>
    <div className="bar" style={{background: typeOfColor(2)}}></div>
    <div className="bar" style={{background: typeOfColor(3)}}></div>
    <div className="bar" style={{background: typeOfColor(4)}}></div>
    <div className="bar" style={{background: typeOfColor(5)}}></div>
    <div className="bar" style={{background: typeOfColor(6)}}></div>
    <div className="bar" style={{background: typeOfColor(7)}}></div>
    <div className="bar" style={{background: typeOfColor(8)}}></div>
    <div className="bar" style={{background: typeOfColor(9)}}></div>
    <div className="bar" style={{background: typeOfColor(10)}}></div>
    <div className="bar" style={{background: typeOfColor(11)}}></div>
    <div className="bar" style={{background: typeOfColor(12)}}></div>
    <div className="bar" style={{background: typeOfColor(13)}}></div>
    <div className="bar" style={{background: typeOfColor(14)}}></div>
    <div className="bar" style={{background: typeOfColor(15)}}></div>
    <div className="bar" style={{background: typeOfColor(16)}}></div>
    <div className="bar" style={{background: typeOfColor(17)}}></div>
    <div className="bar" style={{background: typeOfColor(18)}}></div>
    <div className="bar" style={{background: typeOfColor(19)}}></div>
    <div className="bar" style={{background: typeOfColor(20)}}></div>
    <div className="bar" style={{background: typeOfColor(21)}}></div>
    <div className="bar" style={{background: typeOfColor(22)}}></div>
    <div className="bar" style={{background: typeOfColor(23)}}></div>
    <div className="bar" style={{background: typeOfColor(24)}}></div>
    <div className="bar" style={{background: typeOfColor(25)}}></div>
    <div className="bar" style={{background: typeOfColor(26)}}></div>
    <div className="bar" style={{background: typeOfColor(27)}}></div>
    <div className="bar" style={{background: typeOfColor(28)}}></div>
    <div className="bar" style={{background: typeOfColor(29)}}></div>
    <div className="bar" style={{background: typeOfColor(30)}}></div>
    <div className="bar" style={{background: typeOfColor(31)}}></div>
    <div className="bar" style={{background: typeOfColor(32)}}></div>
    <div className="bar" style={{background: typeOfColor(33)}}></div>
    <div className="bar" style={{background: typeOfColor(34)}}></div>
    <div className="bar" style={{background: typeOfColor(35)}}></div>
    <div className="bar" style={{background: typeOfColor(36)}}></div>
    <div className="bar" style={{background: typeOfColor(37)}}></div>
    <div className="bar" style={{background: typeOfColor(38)}}></div>
    <div className="bar" style={{background: typeOfColor(39)}}></div>
    <div className="bar" style={{background: typeOfColor(40)}}></div>
    <div className="bar" style={{background: typeOfColor(41)}}></div>
    <div className="bar" style={{background: typeOfColor(42)}}></div>
    <div className="bar" style={{background: typeOfColor(43)}}></div>
    <div className="bar" style={{background: typeOfColor(44)}}></div>
    <div className="bar" style={{background: typeOfColor(45)}}></div>
    <div className="bar" style={{background: typeOfColor(46)}}></div>
    <div className="bar" style={{background: typeOfColor(47)}}></div>
    <div className="bar" style={{background: typeOfColor(48)}}></div>
    <div className="bar" style={{background: typeOfColor(49)}}></div>
    <div className="bar" style={{background: typeOfColor(50)}}></div>
    <div className="bar" style={{background: typeOfColor(51)}}></div>
    <div className="bar" style={{background: typeOfColor(52)}}></div>
    <div className="bar" style={{background: typeOfColor(53)}}></div>
    <div className="bar" style={{background: typeOfColor(54)}}></div>
    <div className="bar" style={{background: typeOfColor(55)}}></div>
    <div className="bar" style={{background: typeOfColor(56)}}></div>
    <div className="bar" style={{background: typeOfColor(57)}}></div>
    <div className="bar" style={{background: typeOfColor(58)}}></div>
    <div className="bar" style={{background: typeOfColor(59)}}></div>
    <div className="bar" style={{background: typeOfColor(60)}}></div>
    <div className="bar" style={{background: typeOfColor(61)}}></div>
    <div className="bar" style={{background: typeOfColor(62)}}></div>
    <div className="bar" style={{background: typeOfColor(63)}}></div>
    <div className="bar" style={{background: typeOfColor(64)}}></div>
    <div className="bar" style={{background: typeOfColor(65)}}></div>
    <div className="bar" style={{background: typeOfColor(66)}}></div>
    <div className="bar" style={{background: typeOfColor(67)}}></div>
    <div className="bar" style={{background: typeOfColor(68)}}></div>
    <div className="bar" style={{background: typeOfColor(69)}}></div>
    <div className="bar" style={{background: typeOfColor(70)}}></div>
    <div className="bar" style={{background: typeOfColor(71)}}></div>
    <div className="bar" style={{background: typeOfColor(72)}}></div>
    <div className="bar" style={{background: typeOfColor(73)}}></div>
    <div className="bar" style={{background: typeOfColor(74)}}></div>
  </div>
)}; // This stateless React Component render progressbar

class ProgressBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="box">
        <div id='bars'>
          <Bars/>
        </div>
        <div id='legend'>
          <div>
            <div className='dots' style={{backgroundColor: items[0].color}}></div>
            <p>{items[0].name}: {items[0].value} ({parseFloat(((items[0].value / sumValues) * 100).toFixed(1))} %)</p>
          </div>
          <div>
            <div className='dots' style={{backgroundColor: items[1].color}}></div>
            <p>{items[1].name}: {items[1].value} ({parseFloat(((items[1].value / sumValues) * 100).toFixed(1))} %)</p>
          </div>
          <div>
            <div className='dots' style={{backgroundColor: items[2].color}}></div>
            <p>{items[2].name}: {items[2].value} ({parseFloat(((items[2].value / sumValues) * 100).toFixed(1))} %)</p>
          </div>
          <div>
            <div className='dots' style={{backgroundColor: items[3].color}}></div>
            <p>{items[3].name}: {items[3].value} ({parseFloat((100 - ((items[0].value / sumValues) * 100).toFixed(1) - ((items[1].value / sumValues) * 100).toFixed(1) - ((items[2].value / sumValues) * 100).toFixed(1)).toFixed(1))} %)</p>
          </div>
        </div>
    </div>);
  }
} // Full React Component

ReactDOM.render(<ProgressBar/>, document.getElementById("app")); // sending component ProgressBar to div-element with id='app'
