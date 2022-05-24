// Your code here
const expect = require('chai').expect;
const returnsThree = require('../problems/number-fun').returnsThree;
const reciprocal = require('../problems/number-fun').reciprocal;

describe('returnsThree()', function () {
    it('should return 3', function () {
        expect(returnsThree()).to.equal(3);
    });
});

describe('reciprocal(num)', function () {
    context('valid range (1 - 1000,000)', function () {
        it('should return reciprocal of a number', function () {
            expect(reciprocal(4)).to.equal(1 / 4);
        });
    });

    context('invalid range', function () {
        it('should throw RangeError when out of range', function () {
            expect(() => reciprocal(-3)).to.throw(RangeError, 'out of range');
            expect(() => reciprocal(2000000)).to.throw(RangeError, 'out of range');
        });
    });
    
});


