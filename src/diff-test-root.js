// Root scope: eqeqeq should fire, no-console should fire
const val = 1;
if (val == 2) {
  console.log('loose equality');
}
