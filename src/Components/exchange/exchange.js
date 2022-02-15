import React, { Component } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "./exchange.scss";
import { SketchOutlined } from "@ant-design/icons";

class Exchange extends Component {
  state = {
    currencies: [],
    date: new Date().toLocaleString(),
  };

  componentDidMount() {
    axios
      .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          currencies: data,
          USD: data.txt,
        });
      });
  }

  render() {
    const { currencies, date } = this.state;

    const columns = [
      {
        title: "Код літерний",
        dataIndex: "cc",
        key: "cc",
      },
      {
        title: "Назва валюти",
        dataIndex: "txt",
        key: "txt",
      },

      {
        title: "Курс в грн",
        dataIndex: "rate",
        key: "rate",
      },
      {
        title: "Дата",
        dataIndex: "exchangedate",
        key: "exchangedate",
      },
    ];

    return (
      <div className="main-exchange">
        <Link to="/">
          <button className="showExchange">
            <SketchOutlined /> перейти в обмінник валют <SketchOutlined />
          </button>
        </Link>
        <h1>{`Офіційний курс гривні щодо іноземних валют станом на ${date}`}</h1>

        <Table dataSource={currencies} columns={columns} />
      </div>
    );
  }
}

export default Exchange;
