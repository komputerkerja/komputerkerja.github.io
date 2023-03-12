const rincian = (bupot) => {
	return [
		{
			table: {
				widths: ['*', 100],
				body: [
					[
						wTableChilds('URAIAN','center',8,true,[3, 3, 5, 3],[true, true, true, true]),
						wTableChilds('JUMLAH (Rp)','center',8,true,[3, 3, 3, 3],[true, true, true, true]),
					]
				]
			}
		},
		{
			table: {
				widths: [130, 10, '*', 100],
				body: [
					[
						wTableChilds('KODE OBJEK PAJAK','left',8,true,[3, 3, 5, 3],[true, false, false, true]),
						wTableChilds(':','left',8,true,[3, 3, 3, 3],[false, false, false, true]),
						wTableChilds(bupot[16],'left',8,true,[3, 3, 3, 3],[false, false, false, true]),
						wTableChilds('','center',8,true,[3, 3, 3, 3],[true, false, true, true],"#dddddd"),
					]
				]
			}
		},
		{
			table: {
				widths: [130, 10, '*', 100],
				body: [
					[
						wTableChilds('PENGHASILAN BRUTO :','left',8,true,[3, 3, 5, 3],[true, false, false, true]),
						wTableChilds('','left',8,true,[3, 3, 3, 3],[false, false, false, true]),
						wTableChilds('','left',8,true,[3, 3, 3, 3],[false, false, false, true]),
						wTableChilds('','center',8,true,[3, 3, 3, 3],[true, false, true, true],"#dddddd"),
					]
				]
			}
		},
		//-------------------------------------------------------------------
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('1.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('GAJI/PENSIUN ATAU THT/JHT','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[17])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('2.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('TUNJANGAN PPh','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[18])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('3.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('TUNJANGAN LAINNYA, UANG LEMBUR DAN SEBAGAINYA','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[19])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('4.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('HONORARIUM DAN IMBALAN LAIN SEJENISNYA','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[20])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('5.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('PREMI ASURANSI YANG DIBAYAR PEMBERI KERJA','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[21])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('6.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('PENERIMAAN DALAM BENTUK NATURA DAN KENIKMATAN LAINNYA YANG DIKENAKAN PEMOTONGAN PPh PASAL 21','left',6.8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[22])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('7.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('TANTIEM, BONUS, GRATIFIKASI, JASA PRODUKSI DAN THR','left',7,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[23])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('8.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('JUMLAH PENGHASILAN BRUTO (1 S.D.7)','left',7,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[24])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		//-------------------------------------------------------------------
		{
			table: {
				widths: [130, 10, '*', 100],
				body: [
					[
						wTableChilds('PENGURANGAN :','left',8,true,[3, 3, 5, 3],[true, false, false, true]),
						wTableChilds('','left',8,true,[3, 3, 3, 3],[false, false, false, true]),
						wTableChilds('','left',8,true,[3, 3, 3, 3],[false, false, false, true]),
						wTableChilds('','center',8,true,[3, 3, 3, 3],[true, false, true, true],"#cccccc")
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('9.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('BIAYA JABATAN/ BIAYA PENSIUN','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[25])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('10.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('IURAN PENSIUN ATAU IURAN THT/JHT','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[26])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('11.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('JUMLAH PENGURANGAN (9 S.D 10)','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[27])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		//-------------------------------------------------------------------
		{
			table: {
				widths: [180, 10, '*', 100],
				body: [
					[
						wTableChilds('PENGHITUNGAN PPh PASAL 21 :','left',8,true,[3, 3, 5, 3],[true, false, false, true]),
						wTableChilds('','left',8,true,[3, 3, 3, 3],[false, false, false, true]),
						wTableChilds('','left',8,true,[3, 3, 3, 3],[false, false, false, true]),
						wTableChilds('','center',8,true,[3, 3, 3, 3],[true, false, true, true],"#cccccc")
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('12.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('JUMLAH PENGHASILAN NETO (8-11)','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[28])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('13.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('PENGHASILAN NETO MASA SEBELUMNYA','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[29])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('14.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('JUMLAH PENGHASILAN NETO UNTUK PENGHITUNGAN PPh PASAL 21 (SETAHUN/DISETAHUNKAN)','left',7,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[30])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('15.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('PENGHASILAN TIDAK KENA PAJAK (PTKP)','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[31])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('16.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('PENGHASILAN KENA PAJAK SETAHUN/DISETAHUNKAN (14 - 15)','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[32])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('17.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('PPh PASAL 21 ATAS PENGHASILAN KENA PAJAK SETAHUN/DISETAHUNKAN','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[33])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('18.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('PPh PASAL 21 YANG TELAH DIPOTONG MASA SEBELUMNYA','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[34])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('19.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('PPh PASAL 21 TERUTANG','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[35])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
		{
			table: {
				widths: [23, '*', 100],
				body: [
					[
						wTableChilds('20.','left',8,false,[3, 3, 3, 3],[true, false, true, true]),
						wTableChilds('PPh PASAL 21 DAN PPh PASAL 26 YANG TELAH DIPOTONG DAN DILUNASI','left',8,false,[3, 3, 5, 3],[false, false, false, true]),
						wTableChilds(new Intl.NumberFormat().format(Number(bupot[36])),'right',8,false,[3, 3, 3, 3],[true, false, true, true])
					]
				]
			}
		},
	]
}