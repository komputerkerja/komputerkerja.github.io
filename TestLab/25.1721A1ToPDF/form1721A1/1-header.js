const header_surat = (bupot) => {
    const djpLogo = new CreateLogoPajak()

    return {
        table: {
            widths: [150, '*', 150],
            body: [
                [
                    {
                        border: [false, false, true, false],
                        stack: [
                            {
                                image: djpLogo.logo,
                                width: 60,
                                alignment: 'center',
                            },
                            {
                                text: 'KEMENTERIAN KEUANGAN RI DIREKTORAT JENDERAL PAJAK',
                                alignment: 'center',
                                fontSize: 8,
                                bold: true
                            }

                        ]
                    },
                    {
                        border: [false, false, true, false],
                        stack: [
                            {
                                text: 'BUKTI PEMOTONGAN PAJAK PENGHASILAN PASAL 21 BAGI PEGAWAI TETAP ATAU PENERIMA PENSIUN ATAU TUNJANGAN HARI TUA/JAMINAN HARI TUA BERKALA',
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            },
                            {
                                margin: [0, 10, 0, 0],
                                text: '___________________________________'
                            },
                            {
                                text: 'NOMOR : ' + bupot[3],
                                alignment: 'center',
                                fontSize: 8,
                                bold: true,
                            }
                        ]
                    },
                    {
                        border: [false, false, false, false],
                        fontSize: 7,
                        stack: [
                            wText('FORMULIR 1721 - A1', 'right', 13, true),
                            wText('Lembar ke-1: untuk Penerima Penghasilan', 'left', 7, false),
                            wText('Lembar ke-2 : untuk Pemotong', 'left', 7, true),
                            wMargintTet('MASA PEROLEHAN \nPENGHASILAN [mm - mm]', 'center', 6, true, [0, 15, 0, 0]),
                            wMargintTet(((bupot[4].length == 1 ? "0" + bupot[4] : bupot[4])) + ' - ' + ((bupot[5].length == 1 ? "0" + bupot[5] : bupot[5])), 'center', 8, false, [0, 5, 0, 0])
                        ]
                    },
                ]
            ]
        }
    }
}