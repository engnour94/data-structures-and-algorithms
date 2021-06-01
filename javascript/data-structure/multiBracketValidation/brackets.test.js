'use strict';
const multiBracketValidation = require('./multi-bracket-validation.js')
const { expect } = require('@jest/globals');

//   <-------------✔️😇 Testing: Happy Path 😇✔️------------>

it('Happy Path 😇: it should return ✔️true✔️ when the brackets are balanced',()=>{
 
    expect(multiBracketValidation('{}')).toBeTruthy();
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();

})

it('Happy Path : it should return ❌false❌when the brackets are not balanced',()=>{
 
    expect(multiBracketValidation('[({}]')).toBeFalsy();
    expect(multiBracketValidation('(](')).toBeFalsy();
    expect(multiBracketValidation('{(})')).toBeFalsy();
  
})

it("Failure cases: it should raise an exception if the input is empty or the type of input is not a string", () => {

    const errorFunction = () => {
        let output =multiBracketValidation('');
    }
    //assert
    expect(errorFunction).toThrow('❌You Should Enter input string!❌');
});