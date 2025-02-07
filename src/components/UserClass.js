import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
     const {name,role,company} = this.props
    return (
      <div className="UserClass">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count Increase
        </button>
        <h2>name:{name}</h2>
        <h3>role:{role}</h3>
        <h4>Company:{company}</h4>
      </div>
    );
  }
}

export default UserClass;
