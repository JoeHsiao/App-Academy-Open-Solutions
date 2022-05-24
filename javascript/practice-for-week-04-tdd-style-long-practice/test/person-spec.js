// Your code here
const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

const Person = require('../problems/person');

describe('Person class', function () {
    let p, p2;

    before(function () {
        p = new Person('John Doll', 32);
        p2 = new Person('Marry Hall', 20);
    });
    
    describe('constructor()', function () {     
        it('should set "name" and "age" properties when initiated.', function () {
            expect(p).has.keys(['name', 'age']);
        });
        it('should have "name" and "age" properties set to passed in values', function () {
            expect(p.name).to.deep.equal('John Doll');
            expect(p.age).to.deep.equal(age);
        });
    });
    
    describe('sayHello()', function () {
        it('should return a greeting message with the "name" property.', function () {
            expect(p.sayHello()).to.deep.equal('Greetings from John Doll!');
        });
    })

    describe('visit(otherPerson)', function () {
        it('should return a string stating that the instance visited the passed-in person', function () {
            expect(p.visit(p2)).to.deep.equal('John Doll visited Marry Hall');
        });
    });

    describe('switchVisit(otherPerson)', function () {
        it('should invoke \'otherPerson\'\'s visit() function, passing in the current instance', function () {
            expect(p.switchVisit(p2)).to.deep.equal('Marry Hall visited John Doll');
        })
    });

    describe('update(obj)', function () {
        beforeEach(function () {
            let obj1 = {name: "Angry Bird", age: 14};
            let obj2 = "abc";
            let obj3 = {car: "Tesla", plate: "HBT-343"};
            let p1 = new Person("Chris Paul", 37);
        });
        it('should update a Person\'s properties to match the passed in object\'s values', function () {
            p1.update(obj1);
            expect(p1.name).to.deep.equal('Angry Bird');
            expect(p1.age).to.deep.equal(14);
        });
        it('should throw TypeError if the argument is not an object', function () {
            let cb = () => p1.update(obj2);
            expect(cb).to.throw(TypeError, 'argument must be an object');
        });
        it('should throw TypeError if the object does not have a \'name\' and \'age\' property', function () {
            let cb = () => p1.update(obj3);
            expect(cb).to.throw(TypeError, 'obj must have a \'name\' and \'age\' property');
        });
    });

    describe('tryUpdate(obj)', function () {
        beforeEach(function () {
            let obj1 = {name: "Angry Bird", age: 14};
            let obj2 = "abc";
            let obj3 = {car: "Tesla", plate: "HBT-343"};
            let p1 = new Person("Chris Paul", 37);
        });
        it('should return ture if update(obj) succeeds', function () {
            const res = p1.tryUpdate(obj1);
            expect(res).to.deep.equal(true);
        });
        it('should return false if update(obj) throws an error', function () {
            const res1 = p1.tryUpdate(obj2);
            const res2 = p1.tryUpdate(obj3);
            expect(res1).to.deep.equal(false);
            expect(res2).to.deep.equal(false);
        });
    });

    describe('greetAll(array)', function () {
        const array = [p, p2];
        expect(Person.greetAll(array)).to.deep.equal(['abc', 'ccc']);
    })
});
