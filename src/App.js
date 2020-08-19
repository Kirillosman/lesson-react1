import React from 'react';
import axios from "axios";
import User from "./components/User"

const api = "https://5f22f8cf0e9f660016d88b17.mockapi.io/queries"

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    users: [],
    warning:"",
  } 
  }

  componentDidMount() {
    axios.get(api).then(({data}) => {
      this.setState({users: data})
    });
    }
  

  componentDidUpdate() {
    if (this.state.users.length <20 && this.state.users.length !== 0) {
      this.setState({warning: "You have deleted a lot of users"});
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.users.length === nextState.users.length) {
      return false;
    }
    return true;
  }

  handleClick = (e) => {
    const {users} = this.state;
    const newUsers = [...users];
    newUsers.pop();
    this.setState({users: newUsers});
  }

render() {
  const {users, warning} = this.state;
return (
  <>
  <button onClick={this.handleClick}>Delete last user</button>
  <div>users count: {users.length}</div>
  {warning && <p className="title">{warning}</p>}
  <ul>
  {users.length > 0 
  ? users.map((user) => (
  <User key={user.id} id={user.id} query={user.query}/>))
 : "no users found"}</ul>
 </>
);
}
}



export default App