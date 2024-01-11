document.getElementById("btnResult").onclick = function () {
  var n = 0;
  var sum = 0;
  while (sum < 10000) {
    n++;
    sum = sum + n;
  }
  document.getElementById("showResult").innerHTML = n;
};

document.getElementById("btnSum").onclick = function () {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var sum = tinhTong(number1, number2);
  document.getElementById("showSum").innerHTML = sum;
};
function tinhTong(number1, number2) {
  var sum = 0;
  for (var i = 1; i <= number2; i++) {
    sum = sum + Math.pow(number1, i);
    console.log("sum", sum);
  }
  console.log("i", i);
  return sum;
}
document.getElementById("btnGiaiThua").onclick = function () {
  var n = document.getElementById("inputN").value;
  var i = 1;
  var giaiThua = 1;
  do {
    var giaiThua = giaiThua * i;
    i++;
  } while (i <= n);
  document.getElementById("showGiaiThua").innerHTML = n + "! = " + giaiThua;
};

document.getElementById("btnDiv").onclick = function () {
  var button = document.getElementById("button");
  button.innerHTML = "";

  for (var i = 1; i <= 10; i++) {
    var div = document.createElement("div");
    div.className = "";
    div.textContent = i;

    if (i % 2 === 0) {
      div.classList.add("red__bg");
    } else {
      div.classList.add("green__bg");
    }

    button.appendChild(div);
  }
};
function soNguyenTo(num) {
  if (num < 2) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

document.getElementById("btnNguyenTo").onclick = function () {
  var soNhap = document.getElementById("soNhap").value;
  var ketQuaDiv = document.getElementById("ketQua");
  ketQuaDiv.innerHTML = "";

  for (let i = 1; i <= soNhap; i++) {
    if (soNguyenTo(i)) {
      var soNguyenToDiv = document.createElement("div");
      soNguyenToDiv.textContent = i;
      ketQuaDiv.appendChild(soNguyenToDiv);
    }
  }
};
