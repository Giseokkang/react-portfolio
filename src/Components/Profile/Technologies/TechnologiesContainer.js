import React from "react";
import TechnologiesPresenter from "./TechnologiesPresenter";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      htmlPercent: 0,
      cssPercent: 0,
      javascriptPercent: 0,
      nodeJSPercent: 0,
      reactPercent: 0
    };
    this.htmlTm = null;
    this.cssTm = null;
    this.javascriptlTm = null;
    this.nodeJSTm = null;
    this.reactTm = null;
    this.htmlIncrease = this.htmlIncrease.bind(this);
    this.cssIncrease = this.cssIncrease.bind(this);
    this.javascriptIncrease = this.javascriptIncrease.bind(this);
    this.nodeJSIncrease = this.nodeJSIncrease.bind(this);
    this.reactIncrease = this.reactIncrease.bind(this);
  }

  componentDidMount() {
    this.htmlTm = setInterval(this.htmlIncrease, 10);
    this.cssTm = setInterval(this.cssIncrease, 10);
    this.javascriptTm = setInterval(this.javascriptIncrease, 10);
    this.nodeJSTm = setInterval(this.nodeJSIncrease, 10);
    this.reactTm = setInterval(this.reactIncrease, 10);
  }

  htmlIncrease() {
    const { htmlPercent } = this.state;
    htmlPercent === 90
      ? clearTimeout(this.htmlTm)
      : this.setState({
          htmlPercent: htmlPercent + 1
        });
  }

  cssIncrease() {
    const { cssPercent } = this.state;
    cssPercent === 90
      ? clearTimeout(this.cssTm)
      : this.setState({
          cssPercent: cssPercent + 1
        });
  }

  javascriptIncrease() {
    const { javascriptPercent } = this.state;
    javascriptPercent === 80
      ? clearTimeout(this.javascriptTm)
      : this.setState({
          javascriptPercent: javascriptPercent + 1
        });
  }

  nodeJSIncrease() {
    const { nodeJSPercent } = this.state;
    nodeJSPercent === 80
      ? clearTimeout(this.nodeJSTm)
      : this.setState({
          nodeJSPercent: nodeJSPercent + 1
        });
  }

  reactIncrease() {
    const { reactPercent } = this.state;
    reactPercent === 70
      ? clearTimeout(this.reactTm)
      : this.setState({
          reactPercent: reactPercent + 1
        });
  }

  render() {
    const {
      htmlPercent,
      cssPercent,
      javascriptPercent,
      nodeJSPercent,
      reactPercent
    } = this.state;
    return (
      <TechnologiesPresenter
        htmlPercent={htmlPercent}
        cssPercent={cssPercent}
        javascriptPercent={javascriptPercent}
        nodeJSPercent={nodeJSPercent}
        reactPercent={reactPercent}
      />
    );
  }
}
