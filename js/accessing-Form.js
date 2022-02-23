console.log('Eventually shows from data here');


let button =document.querySelector('#get-name-button');
button.addEventListener('click',function()
{
  console.log('button clicked');
  let input=document.querySelector('#your-name');
console.log(`hello, ${input.value}`);
});