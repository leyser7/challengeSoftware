edades = [33, 40, 19, 20, 18, 42];
for (let i = 0; i < edades.length; i++) {
  for (let j = 0; j < i; j++) {
    if (edades[i] < edades[j]) {
      edades.splice(j, 0, edades[i]);
      edades.splice(i + 1, 1);
      break;
    }
  }
  console.log(edades);
}
