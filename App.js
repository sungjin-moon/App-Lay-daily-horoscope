import React, { Component } from "react";
import Splash from "./pages/Splash";
import Main from "./pages/Main";
import styled from "styled-components/native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        splash: false
      });
    }, 3000);
  }

  render() {
    const { splash } = this.state;
    return (
      <Container style={{ width: "100%", height: "100%" }}>
        {splash ? <Splash /> : <Main />}
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 100%;
`