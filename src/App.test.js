//Please note that I have used the jest framework for testing through react. Due to time limitations, I have just prototyped a couple //of tests here. These are yet to be completed.



import * as generator from "./generator.js"; 
const finalvalue = require('./generator');

test('factorial series ', () => {
  expect(generator.factorial.init()).toBe(1);
  expect(generator.factorial.next()).toBe(1);
   expect(generator.factorial.next()).toBe(2);
    expect(generator.factorial.next()).toBe(6);
  
});
test('range series ', () => {
    var val=1;
    var start=2;
    var step=5;
  expect(generator.range.init(start)).toBe(start);
  expect(generator.range.next(val,start,step)).toBe(start+val*step);
   
  
});