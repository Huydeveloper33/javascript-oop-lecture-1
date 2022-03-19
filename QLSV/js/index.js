document.querySelector('#btnHienThi').onclick = function(){
  // Lấy thông tin ng dùng nhập từ giao diện
    var maSinhVien = document.querySelector('#txtMaSV').value;
    var tenSinhVien = document.querySelector('#txtTenSV').value;
    var loaiSinhVien = document.querySelector('#loaiSV').value;
    var diemToan = document.querySelector('#txtDiemToan').value ;
    var diemVan = document.querySelector('#txtDiemVan').value ;


console.log('maSinhVien',maSinhVien);
console.log('tenSinhVien',tenSinhVien);
console.log('loaiSinhVien',loaiSinhVien);
console.log('diemToan',diemToan);
console.log('diemVan',diemVan);
// Hiển thị thông tin ng dùng lên giao diện
document.querySelector('#spanTenSV').innerHTML = tenSinhVien
document.querySelector('#spanMaSV').innerHTML = maSinhVien
document.querySelector('#spanLoaiSV').innerHTML = loaiSinhVien
// Gọi hàm tính điêm TB
var diemTrungBinh = tinhDiemTrungBinh(diemToan,diemVan)
document.querySelector('#spanDTB').innerHTML = diemTrungBinh;
// Gọi hàm xếp loại SV
var xeploai = xeploaiSinhVien(diemTrungBinh);
document.querySelector('#spanXepLoai').innerHTML = xeploai
}


//Thông tin không có sẵn ===> PHẢI VIẾT HÀM FUNCTION()


function tinhDiemTrungBinh(dToan,dVan){
var diemTrungBinh = 0;//Output:number
diemTrungBinh = (Number(dToan)+ Number(dVan))/2;
return diemTrungBinh
}

function xeploaiSinhVien(dTrungBinh){//input
    //output: "đậu ", "rớt"
    var xeploai = ""
    if(dTrungBinh >=5 ){
        xeploai="Đậu"
    }else{
        xeploai="Rớt"
    }
return xeploai
}


function devA(){
    this.kiemTraDevA=''
}









