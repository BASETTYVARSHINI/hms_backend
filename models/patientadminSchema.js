const mongoose = require("mongoose");
const patientadminSchema = new mongoose.Schema({
    "name": { type: String },
    "email": { type: String },
    "age": { type: Number },
    "gender": { type: String },
    "problem": { type: String },
    "doj": { type: Date },
    "bloodGroup": { type: String }
}, {
    collection: "patient"
});

module.exports = mongoose.model("patientadminSchema", patientadminSchema);
