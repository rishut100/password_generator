import React, { Component } from "react";
import "./password.css";
import Randomise from "randomatic";

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      characters: 8,
      uppercase: false,
      numbers: false,
      symbols: false,
      strength: 0,
    };

    this.characterChange = this.characterChange.bind(this);
    this.includeUppercase = this.includeUppercase.bind(this);
    this.includeNumbers = this.includeNumbers.bind(this);
    this.includeSymbols = this.includeSymbols.bind(this);
    this.setVariable = this.setVariable.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
  }

  componentDidMount = () => {
    let variable = this.setVariable();
    const characters = this.state.characters;

    let password = Randomise(variable, characters);
    this.setState({
      password: password,
    });
    this.passwordStrength();
  };

  characterChange = (e) => {
    const characters = e.target.value;
    this.setState({
      characters: characters,
    });
    let variable = this.setVariable();

    let password = Randomise(variable, characters);
    this.setState({
      password: password,
    });
    this.passwordStrength();
  };

  includeUppercase = () => {
    this.setState({
      uppercase: !this.state.uppercase,
    });
    let variable = this.setVariable();
    const characters = this.state.characters;

    let password = Randomise(variable, characters);
    this.setState({
      password: password,
    });
    this.passwordStrength();
  };

  includeNumbers = () => {
    this.setState({
      numbers: !this.state.numbers,
    });
    let variable = this.setVariable();
    const characters = this.state.characters;

    let password = Randomise(variable, characters);
    this.setState({
      password: password,
    });
    this.passwordStrength();
  };

  includeSymbols = () => {
    this.setState({
      symbols: !this.state.symbols,
    });
    let variable = this.setVariable();
    const characters = this.state.characters;

    let password = Randomise(variable, characters);
    this.setState({
      password: password,
    });
    this.passwordStrength();
  };

  setVariable = () => {
    const capital = this.state.uppercase;
    const num = this.state.numbers;
    const symbol = this.state.symbols;
    let variable = "a";
    if (capital === true && num === false && symbol === false) {
      variable = "Aa";
    } else if (capital === false && num === true && symbol === false) {
      variable = "0a";
    } else if (capital === false && num === false && symbol === true) {
      variable = "!a";
    } else if (capital === true && num === true && symbol === false) {
      variable = "A0a";
    } else if (capital === true && num === false && symbol === true) {
      variable = "A!a";
    } else if (capital === false && num === true && symbol === true) {
      variable = "0!a";
    } else if (capital === true && num === true && symbol === true) {
      variable = "A0!a";
    }
    return variable;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const char = this.state.characters;
    let variable = this.setVariable();

    let password = Randomise(variable, char);
    this.setState({
      password: password,
    });
    this.passwordStrength();
  };

  passwordStrength = () => {
    const characters = this.state.characters;
    const uppercase = this.state.uppercase;
    const num = this.state.numbers;
    const symbol = this.state.symbols;
    if (
      characters >= 15 &&
      uppercase === true &&
      num === true &&
      symbol === true
    ) {
      this.setState({
        strength: 100,
      });
    } else if (
      characters >= 10 &&
      uppercase === true &&
      num === true &&
      symbol === false
    ) {
      this.setState({
        strength: 70,
      });
    } else if (
      characters >= 10 &&
      uppercase === true &&
      num === true &&
      symbol === true
    ) {
      this.setState({
        strength: 80,
      });
    } else if (
      characters >= 10 &&
      uppercase === true &&
      num === false &&
      symbol === false
    ) {
      this.setState({
        strength: 50,
      });
    } else {
      this.setState({
        strength: 20,
      });
    }
    return this.state.strength;
  };

  render() {
    return (
      <div className="generator fluid">
        <div className="container">
          <h3 className="password-display">{this.state.password}</h3>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="elements-main">
              <label>Number Of Characters</label>
              <input
                type="range"
                min="6"
                max="20"
                value={this.state.characters}
                id="characterAmountRAnmge"
                onChange={this.characterChange}
                className="range"
              />
              <input
                className="number-input"
                type="number"
                min="6"
                max="20"
                value={this.state.characters}
                id="characterAmountNumber"
                onChange={this.characterChange}
              />
            </div>

            <div className="break"></div>

            <div className="elements">
              <label>Uppercase</label>
              <input
                type="checkbox"
                id="includeUpperCase"
                style={{ marginLeft: "9.3em" }}
                onChange={this.includeUppercase}
                defaultChecked={this.state.upppercase}
                value={this.state.uppercase}
              />
            </div>

            <div className="break"></div>

            <div className="elements">
              <label>Numbers </label>
              <input
                type="checkbox"
                id="includeNumbers"
                style={{ marginLeft: "10em" }}
                onChange={this.includeNumbers}
                value={this.state.numbers}
                defaultChecked={this.state.numbers}
              />
            </div>

            <div className="break"></div>

            <div className="elements">
              <label>Symbols </label>
              <input
                type="checkbox"
                id="includeSymbols"
                style={{ marginLeft: "10.5em" }}
                onChange={this.includeSymbols}
                value={this.state.numbers}
                defaultChecked={this.state.symbols}
              />
            </div>

            <div className="break"></div>

            <div className="elements">
              <label>Strength </label>
              <meter
                value={this.state.strength}
                min="0"
                max="100"
                className="passwordMeter"
              ></meter>
            </div>

            <div className="break"></div>

            <button type="submit" className="btn btn-outline-dark active ">
              <h5 className="submit-button mt-2 mb-2"> Regenerate </h5>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
