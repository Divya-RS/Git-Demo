
const utils = require('../../utils/writer');

describe('writeJson test ', () => {
  const response = new Promise((resolve) => {
    resolve({
      id: 1,
      name: 'Oba',
    });
  });
  it('Should write the proper response', () => {
    const output = utils.writeJson(response);
    console.log(output);
  });
  it('Should return thr response with code', () => {
    const output = utils.respondWithCode(200, {id: 1});
    console.log(output);
  });
});
