import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./converter.scss";

class Converter extends Component {
  state = {
    currencies: ["EUR", "USD", "UAH"],
    base: "EUR",
    amount: "",
    convertTo: "UAH",
    result: "",
    date: "",
  };

  handleSelect = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      this.calculate
    );
  };

  handleInput = (event) => {
    this.setState(
      {
        amount: event.target.value,
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      axios
        .get(
          "http://api.exchangeratesapi.io/v1/latest?access_key=4905b0e100e11aab901b2145ef2068ef&format=1?base=${this.state.base}"
        )
        .then((response) => {
          const date = response.data.date;
          const result = (
            response.data.rates[this.state.convertTo] * amount
          ).toFixed(4);
          const currencyAr = ["EUR"];
          for (const key in response.data.rates) {
            currencyAr.push(key);
          }
          this.setState({ currencies: currencyAr, result, date });
        })
        .catch((err) => {
          console.log("Opps", err.message);
        });
    }
  };

  handleSwap = (event) => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    event.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null,
      },
      this.calculate
    );
  };

  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;

    return (
      <div className="main-form-converter">
        <h1>
          {amount} {base} еквівалентно
        </h1>
        <h1>
          {result} {convertTo}
        </h1>
        <h2>станом на {date}</h2>

        <div className="form-row">
          <div className="row-input">
            <p>Міняю</p>
            <form className="form-inline">
              <input
                className="form-inline-input"
                type="number"
                value={amount}
                onChange={this.handleInput}
              />
              <select
                className="form-inline-select"
                name="base"
                value={base}
                onChange={this.handleSelect}
              >
                {currencies.map((currency) => (
                  <option key={currency}>{currency}</option>
                ))}
              </select>
            </form>
            <p className="swap" onClick={this.handleSwap}>
              &#8659;&#8657;
            </p>

            <p>Отримую</p>
            <form className="form-inline">
              <input
                className="form-inline-input"
                disabled={true}
                value={result}
              />
              <select
                className="form-inline-select"
                name="convertTo"
                value={convertTo}
                onChange={this.handleSelect}
              >
                {currencies.map((currency) => (
                  <option key={currency}>{currency}</option>
                ))}
              </select>
            </form>
          </div>
        </div>

        <Link to="/exchange">
          <button className="showExchange">Переглянути курси валют</button>
        </Link>
      </div>
    );
  }
}

export default Converter;
