const identitasPemotong = (bupot) => {
    return {
        table: {
            widths: [10, 35, 10, 140, 10, '*', 100],
            body: [
                [
                    wTableChilds('1','center',8,true,[3, 3, 3, 3],[true, true, false, false]),
                    wTableChilds('NPWP','left',8,true,[3, 3, 5, 3],[false, true, false, false]),
                    wTableChilds(':','center',8,true,[3, 3, 3, 3],[false, true, false, false]),
                    wTableChilds(bupot[38],'left',8,false,[3, 3, 3, 3],[false, true, false, false]),
    
                    wTableChilds('3','center',8,true,[3, 3, 3, 3],[false, true, false, false]),
                    wTableChilds('TANGGAL & TANDA TANGAN','left',8,true,[3, 3, 5, 3],[false, true, true, false]),
    
                    wTableChilds('','left',8,true,[3, 3, 5, 3],[true, true, true, false])
                ],
                [
                    wTableChilds('2','center',8,true,[3, 3, 3, 3],[true, false, false, true]),
                    wTableChilds('NAMA','left',8,true,[3, 3, 5, 3],[false, false, false, true]),
                    wTableChilds(':','center',8,true,[3, 3, 3, 3],[false, false, false, true]),
                    wTableChilds(bupot[39],'left',8,false,[3, 3, 3, 3],[false, false, false, true]),
                    
                    wTableChilds(' ','center',8,true,[3, 3, 3, 3],[false, false, false, true]),
                    wTableChilds(bupot[40],'left',8,true,[3, 3, 3, 3],[false, false, true, true]),
    
                    wTableChilds('','left',8,true,[3, 3, 5, 3],[true, false, true, true])
                ],
            
            ]
        }
    }
}