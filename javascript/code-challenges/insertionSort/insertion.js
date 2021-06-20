module.exports =function insertionSort(arr){

    if(!arr||arr.length===0||typeof arr=== 'string'||typeof arr=== 'number') return ('you should insert numerical array')
    for(let i=1 ; i<arr.length; i++){
      if(typeof arr[i] === 'string'||typeof arr[i] === 'boolean'){
          return ('you should insert numerical array')
        }
       let j =i-1;
      let temp=arr[i];
     
      while(j >= 0 && temp < arr[j]){
        arr[j+1]=arr[j]
        j=j-1
      }
      arr[j+1 ] = temp
    }
    return arr
  
  }

  