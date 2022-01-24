import { Component } from "react";
import { connect } from "react-redux";

import classes from "./Counter.module.css";

import { counterActions } from "./../store/index";

class Counter extends Component {
  toggleCounterHandler = () => {};

  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  handleIncrementByTen = () => {
    this.props.incrementByTen();
  };

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        <button onClick={this.handleIncrementByTen.bind(this)}>
          IncrementByTen
        </button>
        <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()),
    incrementByTen: () => dispatch(counterActions.incrementByTen(10)),
    decrement: () => dispatch(counterActions.decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
