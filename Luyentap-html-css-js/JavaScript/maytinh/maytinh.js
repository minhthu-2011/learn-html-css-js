function Lay_gia_tri_cu(){
    return document.getElementById("gia_tri_cu").innerText;
}
function In_gia_tri_cu(so) {
    document.getElementById("gia_tri_cu").innerText = so;
}
 
function Lay_ket_qua() {
 return document.getElementById("gia_tri_xuat").innerText;
}

 function In_Ket_qua(so) {
 document.getElementById("gia_tri_xuat").innerText = so;
}

function Dinh_dang_chuoi(so) {
    var n = Number(so);
    var gia_tri = n.toLocaleString("en");  //chuyen doi so thanh dang chuoi
    return gia_tri;
}

//Ham đảo ngược từ chuỗi sang số
function Xoa_Dinh_dang_chuoi(so) {
    return Number(so.replace(/,/g, '')); // Tìm kiếm dấu "," trong chuỗi và thay thế bằng chuỗi rỗng
}

var con_so = document.getElementsByClassName('con_so');
for(var i = 0; i < con_so.length; i ++) {
	con_so[i].addEventListener('click', function() {
		var ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua());
		if(ket_qua != NaN) {
			ket_qua = ket_qua + this.id;
			In_Ket_qua(ket_qua)
		}
	})
}

var cham = document.getElementsByClassName('cham');
for(var i = 0; i < cham.length; i ++) {
	cham[i].addEventListener('click', function() {
		var ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua());
		if(ket_qua != NaN) {
			ket_qua = ket_qua + this.id;
			In_Ket_qua(ket_qua)
		}
	})
}

//Khi nhập số đầu tiên sẽ ko bị hiện số 0 ở đầu
function In_Ket_qua(so) {
	if(so=="") {
		document.getElementById("gia_tri_xuat").innerText = so;
	} else {
		document.getElementById("gia_tri_xuat").innerText = Dinh_dang_chuoi(so);
	}
}

var he_thong = document.getElementsByClassName('he_thong');
for(var i=0; i < he_thong.length; i++) {
	he_thong[i].addEventListener('click', function() {
		if(this.id == "xoa_tat_ca") {
			In_Ket_qua("");
			In_gia_tri_cu("");
		}	
	})
}

var he_thong = document.getElementsByClassName('he_thong'); 
for(var i=0; i < he_thong.length; i++) { 
    he_thong[i].addEventListener('click', function() { 
        if(this.id == "xoa_tat_ca") { 
            In_Ket_qua(""); 
            In_gia_tri_cu(""); 
        } 
        else { 
            var ket_qua = Lay_ket_qua(); 
            var ket_qua_cu = Lay_gia_tri_cu(); 
            if(ket_qua != "" ) { 
                ket_qua = Xoa_Dinh_dang_chuoi(ket_qua); 
                ket_qua_cu =ket_qua_cu + ket_qua; 
                if(this.id == "=") { 
                    var ket_qua_cuoi = eval(ket_qua_cu); 
                    In_Ket_qua(ket_qua_cuoi) 
                    In_gia_tri_cu("") 
                } else { 
                    ket_qua_cu = ket_qua_cu + this.id; 
                    In_gia_tri_cu(ket_qua_cu) 
                    In_Ket_qua("") 
                } 
            } 
        } 
    }) 
} 

var doi_chieu_dau = document.getElementByClassName('doi_chieu_dau');
doi_chieu_dau[i].addEventListener('click', function() {
	var ket_qua_cuoi = Math.abs(ket_qua_cuoi);
})