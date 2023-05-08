function tambah() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil = angka1 + angka2;
  document.getElementById("hasil").innerText = hasil;
}
function kurang() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil = angka1 - angka2;
  document.getElementById("hasil").innerText = hasil;
}
function kali() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil = angka1 * angka2;
  document.getElementById("hasil").innerText = hasil;
}
function bagi() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil = angka1 / angka2;
  document.getElementById("hasil").innerText = hasil;
}

// Button RESET
function reset() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil").innerText = "0";
}
