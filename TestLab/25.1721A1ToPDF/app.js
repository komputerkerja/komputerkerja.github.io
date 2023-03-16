function printBupotFromCSV(bupot){
    let content = [
        "__________________________________________________________________________________________________",
        header_surat(bupot),
        pemotong(bupot),
        wMargintTet('A. IDENTITAS PENERIMA PENGHASILAN YANG DIPOTONG','left',8,true,[0, 2, 0, 2]),
        penerima(bupot),
        wMargintTet('B. RINCIAN PENGHASILAN DAN PENGHITUNGAN PPh PASAL 21','left',8,true,[0, 2, 0, 2]),
    ]
    
    rincian(bupot).forEach(item=>content.push(item))
    content.push(wMargintTet('C. IDENTITAS PEMOTONG','left',8,true,[0, 2, 0, 2]))
    content.push(identitasPemotong(bupot))
    
    let docDefinition = {
        pageSize: 'LEGAL',
        content: content, styles: {
            header: {
            },
            subheader: {
            }
        }
    };
    
    let fileName = bupot[8] + ' - ' + bupot[3] + '.pdf'
    let pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.download(fileName);
    pdfDocGenerator=null
}


csv_file.addEventListener('change', e => {
    const csvFile = csv_file.files[0];
    const csvExtension = csvFile.name.substring((csvFile.name.length)-4, csvFile.name.length)
    if(csvExtension != '.csv'){
        alert('Silahkan Memilih File CSV')
        csvFile.name.value = '';
        return
    }
    const reader = new FileReader()
    reader.readAsText(csvFile)
    reader.onload = async e => {
        const content = reader.result.split('\n')
        const contentTables = []
        content.forEach(item => {
            contentTables.push(item.split(';'))
        })
        await UI.pushData(contentTables)
        await DataTables.pushData(contentTables)
        UI.createTable()
    }
})

printout.addEventListener('click', e => {
    e.preventDefault()
    if(DataTables.data.length == 0) return
    DataTables.data.forEach(item => printBupotFromCSV(item))
})

document.addEventListener('click', e => {
    if(e.target.className == 'badge bg-primary') {
        const row = e.target.parentElement.parentElement
        const nobuk = row.children['4'].textContent
        const singleData = DataTables.find(nobuk)
        singleData.forEach(item => printBupotFromCSV(item))
    }
})