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

  const cTax =  new CallculationTax(userInput);

  let pph21 = cTax.getPPh21();
  
  hasil.value = (pph21[11]['hasil']);
});
