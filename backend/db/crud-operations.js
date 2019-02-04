var crudModel = require('./schema/crud-schema');

const crudOperations = {

    saveData(obj, res) {
        var Obj = new crudModel(obj);
        Obj.save((err) => {
            if (err) {
                res.send(err);
            } else {
                var object={
                    msg:"Successfully Saved"
                };
                res.json(object);
            }
        })
    }

};

module.exports = crudOperations;