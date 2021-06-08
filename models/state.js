const { Schema, model } = require("mongoose");

const schema = new Schema({
  stateName: { type: String, required: true, unique: true },
  stateText: { type: String, required: true },
  teaType:   {type: String, required: true},
  teaStruct: {type: String, required: true}
});

module.exports = model("State", schema);
