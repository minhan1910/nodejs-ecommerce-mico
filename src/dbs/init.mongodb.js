"use strict";

// cho nay no tu cache lai nen chi co 1 connect toi
// con java hay dotnet thi no ko cache neen  co nhieu ket noi den mongodb neu ko cache laij
const mongoose = require("mongoose");
const { db: { host, port, name } } = require('../config/config.mongodb')
const { countConnect } = require("../helpers/check.connect");

const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    // dev
    if (1 === 1) {
      // in ra khi query
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    // using strategy pattern to switch database
    if (type == "mongodb") {
      mongoose
        .connect(connectString)
        .then((_) => {
          console.log("Connected Pro Mongodb Sucess: "  + name);
          countConnect();
        })
        .catch((err) => console.log(`Error Connecte!`));
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
