const tree= require('../tree/tree.js')
const {HashTable}= require('../hashTables/hashTables.js')

function treeIntersection (BT1,BT2){
    if(BT1.root===null || BT2.root===null){
        return `Empty Tree!`;
      }

let result=[]

let BT1Array= BT1.preOrder()
let BT2Array=BT2.preOrder()
let table= new HashTable(4001)
for(let i = 0;i<BT1Array.length;i++){
    let key= BT1Array[i].toString();
    let value=BT1Array[i]
    if(!table.contains(key)){
        table.add(key,value)
    }
}

for(let i=0;i<BT2Array.length; i++){
    let key=BT2Array[i].toString();
    let value=BT2Array[i]
    if(table.contains(key)){
        result.push(value)
    }
}
console.log(result)
return result.length>0?result:'No matches'
}
module.exports= treeIntersection



