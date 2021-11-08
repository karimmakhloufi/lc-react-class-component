import "./App.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("this in constructor", this);
    this.state = {
      count: 0,
      quote: {
        character: "",
        image: "",
        quote: "",
        characterDirection: "",
      },
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log("component was mounted");
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((data) => this.setState({ quote: data.data[0] }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log("this was a new render");
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>INC</button>
        <p>{this.state.quote.character}</p>
        <p>{this.state.quote.quote}</p>
        <img src={this.state.quote.image} />
      </div>
    );
  }
}

export default App;
