import { Component, useState } from 'react';

function hideable(WrappedComponent) {
  // class Hideable extends Component {
  //   state = {
  //     show: true,
  //   };
  //   render() {
  //     const { show } = this.state;
  //     const { defaultShow, ...otherProps } = this.props;

  //     return (
  //       <>
  //         <button onClick={() => this.setState({show: !show})}>{show ? 'Off' : 'On'}</button>
  //         {show && <WrappedComponent {...otherProps} />}
  //       </>
  //     );
  //   }
  // }
  function Hideable({ defaultShow, ...otherProps }) {
    const [show, setShow] = useState(true);


    return (
        <>
          <button onClick={() => setShow(!show)}>{show ? 'Off' : 'On'}</button>
          {show && <WrappedComponent {...otherProps} />}
        </>
      );
  }

  Hideable.displayName = `Hiddeable(${WrappedComponent.displayName || WrappedComponent.name})`

  return Hideable;
}

export { hideable };
