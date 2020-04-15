const expect = require('chai').expect;
const ProductService = require('../../service/ProductsService');

describe('Product service test ', async function() {
    it('Should retrieve the corresponding product when id is given', async function(){
        const output = await ProductService.getById(1);
        expect(output.unitPrice).to.equal('$32.12');
    })
    it('Should retrieve the corresponding product when name is given', async function(){
        const output = await ProductService.getByName('Linkbuzz');
        expect(output.unitPrice).to.equal('$32.12');
    })
})