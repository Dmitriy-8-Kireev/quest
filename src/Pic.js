import React, { Component } from "react";

export class Pic extends Component {
  state = {
    isLoading: false
  };
  componentDidMount() {
    this.loadImage(this.props.url);
  }
  componentWillReceiveProps(nextProps) {
    this.loadImage(nextProps.url);
  }
  loadImage = src => {
    this.setState({ isLoading: true });
    let img = new Image();
    img.onload = () => {
      this.setState({ isLoading: false });
    };
    img.src = src;
  };
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Загружаю...</p>
        ) : (
          <img src={this.props.url} alt={"name-pic"} />
        )}
      </div>
    );
  }
}
