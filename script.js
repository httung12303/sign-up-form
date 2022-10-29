const inputs = document.querySelectorAll('input');
const passWord = document.querySelector('#password');
const passWordRepeat = document.querySelector('#password-repeat');
document.addEventListener('DOMContentLoaded', onload);
inputs.forEach(input => input.addEventListener('click', removeOnLoad));
passWordRepeat.addEventListener('change', cmpPassWord);
passWord.addEventListener('change', cmpPassWord);
function onload() {
    console.log('1');
    inputs.forEach(input => input.classList.add("onload"));
}
function removeOnLoad() {
    this.classList.remove("onload");
    this.removeEventListener('click', removeOnLoad);
}
function cmpPassWord() {
    console.log('2');
    if(passWordRepeat.value !== passWord.value) {
        passWordRepeat.classList.add('invalid');
        document.querySelector('#match').textContent = "⚠ Password does not match";
        return;
    }
    passWordRepeat.classList.remove("invalid");
    document.querySelector('#match').textContent = "";
}
