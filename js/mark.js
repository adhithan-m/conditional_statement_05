//var 2-A school has following rules for grading system: 
//a. Below 25 - F 
//b. 25 to 45 - E 
//c. 45 to 50 - D 
//d. 50 to 60 - C 
//e. 60 to 80 - B 
//f. Above 80 - A

var mark = parseInt(prompt("Enter the marks"));
if (mark<25)
{
   alert("F");
}
else if(mark>=25 && mark<=44)
{
   alert("E");
}
else if(mark>=45 && mark<=49)
{
   alert("D");
}
else if(mark>=50 && mark<=59)
{
   alert("C");
}
else if(mark >=60 && mark<80)
{
   alert("B");
}
else if(mark>80 )
{
  alert("A");
}