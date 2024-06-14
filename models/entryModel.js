const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    keywords: { type: String, required: true, maxlength: 1024 },
    name: { type: String, required: true, maxlength: 80 },
    cashAddress: { type: String, required: true },
    linkAddress: { type: String },
    description: { type: String, maxlength: 160 },
    totalBCH: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Entry", entrySchema);
