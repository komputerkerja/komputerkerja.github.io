class CallculationTax {
  constructor(userInput) {
    this.tarif = new PPh21().tarif;
    this.npwp = userInput.npwp;
    this.status = userInput.status;
    this.tanggungan = userInput.tanggungan;
    this.tahunpajak = userInput.tahunpajak;
    this.awalkerja = userInput.awalkerja;
    this.akhirkerja = userInput.akhirkerja;
    this.gajipokok = userInput.gajipokok;
    this.tunjanganpajak = userInput.tunjanganpajak;
    this.lembur = userInput.lembur;
    this.honor = userInput.honor;
    this.asuransi = userInput.asuransi;
    this.natura = userInput.natura;
    this.bonusthr = userInput.bonusthr;
    this.tunjanganpajaklain = userInput.tunjanganpajaklain;
    this.iuranpensiun = userInput.iuranpensiun;
    this._hasilkeseluruhan = [];
    this._pph21setahun = 0;
    this._pph21sebulan = 0;
    this._pph21setahunplusthr = 0;
    this._pph21tidakteratur = 0;
    this._pph21BulanIni = 0;
    this._hasil = 0;
  }

  getPPh21() {
    // Masa Kerja Dalam Bulan
    this._masakerja =
      parseFloat(this.akhirkerja) - parseFloat(this.awalkerja) + 1;

    // Gaji / Tunjangan / Honor
    this._gajibulanini =
      parseFloat(this.gajipokok) +
      parseFloat(this.tunjanganpajak) +
      parseFloat(this.lembur) +
      parseFloat(this.honor) +
      parseFloat(this.asuransi) +
      parseFloat(this.natura);
    this._gajisetahun = this._gajibulanini * this._masakerja;
    this._hasilkeseluruhan.push({ gajibulanini: this._gajibulanini });
    this._hasilkeseluruhan.push({ gajisetahun: this._gajisetahun });

    // Thr / Bonus Tahunan / Tunjangan
    this._bonusthrsetahun =
      parseFloat(this.bonusthr) + parseFloat(this.tunjanganpajaklain);

    // Jumlah Bruto
    this._brutosetahun = this._gajisetahun;
    this._brutosetahunplusthr = this._gajisetahun + this._bonusthrsetahun;

    this._hasilkeseluruhan.push({ bonusthr: this._bonusthrsetahun });
    this._hasilkeseluruhan.push({
      gajisetahunplusbonusthr: this._brutosetahunplusthr,
    });

    // Biaya jabatan
    this._biayajabatan = parseFloat(this.tarif[0]["biayajabatan"]);
    if (this._brutosetahun * (5 / 100) > this._biayajabatan * this._masakerja) {
      this._biayajabatan = this._biayajabatan * this._masakerja;
    } else {
      this._biayajabatan = this._brutosetahun * (5 / 100);
    }
    this._biayajabatanplusthr = parseFloat(this.tarif[0]["biayajabatan"]);
    if (
      this._brutosetahunplusthr * (5 / 100) >
      this._biayajabatanplusthr * this._masakerja
    ) {
      this._biayajabatanplusthr = this._biayajabatanplusthr * this._masakerja;
    } else {
      this._biayajabatanplusthr = this._brutosetahunplusthr * (5 / 100);
    }
    this._hasilkeseluruhan.push({ biayajabatan: this._biayajabatanplusthr });

    // Iuran Pensiun
    this._iuranpensiunsetahun = parseFloat(this.iuranpensiun) * this._masakerja;
    this._hasilkeseluruhan.push({
      iuranpensiunsetahun: this._iuranpensiunsetahun,
    });

    // Jumlah Pengurang
    this._pengurang = this._biayajabatan + this._iuranpensiunsetahun;
    this._pengurangplusthr =
      this._biayajabatanplusthr + this._iuranpensiunsetahun;
    this._hasilkeseluruhan.push({ pengurang: this._pengurangplusthr });

    // Jumlah Netto
    this._nettosetahun = this._brutosetahun - this._pengurang;
    this._nettosetahunplusthr =
      this._brutosetahunplusthr - this._pengurangplusthr;
    this._hasilkeseluruhan.push({ nettosetahun: this._nettosetahunplusthr });

    // PTKP
    this.status = this.status + this.tanggungan;
    console.log(this.npwp + " - " + this.status + " - " + this.tahunpajak);
    this._ptkp = parseFloat(
      this.tarif[0]["ptkp"][this.tahunpajak][this.status]
    );

    // Penghasilan Kena Pajak
    this._phkp = 0;
    this._phkpplusthr = 0;
    if (this._nettosetahun - this._ptkp > 0) {
      this._phkp = this._nettosetahun - this._ptkp;
    }
    if (this._nettosetahunplusthr - this._ptkp > 0) {
      this._phkpplusthr = this._nettosetahunplusthr - this._ptkp;
    }

    // Tarif
    if (
      this._phkp >
      parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif4"])
    ) {
      this._progresif = 4;
    } else if (
      this._phkp >
      parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif3"])
    ) {
      this._progresif = 3;
    } else if (
      this._phkp >
      parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif2"])
    ) {
      this._progresif = 2;
    } else if (
      this._phkp >
      parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif1"])
    ) {
      this._progresif = 1;
    } else {
      this._progresif = 0;
    }

    if (
      this._phkpplusthr >
      parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif4"])
    ) {
      this._progresifplusthr = 4;
    } else if (
      this._phkpplusthr >
      parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif3"])
    ) {
      this._progresifplusthr = 3;
    } else if (
      this._phkpplusthr >
      parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif2"])
    ) {
      this._progresifplusthr = 2;
    } else if (
      this._phkpplusthr >
      parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif1"])
    ) {
      this._progresifplusthr = 1;
    } else {
      this._progresifplusthr = 0;
    }

    // Hitung PPh21
    if (this._progresif > 1) {
      this._pph21setahun =
        this._pph21setahun +
        (parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif2"]) -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif1"])) *
          (5 / 100);
    } else if (this._progresif == 1) {
      this._pph21setahun =
        this._pph21setahun +
        (this._phkp -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif1"])) *
          (5 / 100);
    } else {
      this._pph21setahun = this._pph21setahun + 0;
    }

    if (this._progresif > 2) {
      this._pph21setahun =
        (this._pph21setahun +
          (parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif3"]) -
            parseFloat(
              this.tarif[0]["progresif"][this.tahunpajak]["tarif2"]
            ))) *
        (15 / 100);
    } else if (this._progresif == 2) {
      this._pph21setahun =
        (this._pph21setahun +
          (this._phkp -
            parseFloat(
              this.tarif[0]["progresif"][this.tahunpajak]["tarif2"]
            ))) *
        (15 / 100);
    } else {
      this._pph21setahun = this._pph21setahun + 0;
    }
    if (this._progresif > 3) {
      this._pph21setahun =
        this._pph21setahun +
        parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif4"]) -
        parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif3"]) *
          (25 / 100);
    } else if (this._progresif == 3) {
      this._pph21setahun =
        this._pph21setahun +
        (this._phkp -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif3"])) *
          (25 / 100);
    } else {
      this._pph21setahun = this._pph21setahun + 0;
    }
    if (this._progresif == 4) {
      this._pph21setahun =
        this._pph21setahun +
        (this._phkp -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif4"])) *
          (30 / 100);
    } else {
      this._pph21setahun = this._pph21setahun + 0;
    }
    this._pph21sebulan = this._pph21setahun / this._masakerja;
    this._hasilkeseluruhan.push({ pph21sebulan: this._pph21sebulan });
    //==========================================================================

    this._pph21setahunplusthr = 0;
    if (this._progresifplusthr > 1) {
      this._pph21setahunplusthr =
        this._pph21setahunplusthr +
        (parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif2"]) -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif1"])) *
          (5 / 100);
    } else if (this._progresifplusthr == 1) {
      this._pph21setahunplusthr =
        this._pph21setahunplusthr +
        (this._phkpplusthr -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif1"])) *
          (5 / 100);
    } else {
      this._pph21setahunplusthr = this._pph21setahunplusthr + 0;
    }
    if (this._progresifplusthr > 2) {
      this._pph21setahunplusthr =
        this._pph21setahunplusthr +
        (parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif3"]) -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif2"])) *
          (15 / 100);
    } else if (this._progresifplusthr == 2) {
      this._pph21setahunplusthr =
        this._pph21setahunplusthr +
        (this._phkpplusthr -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif2"])) *
          (15 / 100);
    } else {
      this._pph21setahunplusthr = this._pph21setahunplusthr + 0;
    }
    if (this._progresifplusthr > 3) {
      this._pph21setahunplusthr =
        this._pph21setahunplusthr +
        (parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif4"]) -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif3"])) *
          (25 / 100);
    } else if (this._progresifplusthr == 3) {
      this._pph21setahunplusthr =
        this._pph21setahunplusthr +
        (this._phkpplusthr -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif3"])) *
          (25 / 100);
    } else {
      this._pph21setahunplusthr = this._pph21setahunplusthr + 0;
    }
    if (this._progresifplusthr == 4) {
      this._pph21setahunplusthr =
        this._pph21setahunplusthr +
        (this._phkpplusthr -
          parseFloat(this.tarif[0]["progresif"][this.tahunpajak]["tarif4"])) *
          (30 / 100);
    } else {
      this._pph21setahunplusthr = this._pph21setahunplusthr + 0;
    }

    //PPh21 Tidak Teratur Bulan Ini
    this._pph21tidakteratur = this._pph21setahunplusthr - this._pph21setahun;
    this._hasilkeseluruhan.push({ pph21tidakteratur: this._pph21tidakteratur });

    // PPh21 Bulan Ini
    this._pph21BulanIni = this._pph21sebulan + this._pph21tidakteratur;
    this._hasilkeseluruhan.push({ pph21BulanIni: this._pph21BulanIni });

    // Tarif Tambahan Jika Tidak Memiliki NPWP
    this._hasil =
      this.npwp == "no"
        ? this._pph21BulanIni * (20 / 100) + this._pph21BulanIni
        : this._pph21BulanIni;this._hasilkeseluruhan.push({ hasil: this._hasil });return this._hasilkeseluruhan;}}