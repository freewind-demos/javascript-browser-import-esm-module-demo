import {helloHelper} from "./hello3-helper.js";

console.log('### hello3.js loaded');

export function hello() {
  console.log(`### ${helloHelper('hello3')}`)
}
