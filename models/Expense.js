const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    // house: {
    //     type: Schema.Types.ObjectId,
    //     ref: "House"
    // },
    body: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    is_paid: {
        type: Boolean,
        default: false
    }
});

module.exports = Expense = mongoose.model("Expense", ExpenseSchema);
