const mongoose = require("mongoose");
const doctoradminSchema = new mongoose.Schema({
    "name": { type: String },
    "email": { type: String },
    "contact": { type: Number },
    "specialization": { type: String }
}, {
    collection: "doctor"
});

module.exports = mongoose.model("doctoradminSchema", doctoradminSchema);
