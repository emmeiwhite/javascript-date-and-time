const before = new Date('March 10 2019 12:34:90');

const now = Date.now();


const diff = now - before.getTime();

console.log(diff);
const seconds = Math.round(diff / 1000);
const minutes = Math.round(seconds / 60);
const hours = Math.round(minutes / 60);
const days = Math.round(hours / 60);

console.log(`this blog post was writted ${days} days ago :) Enjoy`);


// There are no accidents

