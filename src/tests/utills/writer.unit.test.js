const expect = require('chai').expect;
const utils = require('../../utils/writer');

describe('writeJson test ', function() {
    it('Should write the proper response', function(){
        const output = utils.writeJson('Response');
        console.log('....output', output);
    })
})