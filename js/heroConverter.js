var input=document.querySelector("#input");
var result=document.querySelector("#result")
var conversionType=document.querySelector("#conversionType")
var conversionTypeValue;

input.addEventListener("keyup", myResult);
conversionType.addEventListener("change", myResult);

conversionTypeValue=conversionType.value;
console.log(conversionTypeValue);
function myResult(){
    conversionTypeValue=conversionType.value;
    if(conversionTypeValue==="K2P"){

        result.value=Number(input.value)* 2.2046;
    }
    else {
        result.value=Number(input.value)* 0.4536;
    }
}


