function minus() {
  if (document.getElementById("num")) {
    var curr = parseInt(document.getElementById("num").innerHTML);
  }

  if (curr && curr <= 60) {

    if (curr <= 10) {
      document.getElementById("num").innerHTML = "0" + (curr - 1);
    } else {
      document.getElementById("num").innerHTML = curr - 1;
    }
  } else {
    document.getElementById("num").innerHTML = 60;
  }

  setTimeout(function() {
    minus();
  }, 1000);
};
minus();
