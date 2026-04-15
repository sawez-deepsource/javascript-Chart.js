// docs/samples scope: no-console is off, eqeqeq still fires
console.log('this should NOT be flagged');
console.warn('nor this');
if (1 == 2) { console.log('only eqeqeq fires'); }
