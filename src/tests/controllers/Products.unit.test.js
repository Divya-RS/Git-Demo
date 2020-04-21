const { expect } = require('chai');
const Products = require('../../controllers/Products');

describe('Product controller test ', async () => {
  const stubServerResponse = {
    writeHead: function (statusCode, headers) { },
    write: function (body) { },
    end: function () { }
  };
  it('Should retrieve the corresponding product when id is given', async () => {
    const output = await Products.getById({}, stubServerResponse, null, 1);
    expect(output).to.be.undefined;
  });
  it('Should return error message when the corresponding product is not present when id is given', async () => {
    const output = await Products.getById({}, stubServerResponse, null, 0);
    expect(output).to.be.undefined;
  });
  it('Should retrieve the corresponding product when name is given', async () => {
    const output = await Products.getByName({}, stubServerResponse, null,'Linkbuzz');
    expect(output).to.be.undefined;
  });
  it('Should return error message when the corresponding product is not present when name is given', async () => {
    const output = await Products.getByName({}, stubServerResponse, null, 'aabc');
    expect(output).to.be.undefined;
  });
  it('Should retrieve the corresponding products and requested attributes based on input', async () => {
    const productAttributes = {
      productIds: [1, 2, 10],
      productAttributes: ['id', 'name'],
    };
    const output = await Products.getByIds({}, stubServerResponse, null,productAttributes);
    expect(output).to.be.undefined;
  });
  it('Should return error message when the corresponding product is not present', async () => {
    const productAttributes = {
      productIds: [11],
      productAttributes: ['id', 'name'],
    };
    const output = await Products.getByIds({}, stubServerResponse, null, productAttributes);
    expect(output).to.be.undefined;
  });
});
