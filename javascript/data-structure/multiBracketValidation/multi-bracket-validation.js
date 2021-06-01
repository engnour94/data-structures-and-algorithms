'use strict';
/**
 * @param {string} input
 * @return {boolean}
 * The idea is to add all opening brackets to a stack and pop them off the stack when closing
 *  brackets are found. If the closing bracket doesn’t match the top element (last pushed 
 * element) of the stack, then the string is invalid. The string is also invalid if it has
 *  been iterated through and the stack is not empty in the end.
 */

const { Stack } = require("../stacksAndQueues/stacks-and-queues");

module.exports= function multiBracketValidation(input){
    let stack = new Stack()
    if (!input||typeof input != 'string') {
        throw new Error('❌You Should Enter input string!❌');
      }
    for (let i = 0; i < input.length; i++) {
        if(input[i]==='('||input[i]==='{'||input[i]==='['){
            stack.push(input[i])
        }
        else if(input[i]===')'||input[i]==='}'||input[i]===']'){
            if(stack.isEmpty()) {
            return false;
        }else{
            let firstBracket= stack.peek()
            if((firstBracket==='('&&input[i]===')')||(firstBracket==='{'&&input[i]==='}') || (firstBracket==='['&&input[i]===']')){
                stack.pop();
            } else {
                return false;
            } 
            }
        }

    }
    if(!stack.isEmpty()) {
        return false;
        }
    return true


}