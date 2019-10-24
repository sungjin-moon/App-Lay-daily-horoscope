import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import Carousel from '../components/Carousel';
import datas from '../data.json';
import styled from 'styled-components';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: datas,
      data: datas[0]
    };
  }

  _changeData = index => {
    const { datas } = this.state;
    this.setState({
      data: datas[index]
    });
  };

  render() {
    const { data } = this.state;
    const source = {
      uri:
        'https://i.pinimg.com/originals/95/4e/11/954e11d9de733c62e9aaeaf1ed2c38a5.gif'
    };
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <ImageBackground source={source} style={{ flex: 1 }}>
          <Container>
            <Title>{data.title}</Title>
            <Wrapper>
              <Carousel
                datas={this.state.datas}
                width={200}
                height={200}
                translateX={2400}
                _changeData={this._changeData}
              />
            </Wrapper>

            <Date>{data.date}</Date>
            <ContentsBox>
              <Contents>{data.text}</Contents>
            </ContentsBox>
          </Container>
        </ImageBackground>
      </View>
    );
  }
}

const Container = styled.View`
  padding-top: 70;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.View`
  border-width: 1;
  border-color: white;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.Text`
  font-size: 25;
  color: white;
  text-align: center;
  margin-bottom: 20;
`;

const Date = styled.Text`
  font-size: 20;
  color: white;
  text-align: center;
  margin-top: 20;
`;

const ContentsBox = styled.View`
  margin-top: 20;
  width: 300;
  margin-left: auto;
  margin-right: auto;
`;

const Contents = styled.Text`
  font-size: 18;
  color: white;
  text-align: center;
`;
