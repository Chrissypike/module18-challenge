const { Schema, Types } = require('mongoose');

const schemaReaction = new Schema({
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

schemaReaction
    .get(function () {
        return this.createdAt.Date.now;
    }); 

module.exports = schemaReaction;