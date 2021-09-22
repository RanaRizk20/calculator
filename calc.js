let result =document.getElementById("inputText");
let calculate=(number) =>{
  result.value += number;

}

let Result=()=>{
  try{
    result.value = eval(result.value)
  }
  catch(err){
    alert("Enter valid input");
  }
}
function Clear(){
  result.value = " ";
}
function Del(){
  result.value = result.value.slice(0,-1);
}

