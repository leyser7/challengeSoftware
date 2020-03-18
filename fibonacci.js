function fibonacci(n) {
  if (n === 1) {
    var s = [0, 1]
    return s;
  } else {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
var stdin = process.openStdin();
console.log('Numero para obtener la serie fibonacci');
stdin.addListener("data", (d) => {
  n = d.toString().trim()
  console.log(fibonacci(d));
  console.log('ingrese un nuevo numero para obtener la serie fibonacci');
})
