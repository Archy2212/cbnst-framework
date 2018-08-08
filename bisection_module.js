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

  var x=0;
  var x1=0;
  var i=0;
  do{
    var x=(a+b)/2;
    if(x==x1){
      console.log("the root is:"+x);
      break;
    }
    x1=x;
    i++;
    if(f(a)*f(x)<0)
    b=x;
    else {
      a=x;
    }
  }while (f(a)*f(b)<0)
}
}
exports.main=main;
