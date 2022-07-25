Bài 1: Cho 1 mảng gồm 10 phần tử, tìm phần tử lớn nhất trong mảng
let A = [1, 3, 5, 7, 9, 13, 4, 6, 8, 10];
A.sort(function(a, b){
	return b - a;
});
console.log(A);
console.log(A[0]);

Bài 2: Cho 1 mảng gồm 10 phần tử, tìm phần tử nhỏ thứ 3 trong mảng
let A = [1, 3, 5, 7, 9, 13, 4, 6, 8, 10];
A.sort(function(a, b){
	return a - b;
});
console.log(A);
console.log(A[2]);

Bài 3: Cho 1 mảng gồm 10 phần tử, tìm tổng và trung bình công của các phần tử
let A = [1, 3, 5, 7, 9, 13, 4, 6, 8, 10];
var S = 0;
for(var i = 0; i < A.length; i ++) {
	S = S + A[i];
}
console.log(S);
console.log(S/A.length);

Bài 4: Cho 1 mảng gồm 10 phần tử, tìm tất cả các số nguyên tố có trong mảng
function kiemTraSNT(N) {
	var dem = 0;
	for(var i = 1; i <= N; i ++) {
		if(N % i == 0) {
			dem++;
		}
	}
	if(dem==2) {
		console.log(N + " la so nguyen to");
	}
	else {
		console.log(N + " khong la so nguyen to");
	}
};
let A = [1, 3, 5, 7, 9, 13, 4, 6, 8, 10];
for(var j = 0; j < A.length; j++) {
	kiemTraSNT(A[j]);
}

Bài 5: Cho 1 mảng gồm 10 phần tử, kiểm tra xem mảng có đối 
	xứng không ? vd: 1,2,3,3,2,1 -> đối xứng

let A = [1, 3, 5, 7, 9, 13, 4, 6, 8, 10];
var B = [], C = [];
var u = 0; v = 0;
var dem = 0;
for(var i = 0; i < A.length; i++) {
	if(i < A.length) {
		B[u] = A[i];
		u ++;
	}
	else {
		C[v] = A[i];
		v ++;
	}
}
for(u = 0; u < B.length; u ++) {
	v = B.length - u;
	if(B[u] != C[v]) {
		dem++;
	}
	dem = 0;
}
if(dem==0) {
	console.log("Day la mang doi xung");
}else {
	console.log("Day khong la mang doi xung");
}

Bài 6: Cho 1 mảng gồm 10 phần tử, thay thế tất cả số âm = 0

let A = [-1, 3, -5, 7, -9, 13, -4, 6, -8, 10];
for(var i = 0; i < A.length; i++) {
	if(A[i] < 0) {
		A[i] = 0;
	}
}
console.log(A);

Bài 7: Cho 1 mảng gồm 10 phần tử, tìm phần tử có số lần xuất 
	hiện nhiều nhất. vd: 1,2,2,3,4 -> là 2 vì có 2 giá trị

let A = [1, 3, 5, 1, 9, 13, 4, 1, 8, 10];
var dem = 0;
var max = 0;
var n = 0;

A.sort(function(a, b) {
	return a - b;
});
for(var i = 0; i < A.length; i ++) {
	if(A[i] === A[i+1]) {
		dem++;
	}
	if(max < dem) {
		n = A[i];
		max = dem;
	}
	max = 1;
}
if(max == 1) {
	console.log("Cac phan tu co so lan xuat hien nhu nhau, deu xuat hien 1 lan");
}
else {
	console.log("Phan tu xuat hien nhieu nhat: " + n + " xuat hien " + max + " lan.");
}

//
let A = [1, 1, 3, 3, 5, 8, 5, 9, 5, 1, 4];
var dem = 0;
var isResult = true;
var max = 0;
var n = 0;
var isFirstLoad = true;

