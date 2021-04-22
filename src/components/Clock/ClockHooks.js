import { useClock } from "./useClock";

export default function Clock({delay = 1000}) {
  const now = useClock(delay);

  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}

// import { Component } from 'react';

// export default class Clock extends Component {
//   constructor() {
//     super();
//     this.state = {
//       now: new Date(),
//     };
//   }
//   componentDidMount() {
//     const { delay = 1000 } = this.props;
//     this._interval = setInterval(() => {
//       this.setState({
//         now: new Date(),
//       });
//     }, delay);
//   }
//   componentDidUpdate() {
//     // TODO ne faire ça que si le delay change
//     console.log('componentDidUpdate')

//     clearInterval(this._interval);
//     const { delay = 1000 } = this.props;
//     this._interval = setInterval(() => {
//       this.setState({
//         now: new Date(),
//       });
//     }, delay);
//   }
//   componentWillUnmount() {
//     clearInterval(this._interval);
//   }
//   render() {
//     // dans un composant stateful on manipule les props via this.props
//     return <div className="Clock">{this.state.now.toLocaleTimeString()}</div>;
//   }
// }
