const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in', function() {
      expect(sum()).to.equal(0);
      // assert.equal(sum(),0);
    });

    it('Should return 10', function() {
      // expect(sum(5,5)).to.equal(10);
      assert.equal(sum(5,5),10);
    });

    it('Arguments should be numbers', function() {
      // expect(num1).to.be.a('number' , 'argument must be a number');
      assert.isNumber(sum(1,1), 'is a number');
    });
});
