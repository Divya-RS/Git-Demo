const { expect } = require('chai');
const utils = require('../../utils/writer');

describe('writeJson test ', () => {
  const stubServerResponse = {
    writeHead: function (statusCode, headers) { },
    write: function (body) { },
    end: function () { }
  };
  const response = {
      id: 1,
      name: 'Linkbuzz',
      title: 'viverra pede ac diam cras pellentesque volutpat dui',
      unitPrice: '$32.12',
      availability: true,
      image: 'http://dummyimage.com/173x199.jpg/cc0000/ffffff'
    };
  it('Should write the proper response', () => {
    const output = utils.writeJson(stubServerResponse, response);
    expect(output).to.be.undefined;
  });
  it('Should write the proper response when code is explicitly given', () => {
    const output = utils.writeJson(stubServerResponse, response, 200);
    expect(output).to.be.undefined;
  });
  it('Should write the proper response when code is given as payload', () => {
    const output = utils.writeJson(stubServerResponse, 200);
    expect(output).to.be.undefined;
  });
  it('Should return thr response with code', () => {
    const output = utils.respondWithCode(200, { id: 1 });
    expect(output.code).to.equals(200);
  });
});
