import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Form, Popconfirm, Typography, message } from "antd";
import { Link } from "react-router-dom";

const Exchange = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(
        "http://api.exchangeratesapi.io/v1/latest?access_key=4905b0e100e11aab901b2145ef2068ef&format=1"
      )
      .then((response) => {
        setData(response.data);
        console.log(this.setData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Дата",
      dataIndex: "date",
      width: "50%",
    },
    {
      title: "Валюта",
      dataIndex: "rates",
      width: "50%",
      editable: true,
    },
  ];

  return (
    <div>
      <Form>
        <Table
          bordered
            // dataSource={this.getData}
          columns={columns}
        />
      </Form>
      <Link to="/">
        <button className="showExchange">Повернутись в обмінник валют</button>
      </Link>
    </div>
  );
};

export default Exchange;
