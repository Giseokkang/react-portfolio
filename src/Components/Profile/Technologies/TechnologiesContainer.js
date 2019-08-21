import React from "react";
import TechnologiesPresenter from "./TechnologiesPresenter";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 0
    };
    this.tm = null;
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.tm = setInterval(this.increase, 20);
  }

  componentWillUnmount() {
    clearInterval(this.tm);
  }

  increase() {
    const { percent } = this.state;
    percent === 100
      ? clearInterval(this.tm)
      : this.setState({
          percent: percent + 1
        });
  }

  render() {
    const { percent } = this.state;
    return (
      <TechnologiesPresenter
        htmlPercent={Math.min(percent, 90)}
        cssPercent={Math.min(percent, 90)}
        javascriptPercent={Math.min(percent, 80)}
        nodeJSPercent={Math.min(percent, 80)}
        reactPercent={Math.min(percent, 60)}
      />
    );
  }
}
