const memo = require('memoizee');
let todos = (new Array(1_000_000)).fill(null).map((todo) => ({completed: Math.random() >= 0.5}));

function countCompleted(items) {
  return items.filter((it) => it.completed).length;
}

// function memo(fct) {
//   let cache;
//   let previousArgs;
//   return (...args) => {
//     if (deepEquals(previousArgs, args)) {
//       return cache;
//     }
//     cache = fct(...args);
//     previousArgs = args;
//     return cache;
//   }
// }

const countCompletedMemo = memo(countCompleted);

console.time('duree');
console.log(countCompletedMemo(todos) + ' items completed');
console.timeEnd('duree');

console.time('duree');
console.log(countCompletedMemo(todos) + ' items completed');
console.timeEnd('duree');

// changement muable ne provoque pas de nouvel appel
// todos.push({completed: true});
todos = [...todos, {completed: true}];
console.time('duree');
console.log(countCompletedMemo(todos) + ' items completed');
console.timeEnd('duree');

console.time('duree');
console.log(countCompletedMemo(todos) + ' items completed');
console.timeEnd('duree');

