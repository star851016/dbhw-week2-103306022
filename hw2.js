
var status=0;

function change(){
  if(status==1){
    document.getElementById("button1").innerHTML="start";
    status=0;
  }else{
    document.getElementById("button1").innerHTML="stop";
    status=1;
    minus();
  }
}
function reset(){
  document.getElementById("num").innerHTML = "00";
}
function minus() {
  //暫停
  if(status==0){
    return 0;
  }

  if(document.getElementById("time").value==0){
    var n = 60;
  }else{
    var n = document.getElementById("time").value;
  }

  if(document.getElementById("num")){
  var curr = parseInt(document.getElementById("num").innerHTML);
  }
  if (curr && curr <= n) {

    if (curr <= 10) {
      document.getElementById("num").innerHTML = "0" + (curr - 1);
    } else {
      document.getElementById("num").innerHTML = curr - 1;
    }
  } else {
    document.getElementById("num").innerHTML = n;
  }

   setTimeout(function() {
    minus();
  }, 1000);
};
minus();
