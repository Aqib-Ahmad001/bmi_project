
let btn = document.getElementById("mybtn");
btn.addEventListener("click", calculateBmi);
function calculateBmi(){
    let height=document.getElementById("height").value;
    let weight=document.getElementById("weight").value;
    let heightInCm= height/100;
    let bmiValue= (weight/(heightInCm**2));
    let finalResult=(bmiValue.toFixed(2));
   
    let msg;
    if (finalResult<=17.99){
        msg="Underweight";
    }
    else if (finalResult >= 18 && finalResult <= 25){
        msg="Normal";
    }
    else{
        msg="Overweight";
    }
    document.getElementById("result").innerHTML="BMI : " +finalResult;
    document.getElementById("msg").innerHTML=msg;
}