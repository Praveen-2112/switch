var a=parseFloat(prompt("Enter a value"));
var oprater=prompt("Enter the oprater");
var b=parseFloat(prompt("Enter b value"));
switch(oprater){
	case "+":
	c=a+b;
	break;
	case "-":
	c=a-b;
	break;
	case "*":
	c=a*b;
	break;
	case "/":
	c=a/b;
	break;
	case "%":
	c=a%b;
	break;
}
document.write(c);