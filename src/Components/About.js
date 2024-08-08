import Temporary from "./Temporary";
import UserClass from "./UserClass";
import { Component } from "react";
import userContext from "../utils/UserContext";
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
        <div>
          LOGGED IN USER
          <userContext.Consumer>
            {(data) => {
              return(<h1>{data.userName}</h1>
            )}}
          </userContext.Consumer>
        </div>
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
