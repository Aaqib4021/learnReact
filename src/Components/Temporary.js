import { Component } from "react";

class Temporary extends Component {
  constructor(props) {
    super(props);
    console.log("third child constuctor");
  }
  render() {
    console.log("third child render");

    return (
      <div>
        <h1>name : {this.props.name}</h1>
      </div>
    );
  }
  componentDidMount() {
    console.log("third child didMount");
  }
}
export default Temporary;
