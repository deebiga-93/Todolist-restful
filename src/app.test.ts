
const chai = require("chai");
const sinon = require("sinon");

var expect = chai.expect();
let describe =chai.describe();
let it =chai.it();
describe('Tests for todo.app', function() {
    it("name character is equal to 96",function(){
        expect('name').to.have.lengthOf.within(1,96);
    });
    it ("description character is equal to 256",function(){
        expect('description').to.have.lengthOf.within(1,256);
    });
    it('A list has id and listname',function(){
        expect(['id','description','status']).to.include.members(['id','name']);
    });
} );