import React from 'react'
import ReactDom from 'react-dom'
// import LifeCycle from './LifeCycle'
import Counter from './Counter'
// const ele = < h2 > hello,react 233</h2>
// const arr=[2,2,5,6,5,5,6];
// ReactDom.render(<LifeCycle arr={arr}></LifeCycle>,document.querySelector('#root'));
// class Clock extends React.Component {
//     constructor(props){
//     super(props);
//     this.state={date:new Date()};
//     }
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//         </div>
//       );
//     }
//     componentDidMount() {
//         this.timerID = setInterval(
//           () => this.tick(),
//           1000
//         );
//       };
    
//       componentWillUnmount() {
//         clearInterval(this.timerID);
//       };
    
//       tick() {
//         this.setState({
//           date: new Date()
//         });
//       };
//   }
 
 
    ReactDom.render(
      <Counter initCounter={0}/>,
      document.getElementById('roo')
    );