const expect = require('chai').expect;
const reverseString = require('../problems/reverse-string');

describe('reverse-string()', function () {
    it('should return reversed string', function () {
        const str = reverseString('fun');
        expect(str).to.equal('nuf');
    });

    it('should throw a TypeError if input is not a string', function () {
        const input1 = 3;
        const input2 = null;
        
        expect(() => reverseString(input1)).to.throw(TypeError, 'must be a string');
        expect(() => reverseString(input2)).to.throw(TypeError, 'must be a string');
    });

    it('should return "" if input is empty string', function () {
        expect(reverseString('')).to.equal('');
    });

});
