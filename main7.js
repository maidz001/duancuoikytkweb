alert(
  "Quý Khách Vui Lòng Chú Ý Đến Khách Sạn Check In Đúng Ngày Book Phòng Nhé!!!!!!!!!"
);
document.getElementById("nameks").value = localStorage.getItem("nameks");
function m21() {
  if (document.getElementById("name").value === "") {
    document.getElementById("nametb").innerText === "vui lòng nhập họ và tên";
  }
  if (document.getElementById("sdt").value === "") {
    document.getElementById("sdttb").innerText ===
      "vui lòng nhập số điẹn thoại";
  }
  if (document.getElementById("ngaydi").value === "") {
    document.getElementById("ngayditb").innerText === "vui lòng chọn ngày ở";
  }
  if (document.getElementById("sophong").value === "") {
    document.getElementById("sophongtb").innerText === "vui lòng nhập số phòng";
  }
  if (
    document.getElementById("sophong").value !== "" &&
    document.getElementById("ngaydi").value !== "" &&
    document.getElementById("sdt").value !== "" &&
    document.getElementById("name").value !== ""
  ) {
    alert(
      "Chúc Mừng Bạn Đặt Phòng Thành Công!!! Vui Lòng Check In Đúng Hạn Nhé !!!!!!!!!"
    );
  }
}
