const { Schema, model} = require('mongoose');

const userData = new Schema ({
    username: {type: String, required: true, unique: true, trimmed: true},
    email: {type: String, required: true, unique: true},
    thoughts: [{type: Schema.Types.Array, ref: 'thought'}],
    friends: [{type: Schema.Types.ObjectId, ref: 'user'}]

},
{
    toJSON: {
        virtuals: true,
    },
    id: false
});

userData 
    .virtual('friendCount')
    .get(function () {
        const numberOfFriends = this.friends.length;
        return numberOfFriends
    }) 

const User = model('user', userData);

module.exports = User;