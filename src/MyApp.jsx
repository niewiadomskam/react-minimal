import React from 'react'
import AppTitle from './AppTitle'
import SquareRoot from './SquareRoot'
import AllStudentsButton from './AllStudentsButton'
import SortStudentsButton from './SortStudentsButton'
import OldStudentsButton from './OldStudentsButton'
import { render } from 'react-dom'

const generateArray = (n) => [...Array(n + 1).keys()].filter(x => x > 0);
const generateRandomArray = (n) => [...Array(n).keys()].map(() => Math.round(Math.random() * 24) + 1);

const exampleArray = [2, 56, 23, 88, 17, 4];
const exampleArray2 = [2, 5, 8, 10];
const studentData = [
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.firstNumberChange = this.firstNumberChange.bind(this);
    this.secondNumberChange = this.secondNumberChange.bind(this);
    this.generateLimitedArray = this.generateLimitedArray.bind(this);
    this.generateSquareRoot = this.generateSquareRoot.bind(this);
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.i = 0;

    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      array: [],
      i: 0,
      squareArray: []
    }
  }
  componentDidUpdate() {
    console.timeEnd("render - " + this.i + " - ");
    return this.i++;
  }

  firstNumberChange(event) {
    const newArray = this.generateLimitedArray(parseInt(event.target.value), this.state.secondNumber);
    this.setState({ firstNumber: !isNaN(event.target.value) ? parseInt(event.target.value) : 0, array: newArray });

  }


  secondNumberChange(event) {
    const newArray = this.generateLimitedArray(this.state.firstNumber, parseInt(event.target.value));
    this.setState({ secondNumber: !isNaN(event.target.value) ? parseInt(event.target.value) : 0, array: newArray });
  }

  generateLimitedArray(a, b) {
    if (a < b && a > 0) {
      return [...Array(b - a + 1).keys()].map(item => item + parseInt(a));
    }
    else
      return [];
  }

  generateSquareRoot(e) {
    e.preventDefault();
    const newArray = this.state.array.map(item => item * item);
    this.setState({ squareArray: newArray });
  }
  render() {
    console.time("render - " + this.i + " - ");

    let myBody = (
      <div>
        <AppTitle name="Marta" />
        <h1>Minimal React - niewiadomskam 8b62f7d263cbf41d63725f2dfe718be119fe2917</h1>
        <p>Bundle size: 57 bytes, Load time of the bundle: 35 ms, Last commit SHA1: f6a9f42152fefba5a78e9929632b278758dcdb70</p>
        <p>Array with numbers from 1 to 5</p>
        <div> [ {generateArray(5).join(" , ")} ]</div>
        <p>Array with random numbers from 1 to 25</p>
        <div> [ {generateRandomArray(5).join(" , ")} ]</div>
        <p>Printing from example array ony values greater than 15</p>
        <div> [ {exampleArray.filter(x => x > 15).join(" , ")} ]</div>
        <p>Printing square root of first array</p>
        <div> [ {SquareRoot(exampleArray2).join(" , ")} ]</div>

        {/* <AllStudentsButton data={studentData.map(item=>item.students)} />
  <SortStudentsButton data ={Object.keys(studentData).reduce(function(arr, key) {
    return arr.concat(studentData[key].students);
}, [])} />
  <OldStudentsButton data ={Object.keys(studentData).reduce(function(arr, key) {
    if(studentData[key].active == true)
    return arr.concat(studentData[key].students);
    else
    return arr;
}, [])} /> */}
        <form>
          <label>
            Enter two numbers:
     <div className="clearfix" />
            <input type="number" value={this.state.firstnumber} onChange={this.firstNumberChange} />
            <div className="clearfix" />
            <input type="number" value={this.state.secondNumber} onChange={this.secondNumberChange} />
            <div>
              <label>Number changed: a= {this.state.firstNumber} , b= {this.state.secondNumber}</label>
              <div className="clearfix" />
              <div> [ {this.state.array.map(item => <label> {item} </label>)} ]</div>
              <div>
                <button onClick={this.generateSquareRoot}>Process array </button>
                <div> [ {this.state.squareArray.map(item => <label> {item} </label>)} ]</div>
              </div>
            </div>
          </label>
        </form>
      </div>
    );

    return myBody;
  }
}

export default App