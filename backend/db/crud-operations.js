var crudModel = require('./schema/crud-schema');

const crudOperations = {

    saveData(obj, res) {
        var Obj = new crudModel(obj);
        Obj.save((err) => {
            if (err) {
                res.json({ msg: "error" });
            } else {
                var object = {
                    msg: "Successfully Saved"
                };
                res.json(object);
            }
        })
    },

    getData(res) {
        crudModel.find({}, (err, docs) => {
            if (err) {
                res.json({ msg: "error" });
            } else {
                if (docs && docs.length > 0) {
                    res.json(docs);
                }
            }
        })
    },
    editData(id, obj, res) {
        crudModel.findByIdAndUpdate(id, obj, (err) => {
            if (err) {
                res.json({ msg: "error" });
            } else {
                res.json({ msg: 'Successfully edited' });
            }
        })
    },
    deleteData(id, res) {
        crudModel.findByIdAndRemove(id, (err) => {
            var obj = { msg: 'successfully deleted' }
            if (err) {
                res.json({ msg: "error" })
            } else {
                res.json(obj);
            }
        })
    }
};

module.exports = crudOperations;