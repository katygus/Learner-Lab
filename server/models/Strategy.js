import mongoose from "mongoose";

const Schema = mongoose.Schema;
// define strategy schema
const strategySchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    strengthsLeveraged: {
        type: [String],
        require: true
    },
    supportsChallenges: {
        type: [String],
        require: true
    },
    ageGroup: {
        type: String,
        require: true
    },
    tags: {
        type: [String],
        require: true
    }
})

const Strategy = mongoose.model('strategy', strategySchema);

// create and export the model
export default Strategy
;