let mongoose = require('mongoose');
let User = mongoose.model('User'); // change as needed
let Item = mongoose.model('Item'); // change as needed

module.exports = {
    createItemForUser : (req, res) => {
        console.log('server creating item for user');
        User.findOne({username: req.session.username})
            .exec((error, foundUser) => {
                if (error) {
                    console.log('error finding user');
                } else {
                    console.log('found user');
                    console.log('adding item to user')
                    var item = new Item(req.body);
                    item.creator = req.session.username;
                    item._creator = foundUser._id;
                    item.save((error) => {
                        foundUser.items.push(item);
                        foundUser.save((err) => {
                            if (err) {
                                console.log('there was an error');
                                console.log(error);
                            } else {
                                console.log('server success saving user and item');
                                res.json(item);
                            }
                        });
                    })
                }
            });
    },
    undoItemForUser: (req, res) => {
        console.log('server undoing item');
        console.log(req.body)
        Item.update({_id: req.body.id}, {complete: false}, (error) => {
            if (error) {
                console.log('something went wrong');
                console.log(error);
            } else {
                console.log('server successfuly undo item')
                res.json(true);
            }
        })
    },
    completeItemForUser: (req, res) => {
        console.log('server undoing item');
        console.log(req.body)
        Item.update({_id: req.body.id}, {complete: true}, (error) => {
            if (error) {
                console.log('something went wrong');
                console.log(error);
            } else {
                console.log('server successfuly completed item')
                res.json(true);
            }
        })
    },

    removeItemForUser: (req, res) => {
        console.log('server undoing item');
        console.log(req.body)
        Item.remove({_id: req.body.id}, (error) => {
            if (error) {
                console.log('something went wrong');
                console.log(error);
            } else {
                console.log('server successfuly removed item')
                res.json(true);
            }
        })
    },
}