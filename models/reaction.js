const { Schema, Types } = require('mongoose');

const reactionData = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: (``)
    },
    reactionBody: {},
    username: {},
    createdAt: {},
},
{
    toJSON: {
    getters: true,
},
    id: false,
});

reactionData
    .get(function () {
        return this.createdAt.Date.now;
    }); 

module.exports = reactionData;