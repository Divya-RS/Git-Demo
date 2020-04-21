const { expect } = require('chai');
const ProductService = require('../../service/ProductsService');

describe('Product service test ', async () => {
  it('Should retrieve the corresponding product when id is given', async () => {
    const output = await ProductService.getById(1);
    expect(output.unitPrice).to.equal('$32.12');
  });
  it('Should throw error when given id is not present', async () => {
    ProductService.getById(0).catch((err) => {
      expect(err.message).to.equal('Product not found');
    });
  });
  it('Should retrieve the corresponding product when name is given', async () => {
    const output = await ProductService.getByName('Linkbuzz');
    expect(output.unitPrice).to.equal('$32.12');
  });
  it('Should throw error when given name is not present', async () => {
    ProductService.getByName('abc').catch((err) => {
      expect(err.message).to.equal('Product not found');
    });
  });
  it('Should retrieve the corresponding products and requested attributes based on input', async () => {
    const productAttributes = {
      productIds: [1, 2, 10],
      productAttributes: ['id', 'name'],
    };
    const output = await ProductService.getByIds(productAttributes);
    expect(output.length).to.equal(3);
  });
  it('Should throw error when given id is not present', async () => {
    const productAttributes = {
      productIds: [11],
      productAttributes: ['id', 'name'],
    };
    ProductService.getByIds(productAttributes).catch((err) => {
      expect(err.message).to.equal('Product not found');
    });
  });
});
