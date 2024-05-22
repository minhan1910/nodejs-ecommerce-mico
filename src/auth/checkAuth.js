"use strict";

const { findById } = require("../services/apikey.service");

const HEADER_KEY = {
  API_KEY: "x-api-key",
  AUTHORIZATION: "authorization",
};

const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER_KEY.API_KEY]?.toString();

    if (!key) {
      return res.json({
        message: "Forbidden Error",
      });
    }

    // check objKey
    const objKey = await findById(key);

    if (!objKey) {
      return res.json({
        message: "Forbidden Error",
      });
    }

    // assign next auth
    req.objKey = objKey;

    return next();
  } catch (error) {}
};

const permission = (permission) => {
  return (req, res, next) => {
    if (!req?.objKey?.permissions) {
      return res.json({
        message: "Permission Denied",
      });
    }
    const validPermission = req.objKey.permissions.includes(permission);

    if (!validPermission) {
      return res.json({
        message: "Permission Denied",
      });
    }

    return next();
  };
};

const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

module.exports = {
  apiKey,
  permission,
  asyncHandler,
};
