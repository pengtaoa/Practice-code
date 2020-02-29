import React from 'react'
import ReactDom from 'react-dom'
import LifeCycle from './LifeCycle'
// const ele = < h2 > hello,react 233</h2>
const arr=[2,2,5,6,5,5,6]
console.log(arr);
ReactDom.render(<LifeCycle arr={arr}></LifeCycle>,document.querySelector('#root'));
class Clock extends React.Component {
    constructor(props){
    super(props);
    this.state={date:new Date()};
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      };
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      };
    
      tick() {
        this.setState({
          date: new Date()
        });
      };
  }
 
 
    ReactDom.render(
      <Clock/>,
      document.getElementById('roo')
    );
// ReactDom.render(<ul>
//     {
//     arr.map((item,index)=>{
//         return <li key={index}>{item}</li>
//     })
//     }
// </ul>, document.querySelector('#root')); 