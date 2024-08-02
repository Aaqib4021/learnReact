import Temporary from "./Temporary";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    // console.log("parent constructor.");
  }
  render() {
    // console.log("parent render.");

    return (
      <div className="about">
        <h1>Hey welcome here</h1>

        <UserClass name={"first child"} />
        {/* <UserClass name={"second child"} /> */}
        {/* <Temporary name={"third child"} /> */}
      </div>
    );
  }
  componentDidMount() {
    // console.log("parent componentDidMount");
  }
}

export default About;
