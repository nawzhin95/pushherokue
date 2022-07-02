

// codes run inside here 
console.log("Hello world nawzhi ")


fetch('http://localhost:3000/weather?address=ranaya')
  .then(response => response.json())
  .then(data =>{ 
    console.log(data)
  });

  