let cache = [];
let max_value = 0;

function fibonacci(n) {
  if (n > max_value) {
    if (n === 1) {
      return [0, 1];
    } else {
      var s = fibonacci(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      cache = s;
      max_value = n;
      return s;
    }
  } else {
    return cache.slice(0, n + 1)
  }

};
var stdin = process.openStdin();
console.log('Numero para obtener la serie fibonacci con cache');
stdin.addListener("data", (d) => {
  n = d.toString().trim()
  console.log(fibonacci(parseInt(d)));
  console.log('ingrese un nuevo numero para obtener la serie fibonacci con cache');
})
