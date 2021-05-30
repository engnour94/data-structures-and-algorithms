const {Stack}=require('../stacksAndQueues/stacks-and-queues.js') 

class PseudoQueue {
    constructor(){
        this.primaryStack= new Stack();
        this.secondaryStack =new Stack();
    }
    enqueue(value){
        if(!value){
            throw new Error('you have to insert value')
        }
        this.primaryStack.push(value)
        
       
    }
    dequeue(){
        if(!this.primaryStack.top&&!this.primaryStack.top){
            throw new Error('❌You can not call dequeue on empty queue!!!!❌')
        }else{
            while(this.primaryStack.top){
                this.secondaryStack.push(this.primaryStack.pop())  
            }
              let popped=this.secondaryStack.pop();
              
    
               while(this.secondaryStack.top){ this.primaryStack.push(this.secondaryStack.pop())}
               
              return popped
            }
             
        }
    
    }


    module.exports = {
        PseudoQueue: PseudoQueue,
     
    }