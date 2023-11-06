function bukaTab(pageName, elmnt, color) {
    
    var i, tabcontent, tab;
    tabcontent = document.getElementsByClassName("tabConten");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.backgroundColor = color;
}

document.getElementById("default").click();

const select = document.getElementById('jenisKuliner');
const ctn1 = document.getElementById('ctn1');
const ctn2 = document.getElementById('ctn2');
const ctn3 = document.getElementById('ctn3');
const ctn4 = document.getElementById('ctn4');


select.addEventListener('change', function() {
  const selectedOption = select.value;

  // Sembunyikan semua konten
  ctn1.style.display = 'none';
  ctn2.style.display = 'none';
  ctn3.style.display = 'none';
  ctn4.style.display = 'none';

  // Tampilkan konten yang sesuai dengan pilihan
  if (selectedOption === 'op1') {
    ctn1.style.display = 'block'; 
  } else if (selectedOption === 'op2') {
    ctn2.style.display = 'block';
  } else if (selectedOption === 'op3') {
    ctn3.style.display = 'block';
  } 
    else if (selectedOption === 'op4') {
    ctn4.style.display = 'block';
  } 

  document.getElementById("select").click();
});

