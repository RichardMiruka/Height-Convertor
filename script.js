//BMI = KG / (H/100 * H/100)
document.querySelector(".submit").addEventListener("click", heightConverter);
function heightConverter(){
var feet = parseInt(document.querySelector(".feet").value *12);
var inches = parseInt(document.querySelector(".inches").value);
var cm = (feet + inches) *2.54;
var n = cm.toFixed(0);
document.querySelector(".result").innerHTML = n;
}