import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import { Ionicons } from '@expo/vector-icons';
import { red } from 'ansi-colors';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.datas,
      card: this.props.datas[0],
      width: this.props.width,
      height: this.props.height,
      translateX: this.props.translateX
    };
  }

  _handleLeftNav = () => {
    const { card, cards } = this.state;
    if (card.id === 0) {
      return;
    } else {
      const newIndex = card.id - 1;
      this.setState({
        card: cards[newIndex]
      });
      this.props._changeData(newIndex);
    }
  };

  _handleRightNav = () => {
    const { card, cards } = this.state;
    if (card.id === cards.length - 1) {
      return;
    } else {
      const newIndex = card.id + 1;
      this.setState({
        card: cards[newIndex]
      });
      this.props._changeData(newIndex);
    }
  };

  _setInlineStyle = (cards, card, width, height, translateX) => {
    styles.cardsTransform = {
      transform: [
        { translateX: Number(`-${card.id * (translateX / cards.length)}`) }
      ]
    };
    styles.cardsSliderSize = {
      maxWidth: width,
      minHeight: height
    };
  };

  render() {
    const { cards, card, width, height, translateX } = this.state;
    this._setInlineStyle(cards, card, width, height, translateX);
    return (
      <View style={styles.carousel}>
        <View style={[styles.cardsSlider, styles.cardsSliderSize]}>
          <Ionicons
            onPress={this._handleLeftNav}
            style={styles.carouselLeftNav}
            color="white"
            size={40}
            name="ios-arrow-back"
          />
          <Ionicons
            onPress={this._handleRightNav}
            style={styles.carouselRightNav}
            color="white"
            size={40}
            name="ios-arrow-forward"
          />
          <View style={[styles.cards, styles.cardsTransform]}>
            {cards.map((c, index) => (
              <Card
                key={index}
                id={card.id}
                c={c}
                width={width}
                height={height}
              />
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    position: 'relative'
  },
  cardsSlider: {
    position: 'relative'
  },
  carouselLeftNav: {
    position: 'absolute',
    top: '40%',
    left: '3%',
    zIndex: 5
  },
  carouselRightNav: {
    position: 'absolute',
    top: '40%',
    right: '3%',
    zIndex: 5
  },
  cards: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    left: 0
  }
});
