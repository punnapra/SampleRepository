function primeNumber() {
 x=document.getElementById('txt_field').value;
  for (i=1; i<=parseInt(x); i++) {
  var flag=0,flag1=0; 
    for (j=2; j<i; j++) {
      if(i%j==0){
       flag=1;
      if(i==x)
       flag1=1;
      }
    }
   if(flag==0)
    document.write(i+",");
  }
   if(flag1==0) 
    document.write('Its a prime number.');
   else 
    document.write('Its not a prime number.');
}