import React from "react";

class FirstButton extends React.Component {



    shoot() {
        alert("shoot")
    }

    Boot() {
        alert("Boot")
    }

    Green() {
        alert("Grean")
    }

    render() {
       return (
        <div>
       <button onClick={this.Boot}>Click Boot</button>
       <button onClick={this.shoot}>Click shoot</button>
       <button onClick={this.Green}>Click Green</button>
       </div>
       )

    }
//  constructor() {
//     super()
//     this.state = {
//         counter: 0
//     };

//     this.increamentCounter = this.increamentCounter.bind(this);
//  }

//  increamentCounter() {
//     this.setState(function(prevState) {
//         return {
//             counter: prevState.counter + 1
//         }
//     })
//  }

// render() {
//     return (
//         <div>
//             <h>Counter Value: {this.state.counter}</h>
//             <button onClick={this.state.counter}>increament</button>
//         </div>
//     )
// }


}

export default FirstButton