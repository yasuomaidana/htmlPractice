alert("Hi, this is a raw example of how to use JS");
var name = prompt("Whats your name?");
var docWrite = (toWrite)=> document.write(toWrite);
var date = Date();
console.log(`${name}`);
docWrite(`<h1>${name}</h1>`);
docWrite(document.baseURI+"<br>");
docWrite(document.title+"<br>");
docWrite("Date is: "+date);