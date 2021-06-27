const {HashTable} = require('../hashTables/hashTables.js')


function repeatedWord(string) {
    if (typeof string !== "string") {
        return "only string accepted";
      } 
    const table = new HashTable(1021);
    const words = string.match(/\w+/g);
      for(let i = 0; i < words.length; i++){
      let keyword = words[i].toLowerCase();
     
      if (table.contains(keyword)){
        return table.get(keyword).toString();
      }
      table.add(keyword, keyword);
    }
    
  }
  console.log(repeatedWord("Once upon once  a time, there was a brave princess who..."))
  module.exports = repeatedWord;