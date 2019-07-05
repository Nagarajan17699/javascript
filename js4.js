let num=5;
console.log(num);
console.log("hi");
for(var i=0;i<5;i++)
{
    console.log(i);
}
i=0;
while(i<7)
{
    console.log("Hel "+i);
    i++;
}
document.write("Hello");

function hello()
{
   var num2= window.prompt("Enter the value");
    for(var k=0;k<num2;k++){
    console.log("This is "+k);
    }
}

hello();