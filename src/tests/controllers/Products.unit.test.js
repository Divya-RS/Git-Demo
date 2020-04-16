const Products = require('../../controllers/Products');

describe('Product controller test ', async () => {
  it('Should retrieve the corresponding product when id is given', async () => {
    const output = await Products.getById({}, {}, null, 1);
    console.log(output);
  });
  it('Should retrieve the corresponding product when name is given', async () => {
    const output = await Products.getByName('Linkbuzz');
    console.log(output);
  });
  it('Should retrieve the corresponding products and requested attributes based on input', async () => {
    const productAttributes = {
      productIds: [1, 2, 10],
      productAttributes: ['id', 'name'],
    };
    const output = await Products.getByIds(productAttributes);
    console.log(output);
  });
});
