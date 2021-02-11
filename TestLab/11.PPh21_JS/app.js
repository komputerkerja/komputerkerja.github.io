function $(id) {
  return document.getElementById(id);
}
const npwp = $("npwp");
const status = $("status");
const tanggungan = $("tanggungan");
const tahunpajak = $("tahunpajak");
const awalkerja = $("awalkerja");
const akhirkerja = $("akhirkerja");
const gajipokok = $("gajipokok");
const tunjanganpajak = $("tunjanganpajak");
const lembur = $("lembur");
const honor = $("honor");
const asuransi = $("asuransi");
const natura = $("natura");
const bonusthr = $("bonusthr");
const tunjanganpajaklain = $("tunjanganpajaklain");
const iuranpensiun = $("iuranpensiun");
const hitung = $("hitung");
const hasil = $("hasil");

hitung.addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = new Userinput(
    npwp.value,
    status.value,
    tanggungan.value,
    tahunpajak.value,
    awalkerja.value,
    akhirkerja.value,
    gajipokok.value,
    tunjanganpajak.value,
    lembur.value,
    honor.value,
    asuransi.value,
    natura.value,
    bonusthr.value,
    tunjanganpajaklain.value,
    iuranpensiun.value
  );

  const cTax = new CallculationTax(userInput);

  let pph21 = cTax.getPPh21();

  hasil.value = pph21[11]["hasil"];
});

document.addEventListener("DOMContentLoaded", (e) => {
  const spScreen = document.querySelector(".splash-screen");
  const h2 = document.querySelector(".container .main-content h2");
  const select = document.querySelectorAll(
    ".container .main-content form.main-form .main-goup .form-group select"
  );
  const button = document.querySelectorAll(
    ".container .main-content form.main-form .main-goup .form-group button"
  );
  const input = document.querySelectorAll(
    ".container .main-content form.main-form .main-goup .form-group input"
  );
  const span = document.querySelectorAll(
    ".container .main-content form.main-form .main-goup .form-group span"
  );
  const form = document.querySelector('.container .main-content form.main-form');

  setTimeout(() => {
    spScreen.classList.add("display-none");
  }, 3000);
  setTimeout(() => {
    h2.classList.add("cubizbezier");
    select.forEach((e) => e.classList.add("cubizbezier"));
    button.forEach((e) => e.classList.add("cubizbezier"));
    input.forEach((e) => e.classList.add("cubizbezier"));
    span.forEach((e) => e.classList.add("cubizbezier"));
    form.classList.add("cubizbezier");
  }, 4000);
});
