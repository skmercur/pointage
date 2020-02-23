import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import firebase from "./config/FireBaseConfig";
import "antd/dist/antd.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      users: [],
      disp: []
    };
  }

  componentDidMount() {
    let db = firebase.database().ref("pointage");
    var temp = [];
    var fDate = [];
    db.on("value", snapshot => {
      this.setState({ data: Object.values(snapshot.val()) });
      snapshot.forEach(day => {
        if (!temp.includes(Object.getOwnPropertyNames(day.val()))) {
          temp.push(Object.getOwnPropertyNames(day.val()));
        }
        day.forEach(user => {
          console.log(user.val());
        });
      });
      let tempUser = [...new Set(temp.flat())];
      let k = 1;
      snapshot.forEach(day => {
        let leng = Object.values(snapshot.val()).length;

        tempUser.forEach(user => {
          let ee = Object.getOwnPropertyNames(day.val());
          if (ee[0] === user) {
            if (k === leng) {
              day.forEach(uu => {
                fDate.push({
                  user: user,
                  Jour: uu.val()?.Jour?.time,
                  Soir: uu.val()?.Soir?.time
                });
              });
            }
          }
        });
        k++;
      });
      console.log(fDate);
      this.setState({ users: tempUser, disp: fDate });
    });
  }

  render() {
    const columns = [
      {
        title: "Nom Prenom",
        dataIndex: "user",
        key: "user"
      },
      {
        title: "Jour",
        dataIndex: "Jour",
        key: "Jour"
      },
      {
        title: "Soir",
        dataIndex: "Soir",
        key: "Soir"
      }
    ];
    return <Table dataSource={this.state.disp} columns={columns} />;
  }
}
