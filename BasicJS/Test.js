console.log("Hello");
let sum;
function AddValue(x,y)
{
  return parseInt(x)+parseInt(y);
}


let calculateId=document.getElementById('calculate');
calculateId.onclick= function()
{
  let val1=document.getElementById('value1').value;
  let val2=document.getElementById('value2').value;
  sum=AddValue(val1,val2);
  let resultId=document.getElementById('result');
  resultId.innerHTML=sum;
  console.log(sum);
  
}
