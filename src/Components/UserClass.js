import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name+"child contructor.");
    // console.log(props);

    //*giving state varaibles in class component
    this.state = {
      // count: 0,
      // count1 : 1,
      userInfo: {
        name: "",
        location: "",
        avatar_url:"",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name+"child componentDidMount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const jsonData = await data.json();
    // console.log(jsonData);

    this.setState({
      userInfo : jsonData,
    });
  }
  componentWillUnmount(){
    // console.log("hey unmounted.");
  }
  render() {
    const { name, location,avatar_url    } = this.state.userInfo;
    // const { name } = this.props;

    // const { count } = this.state;
    // console.log(this.props.name+"child render.");

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>{name}</h2>

        {/* <h2>count:{count}</h2> */}

        {/* <button
          onClick={() => {
            this.setState({//to set state variables..
              count: this.state.count + 1,
            });
          }}
        >
          click me to increase count
        </button> */}

        {/* <button
          onClick={() => {
            if (this.state.count  > 0) {
              this.setState({
                count: this.state.count - 1,
              });
            }
          }}
        >
          click me to decrease count
        </button> */}

        {/* <h2>count1:{count1}</h2> */}

        <h3>Location : {location}</h3>
        <h3>email:aaqibnengroo5@gmail.com</h3>
      </div>
    );
  }
  componentDidUpdate(){
    // console.log("lastly called");
  }
}
export default UserClass;
