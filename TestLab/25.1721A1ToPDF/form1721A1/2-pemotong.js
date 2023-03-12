const pemotong = (bupot) => {
    return {
        table: {
            widths: [100, 10, '*'],
            body: [
                [
                    wTableChilds('NPWP PEMOTONG','left',8,true,[3, 3, 5, 3],[true, true, false, false]),
                    wTableChilds(':','center',8,true,[3, 3, 3, 3],[false, true, false, false]),
                    wTableChilds(DataPemotong.npwp,'left',8,false,[3, 3, 3, 3],[false, true, true, false])
                ],
                [
                    wTableChilds('NAMA PEMOTONG','left',8,true,[3, 3, 5, 3],[true, false, false, true]),
                    wTableChilds(':','center',8,true,[3, 3, 3, 3],[false, false, false, true]),
                    wTableChilds(DataPemotong.nama,'left',8,false,[3, 3, 3, 3],[false, false, true, true])
                ],
            ]
        }
    }
}