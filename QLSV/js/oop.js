/**
 Đối tượng trong javascript
==> đưa biến và hàm về đúng vị trí của đói tượng đó

 */


// var product = {
//     id:1,
//     name :'ip9',
//     price: 7675,
//     showInfo: function(){
//         console.log('id',product.id);
//         console.log('name',product.name);
//         console.log('price',product.price);

//     }
// }

// var student = {
//     id:2,
//     name:'Nguyễn lê hưng' ,
//      showInfo: function(){
//          console.log('id',student.id);
//          console.log('name',student.name);
//     }
// }


// //Truy xuất đềnn các biến trong đối tượng(thuộc tính)
// console.log('id',product.id);
// console.log('id',product['id']);
// console.log('tên sv',student.name);


// // Truy xuất phương thức cho đối tượng
// product.showInfo();
// student['showInfo']()

var sinhVien = {
    maSInhVien:'',
    tenSInhVien:'',
    loaiSinhVien:'',
    diemToan:0,
    diemVan:0,
    tinhDiemTrungBinh : function(){
        // this chứa trong đối tượng thì this chính là đối tượng đó
        //this.diemToan <==>sinhVien.diemToan
         var diemTrungBinh = (Number(this.diemToan)+ Number(this.diemVan))/2;
         return diemTrungBinh
    },
    xeploaiSinhVien: function(){
        var dtb= this.tinhDiemTrungBinh();
        var xeploai="";
        if(dtb>=5){
            xeploai="Đậu";
        }else{
            xeploai= "Rớt"
        }
        return xeploai
    }
}
document.querySelector('#btnHienThi').onclick = function(){

// Luu thong tin gn dùng nhập tử giao diện
sinhVien.maSInhVien=document.querySelector('#txtMaSV').value;
sinhVien.tenSInhVien=document.querySelector('#txtTenSV').value;
sinhVien.loaiSInhVien=document.querySelector('#loaiSV').value;
sinhVien.diemToan=document.querySelector('#txtDiemToan').value;
sinhVien.diemVan=document.querySelector('#txtDiemVan').value;


console.log('sinh viên:',sinhVien);
//Dom đén các thê trên giao diện để hiển thị thông tin từ đói tượng
// Hiển thị thông tin ng dùng nhập lên giao diện
document.querySelector('#spanTenSV').innerHTML = sinhVien.tenSInhVien;
document.querySelector('#spanMaSV').innerHTML = sinhVien.maSInhVien;
document.querySelector('#spanLoaiSV').innerHTML = sinhVien.loaiSInhVien;
document.querySelector('#spanDTB').innerHTML = sinhVien.tinhDiemTrungBinh();
document.querySelector('#spanXepLoai').innerHTML = sinhVien.xeploaiSinhVien();

}


function sinhVienabc(){
    this.maSInhVien=''
    this.tenSInhVien=''
    this.loaiSInhVien=''
    this.diemToan=''
    this.diemVan=''
   this.xeploai=function(){
       console.log('devB xép loại!!');
   }
}

function sinhVienabc(){
    this.maSInhVien=''
    this.tenSInhVien=''
    this.loaiSInhVien=''
    this.diemToan=''
    this.diemVan=''
    this.tinhDiemTrungBinh=function(){
        console.log("Tính điểm trung bình");
    }
}









