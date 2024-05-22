"use strict";

const ApiResult = require("../core/api.response");
const { CREATED, OK } = require("../core/success.response");
const AccessService = require("../services/access.service");

class AccessController {
  login = async (req, res, next) =>
    ApiResult.of(res).send(
      new OK({
        message: "Login Successfully!",
        metadata: await AccessService.login(req.body),
      })
    );

  signUp = async (req, res, next) =>
    ApiResult.of(res).send(
      new CREATED({
        message: "Registerd OK",
        metadata: await AccessService.signUp(req.body),
        options: {
          limit: 10,
        },
      })
    );
}

module.exports = new AccessController();
