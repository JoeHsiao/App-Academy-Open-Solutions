// Your code here
const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);
const myMap = require('../problems/my-map');

describe('myMap(arr, callback)', function () {
    let arr1, arr2;
    let callback1, callback2;
    let spy1, spy2;
    
    this.beforeEach(() => {
        arr1 = [1, 2, 3];
        arr2 = ['a', 'b', 'c'];
        
        callback1 = (el) => el * 2;
        callback2 = (ch) => ch.toUpperCase();

        spy1 = chai.spy.on(arr1, 'map');
        spy2 = chai.spy(callback2);
    });

    it('should apply callback upon each element of the array', function () {
        expect(myMap(arr1, callback1)).to.deep.equal([2, 4, 6]);
        expect(myMap(arr2, callback2)).to.deep.equal(['A', 'B', 'C']);
        // expect(spy1).to.not.have.been.called();
    });

    it('should not modify the passed in array', function () {
        expect(myMap(arr1, callback1)).to.deep.equal([2, 4, 6]);
        expect(arr1).to.deep.equal(arr1);
    });

    it('should not use map() within the callback', function () {
        expect(myMap(arr1, callback1)).to.deep.equal([2, 4, 6]);
        expect(spy1).to.not.have.been.called();
    });

    it('should apply the callback upon each element in the array', function () {
        expect(myMap(arr2, spy2)).to.deep.equal(['A', 'B', 'C']);
        for (let i = 0; i < arr1.length; i++) {
            expect(spy2).on.nth(i+1).be.called.with(arr2[i]);
        }
    });
});