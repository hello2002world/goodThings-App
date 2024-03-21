import React, { Component } from 'react'

export default class User extends Component {
  constructor() {
    // console.log("constructor")
    super();
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate",this.state.count)
    if(this.state.count<5){
      return true
    }
  }
  render() {
    // console.log("render")
    return (
      <>
      <p>name:{this.props.name}</p>
      <p>designation:{this.props.dsg}</p>
        <h1>shouldComponentUpdate {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Change</button>
      </>
    )
  }
}

