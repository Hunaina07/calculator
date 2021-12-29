function getNumber(num) {
    console.log(num)
    var cal = document.getElementById("cal");

    cal.value+=num;
}

function clearcal (){
    var cal = document.getElementById('cal');
    cal.value=""
}
function getcal(){
    var cal = document.getElementById('cal');
     
    cal.value=eval(cal.value)
}