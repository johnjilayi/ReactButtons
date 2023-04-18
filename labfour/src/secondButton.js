import React from "react"

class SecondButton extends React.Component {

    secondMessage() {
       alert = "this is second button"
    }

 render() {
    return <button onClick={this.secondMessage}>Button Two</button>
 }
}


export default SecondButton