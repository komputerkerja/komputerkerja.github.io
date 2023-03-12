const penerima = (bupot) => {
    return {
        table: {
            widths: [10, 60, 10, '*', 10, '*'],
            body: [
                [
                    wTableChilds('1','center',8,true,[3, 3, 3, 3],[true, true, false, false]),
                    wTableChilds('NPWP','left',8,true,[3, 3, 5, 3],[false, true, false, false]),
                    wTableChilds(':','center',8,true,[3, 3, 3, 3],[false, true, false, false]),
                    wTableChilds(bupot[6],'left',8,false,[3, 3, 3, 3],[false, true, false, false]),
    
                    wTableChilds('6','center',8,true,[3, 3, 3, 3],[false, true, false, false]),
                    wTableChilds('STATUS /JUMLAH TANGGUNGAN KELUARGA UNTUK PTKP : ' + bupot[11] + '/' + bupot[12],'left',8,true,[3, 3, 5, 3],[false, true, true, false])
                ],
                [
                    wTableChilds('2','center',8,true,[3, 3, 3, 3],[true, false, false, false]),
                    wTableChilds('NIK/NO. PASPOR','left',8,true,[3, 3, 5, 3],[false, false, false, false]),
                    wTableChilds(':','center',8,true,[3, 3, 3, 3],[false, false, false, false]),
                    wTableChilds(bupot[7],'left',8,false,[3, 3, 3, 3],[false, false, false, false]),
                    
                    wTableChilds('7','center',8,true,[3, 3, 3, 3],[false, false, false, false]),
                    wTableChilds('NAMA JABATAN : '+bupot[13],'left',8,true,[3, 3, 3, 3],[false, false, true, false])
                ],
                [
                    wTableChilds('3','center',8,true,[3, 3, 3, 3],[true, false, false, false]),
                    wTableChilds('NAMA','left',8,true,[3, 3, 5, 3],[false, false, false, false]),
                    wTableChilds(':','center',8,true,[3, 3, 3, 3],[false, false, false, false]),
                    wTableChilds(bupot[8],'left',8,false,[3, 3, 3, 3],[false, false, false, false]),
    
                    wTableChilds('8','center',8,true,[3, 3, 3, 3],[false, false, false, false]),
                    wTableChilds('KARYAWAN ASING : '+bupot[14],'left',8,true,[3, 3, 3, 3],[false, false, true, false])
                ],
                [
                    wTableChilds('4','center',8,true,[3, 3, 3, 3],[true, false, false, false]),
                    wTableChilds('ALAMAT','left',8,true,[3, 3, 5, 3],[false, false, false, false]),
                    wTableChilds(':','center',8,true,[3, 3, 3, 3],[false, false, false, false]),
                    wTableChilds(bupot[9],'left',8,false,[3, 3, 3, 3],[false, false, false, false]),
                    
                    wTableChilds('9','center',8,true,[3, 3, 3, 3],[false, false, false, false]),
                    wTableChilds('KODE NEGARA DOMISILI : '+bupot[15],'left',8,true,[3, 3, 3, 3],[false, false, true, false])
                ],
                [
                    wTableChilds('5','center',8,true,[3, 3, 3, 3],[true, false, false, true]),
                    wTableChilds('JENIS KELAMIN','left',8,true,[3, 3, 5, 3],[false, false, false, true]),
                    wTableChilds(':','center',8,true,[3, 3, 3, 3],[false, false, false, true]),
                    wTableChilds((bupot[10]=="M"?"LAKI-LAKI":"PEREMPUAN") ,'left',8,false,[3, 3, 3, 3],[false, false, false, true]),
    
                    wTableChilds('','center',8,true,[3, 3, 3, 3],[false, false, false, true]),
                    wTableChilds('','left',8,true,[3, 3, 3, 3],[false, false, true, true])
                ],
            
            ]
        }
    }
}