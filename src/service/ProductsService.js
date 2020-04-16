
const productsMockData = require('../mockData.json');

/**
 * Get product by id
 * Get a particular product by it's id
 *
 * id Integer
 * returns Object
 * */
exports.getById = function (id) {
  return new Promise(((resolve, reject) => {
    const item = productsMockData.find((items) => items.id === id);
    if (item) {
      resolve(item);
    } else {
      reject(new Error('Product not found'), 404);
    }
  }));
};


/**
 * Get products by list of product IDs
 * Accepts a list of product IDs and returns their details. Also accept a list of fields to
 * be returned in the response.
 *
*/

exports.getByIds = function (prodAttributes) {
  return new Promise(((resolve, reject) => {
    const { productIds } = prodAttributes;
    const { productAttributes } = prodAttributes;
    const matchedProducts = productsMockData.filter((product) => productIds.includes(product.id));
    const productResponse = matchedProducts.reduce((result, product) => {
      const final = {};
      productAttributes.map((productAttribute) => {
        final[productAttribute] = product[productAttribute];
      });
      result.push(final);
      return result;
    }, []);
    if (productResponse.length > 0) {
      resolve(productResponse);
    } else {
      reject(new Error('Product not found'), 404);
    }
  }));
};


/**
 * Get product by name
 * Get a particular product by it's name
 *
 * name String
 * returns Object
 * */
exports.getByName = function (name) {
  return new Promise(((resolve, reject) => {
    const item = productsMockData.find((items) => items.name === name);
    if (item) {
      resolve(item);
    }
    reject(new Error('Product not found'), 404);
  }));
};
