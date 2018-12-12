var ab=function(y){
if(y>0 || y==0)
return y;
else {  
  return (-y);
    }
}

var e = 0.00005;
var f=function(x){
return ((x*x*x)-(5*x)+1);
}

var main=function(a,b){
  if( f(a)*f(b)>=0 )
  {
    console.log("the interval is wrong!");
  }
  else {
    console.log("right interval");
 do{
   var i=0;
   var x=a-(b-a)/(f(b)-f(a))*f(a);
   if(f(x)*f(a)>0)
   b=x;
   else
   a=x;
   i++;

 }while (ab(f(x))>e);
console.log("root is:"+x);
}
 }
 exports.main=main;
