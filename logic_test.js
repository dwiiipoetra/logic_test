function maxRedigit() {
  let x = document.getElementById("numb").value;
  let text;
  split_numb = x.split("");

  if (x == "") { // jika kosong
    text = "Input harus diisi";
  }else if (x < 0 || x == 0 || x.length > 3) { // return null
    text = "Input invalid";
  }
  else if (split_numb[0] == split_numb[1] || split_numb[1] == split_numb[2] || split_numb[2] == split_numb[0]) { //jika ada digit yang sama
    text = "Digit angka tidak boleh sama";
  }
  else{
    let hasilUrutan = split_numb.sort(function(a, b){return b - a});
    alert("Angka setelah diurutkan: " + hasilUrutan);
  }
    document.getElementById("info1").innerHTML = text;
}

function alternateCase(param) {
    if (param == 1){
        let x = document.getElementById("char1").value;
        n = x.toUpperCase();
    }else if (param == 2){
        let x = document.getElementById("char2").value;
        n = x.toLowerCase();
    }else{
        let x = document.getElementById("char3").value;
        y = x.toUpperCase();
        split_char = y.split(" ");
        n = split_char.map(word => {
            return word[0].toLowerCase() + word.slice(1);
        })
    }
    alert("Hasil: " + n);
}