A.sort(function(a, b) {
	return a - b;
});
for(var i = 0; i < A.length; i ++) {
	if(A[i] === A[i+1]) {
		dem++;
	} else {
        if(max < dem) {
			if(isFirstLoad == true) {
				isResult = true
			} 
            else {
				isResult = false;
				isFirstLoad = false
				n = A[i];
				max = dem;
				dem = 0;
			}
    	}
    }
}
if(isResult) {
	console.log("Cac phan tu co so lan xuat hien nhu nhau, deu xuat hien 1 lan");
}
else {
	console.log("Phan tu xuat hien nhieu nhat: " + n + " xuat hien " + (max+1) + " lan.");
}

//Cách khác:
	b1: tạo ra 1 mảng B chỉ gồm các phần tử khác nhau
	b2: tạo mảng C lưu giá trị đếm số lần xuất hiện của mỗi phần tử mảng B trong mảng A
	b3: B[i] tương ứng với giá trị lớn nhất của mảng C chính là phần tử xuất hiện nhiều nhất
	b4: TH trong mảng có >2 phần tử xuất hiện bằng nhau nhiều nhất:
		tạo mảng D lưu vị trí các phần tử cùng xuất hiện nhiều nhất

let A = [1, 2, 3, 2, 1, 5, 6, 3, 9, 1];
var B = [A.length];
var x = 1;
B[0] = A[0];

//tao mang chi gom cac phan tu khac nhau
for (var i = 1; i < A.length; i++) {
  var dem = 0;
  for (var j = 0; j < x; j++) {
    if (A[i] === B[j]) {
      dem++;
    }
    if (dem === 0) {
      B[x] = A[i];
      x++;
    }
  }
}
//mang chua so lan xuat hien moi phan tu
let C = [x];
for (i = 0; i < x; i++) {
  C[i] = 0;
}
//Dem so lan xuat hien cua moi phan tu
for (i = 0; i < x; i++) {
  for (j = 0; j < A.length; j++) {
    if (A[j] === B[i]) {
      C[i]++;
    }
  }
}
//Tim so lan xuat hien nhieu nhat
var max = C[0],
  vtri = 0;
y = 1;
for (i = 1; i < x; i++) {
  if (C[i] > max) {
    max = C[i];
    vtri = i;
    y = 1;
  }
  if (C[i] === max) {
    y++;
  }
}
//Neu co 1 phan xuat hien nhieu nhat
if (y === 1) {
  console.log('Phan tu xuat hien nhieu nhat la: ' + B[vtri] + ' ,xuat hien ' + max + ' lan.');
}  
else {
  var d = [y];
  var z = 0;
  for (i = 0; i < x; i++) {
    if (C[i] === max) {
      d[z] = i;
      z++;
    }
  }
  console.log('Phan tu xuat hien nhieu nhat la: ');
  for (i = 0; i < z; i++) {
    console.log(B[d[i]] + ' ,xuat hien ' + max + ' lan.');
  }
}

Bài 8: Cho 2 mảng có ngẫu nhiên số phần tử, trộn 2 mảng thành
	1 mảng, đảm bảo mảng kết quả sắp xếp giảm dần. 
A = [1, 5, 2, 4, 3];
B = [9, 7, 6, 5, 8];
A = A.concat(B);

A.sort(function(a, b){
	return b - a;
});
console.log(A);

Bài 9: Cho 1 mảng gồm 10 object, mỗi object student gồm có 2 
	thuộc tính là id: number & age: number. 
	Lọc các student có age > 10.

let student = [
	{id: 01, age: 9},
	{id: 02, age: 8},
	{id: 03, age: 17},
	{id: 04, age: 7},
	{id: 05, age: 5},
	{id: 06, age: 13},
	{id: 07, age: 9},
	{id: 08, age: 7},
	{id: 09, age: 18},
	{id: 10, age: 19},
];
for(var i = 0; i < student.length; i ++) {
	if(student[i]['age'] > 10) {
		console.log([student[i]);
	}
}