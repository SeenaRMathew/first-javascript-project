console.log('Eventually shows from data here');


// Add an event listener for the button
let button = document.querySelector('#get-name-button');
button.addEventListener('click', function () {
  console.log('You clicked on the button');

  // Get the text content of the form field
  let input = document.querySelector('#your-name');

  // Log to the console
  console.log(`Hello, ${input.value}!`);


  //Add to list 
  let nameList=document.querySelector("#names-list");

  let nextName=document.createElement("li");
  
  nextName.textContent=input.value;

  if(nameList!=="")
  {
    nameList.insertAdjacentElement("beforeend",nextName);
  }
});