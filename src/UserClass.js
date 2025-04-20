import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log(this.props.name,"constructor")
  }
  async componentDidMount() {
    console.log(this.props.name,"componentDidMount")
    const data = await fetch("https://api.github.com/users/saikiranreddy2000");
    const json = await data.json();
    //console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    console.log(this.props.name,"render")
    const { login} = this.state.userInfo;
    return (
      <div className="userdata">
        <p>Name:{login}</p>
      </div>
    );
  }
}

export default UserClass;
