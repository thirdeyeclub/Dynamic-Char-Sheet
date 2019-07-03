import React, { Component } from 'react'
import "../sass/dice.sass"

export default class Dice extends Component {
state = {
        result: "press button to roll die"
        }
render() {
    var rollOneHundred = ()=> {let roll = Math.floor(Math.random() * 100) +1;
        console.log(`Rolled a ${roll}`); this.setState({result: roll})}
    var rollTwenty = ()=> {let roll = Math.floor(Math.random() * 20) +1;
        console.log(`Rolled a ${roll}`); this.setState({result: roll})}
    var rollTwelve = ()=> {let roll = Math.floor(Math.random() * 12) +1;
        console.log(`Rolled a ${roll}`); this.setState({result: roll})}
    var rollTen = ()=> {let roll = Math.floor(Math.random() * 10) +1;
        console.log(`Rolled a ${roll}`); this.setState({result: roll})}
    var rollEight = ()=> {let roll = Math.floor(Math.random() * 8) +1;
        console.log(`Rolled a ${roll}`); this.setState({result: roll})}
    var rollFour = ()=> {let roll = Math.floor(Math.random() * 4) +1;
        console.log(`Rolled a ${roll}`); this.setState({result: roll})}
    var rollTwo = ()=> {let roll = Math.floor(Math.random() * 2) +1;
        console.log(`Rolled a ${roll}`); this.setState({result: roll})}

return (
        <div className="rollTable">
<div className="rollButtons">
<button
className="rollButton"
onClick={rollOneHundred}>
100
</button>
<button
className="rollButton"
onClick={rollTwenty}>
20
</button>
<button
className="rollButton"
onClick={rollTwelve}>
12
</button>
<button
className="rollButton"
onClick={rollTen}>
10
</button>
<button
className="rollButton"
onClick={rollEight}>
8
</button>
<button
className="rollButton"
onClick={rollFour}>
4
</button>
<button
className="rollButton"
onClick={rollTwo}>
2
</button>
</div>
<div className="result">
{this.state.result}
</div>
</div>
)}
}
