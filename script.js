function processAddress() {
      if (address.value == "") {
            alert("input cannot be empty");
      } else {
            var letter = (address.value).toLowerCase();
            newAddress.innerHTML = letter
      }
}

function temperature(){
      var inp = document.getElementById('inputTemperature').value
      if(inp < 19){
            alert('cold')
      } else if (inp >=20 && inp <= 28){
            alert('warm')
      } else if (inp > 28) {
            alert('hot')
      }
}
function checkMMI(){
      var weight = document.getElementById('weight').value
      var height = document.getElementById('height').value
      var mmi = weight / (height * height)
      if (mmi < 18.5) {
            alert("Underweight")
      } else if (mmi >= 18.5 && mmi <= 24.9) {
            alert("Normal weight")
      } else if (mmi >= 25 && mmi <= 29.9) {
            alert("Overweight")
      } else {
            alert("Obesity")
      }
} 
function titlew(){
      var userinput = document.getElementById('title').value
      var newTitel = document.getElementById('newTitle')
      var booktitle = ["malik , titiolu , omolara "]
      if (userinput == ""){
            alert("pls input book title")
      }else if(booktitle.includes(userinput)){
            alert("Dulicate Found");
      } else {
            alert("you are welcome");
            newTitel.innerHTML = "your book title is" + userinput
      }
}
function adjustSpace() {
      if (text.value == ""){
            alert("Pls enter a text")
      }else {
            alert ("you are welcome")
      }
}
function correctpassword(){
      var password = document.getElementById("password").value
      if (password.lenght < 8){
            alert("password must be 8")
      }else {
            alert ("Correct password")
      }
}