
const utils = require('../utils/writer.js');
const Products = require('../service/ProductsService');


module.exports.getById = function getById(req, res, next, id) {
  Products.getById(id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getByIds = function getByIds(req, res, next, ids, attributes) {
  Products.getByIds(ids, attributes)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getByName = function getByName(req, res, next, name) {
  Products.getByName(name)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
