if (localStorage.getItem("thanhtoantour1") === "Đã Chuyển Khoản") {
  document.getElementById("thanhtoantour1").innerText = "Đã chuyển khoản";
} else {
  document.getElementById("thanhtoantour1").innerText = "Tiền Mặt ";
}
if (localStorage.getItem("thanhtoantour2") === "Đã Chuyển Khoản") {
  document.getElementById("thanhtoantour2").innerText = "Đã chuyển khoản";
} else {
  document.getElementById("thanhtoantour2").innerText = "Tiền Mặt ";
}
if (localStorage.getItem("thanhtoantour3") === "Đã Chuyển Khoản") {
  document.getElementById("thanhtoantour3").innerText = "Đã chuyển khoản";
} else {
  document.getElementById("thanhtoantour3").innerText = "Tiền mặt ";
}
if (localStorage.getItem("thanhtoantour4") === "Đã Chuyển Khoản") {
  document.getElementById("thanhtoantour4").innerText = "Đã chuyển khoản";
} else {
  document.getElementById("thanhtoantour4").innerText = "Tiền Mặt";
}
if (
  localStorage.getItem("thuexe1") === "1.000.000vnd" &&
  localStorage.getItem("dichvu1") === "thuê xe"
) {
  document.getElementById("dichvu1").innerText = "Thuê xe";
  document.getElementById("giathuexe1").innerText =
    localStorage.getItem("thuexe1");
} else if (localStorage.getItem("dichvu1") === "thuê xe") {
  document.getElementById("dichvu1").innerText = "Thuê xe";
}
// --------------
if (
  localStorage.getItem("thuexe2") === "1.000.000vnd" &&
  localStorage.getItem("dichvu2") === "thuê xe"
) {
  document.getElementById("dichvu2").innerText = "Thuê xe";
  document.getElementById("giathuexe2").innerText =
    localStorage.getItem("thuexe2");
} else if (localStorage.getItem("dichvu2") === "thuê xe") {
  document.getElementById("dichvu2").innerText = "Thuê xe";
}
// --------------
if (
  localStorage.getItem("thuexe3") === "1.000.000vnd" &&
  localStorage.getItem("dichvu3") === "thuê xe"
) {
  document.getElementById("dichvu3").innerText = "Thuê xe";
  document.getElementById("giathuexe3").innerText =
    localStorage.getItem("thuexe3");
} else if (localStorage.getItem("dichvu3") === "thuê xe") {
  document.getElementById("dichvu3").innerText = "Thuê xe";
}
// --------------
if (
  localStorage.getItem("thuexe4") === "1.000.000vnd" &&
  localStorage.getItem("dichvu4") === "thuê xe"
) {
  document.getElementById("dichvu4").innerText = "Thuê xe";
  document.getElementById("giathuexe4").innerText =
    localStorage.getItem("thuexe4");
} else if (localStorage.getItem("dichvu4") === "thuê xe") {
  document.getElementById("dichvu4").innerText = "Thuê xe";
}
