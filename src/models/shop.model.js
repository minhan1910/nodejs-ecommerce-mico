"use strict";

//!dmbg
const { model, Schema, Types } = require("mongoose"); // Erase if already required

const DOCUMENT_NAME='Shop'
const COLLECTION_NAME='Shopes'

// Declare the Schema of the Mongo model
var shopSchema = new Schema({
  name: {
    type: String,
    trim: true,
    maxLength: 150,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    maxLength: 150,
  },
  password: {
    type: String,
    required: true,
    maxLength: 150,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: 'inactive',
  },
  roles: {
    type: Array,
    defauilt: []
  },
  verify: {
    type: Schema.Types.Boolean,
    default: false,
  },
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
module.exports = model(DOCUMENT_NAME, shopSchema);
