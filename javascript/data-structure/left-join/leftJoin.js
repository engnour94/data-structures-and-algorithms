'Use strict';

function leftJoin(table1, table2) {
  let output = [];
 if(!table1||!table1) return 'please enter two hash maps' 

  for (let i = 0; i <= table1.table.length - 1; i++) {
    if (table1.table[i]) {
      let key = [Object.keys(table1.table[i].head.value)[0]][0];
      let value = [Object.values(table1.table[i].head.value)[0]][0];
      output.push([key, value]);

      if (table1.table[i].head.next) {
        let current = table1.table[i].head.next;

        while (current) {
          let key = Object.keys(current.value)[0];
          let value = Object.values(current.value)[0];
          output.push([key, value]);
          current = current.next;
        }
      }
    }
  }
  for (let j = 0; j <= output.length - 1; j++) {
    let join = table2.get(output[j][0]);
    output[j].push(join);
    console.log('join',join)
  }
  console.log('output',output);
  return output.length === 0 ? null : output;
}

module.exports = leftJoin;