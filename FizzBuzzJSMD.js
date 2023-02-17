const fizzbuzz = n =>{
  let seq = [];
  let fb = [];
  seq[n-1]=0;
  [...seq.keys()].map( x =>{
  	let i=x+1;
    fb.push(`${["Fizz","","",""][i%3]}${["Buzz","","","",""][i%5]}${["",i,i,i,i,i,i,i,i][(i%3)*(i%5)]}`)
  });
  return(fb.join(','));
}

document.write(fizzbuzz(100));