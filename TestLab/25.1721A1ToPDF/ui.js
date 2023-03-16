class UI {
    static data = []

    static async pushData(contentTables){
        UI.data = contentTables.slice()
        UI.data.pop()
    }

    static createTable(){
        const table = document.getElementById('mytable')
        const thead = document.createElement('thead')
        const trThead = document.createElement('tr')
        let th = document.createElement('th')
        th.textContent = "Action"
        table.innerHTML = ""
        trThead.appendChild(th)

        UI.data[0].forEach(item => {
            th = document.createElement('th')
            th.scope = "col"
            th.textContent = item.trim()
            trThead.appendChild(th)
        });
        thead.appendChild(trThead)
        table.appendChild(thead)

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        UI.data.forEach((bupot,index) => {
            let tr = document.createElement('tr')
            if(index!=0 && (index != UI.data.length)){
                let td = document.createElement('td')
                td.innerHTML = `<span class="badge bg-primary" style="cursor: pointer;">Print</span>`
                tr.appendChild(td)
                bupot.forEach(item => {
                    td = document.createElement('td')
                    td.textContent = item.trim()
                    tr.appendChild(td)
                })
            }
            tbody.appendChild(tr)
        })
        UI.tooglePrintButton()
    }

    static tooglePrintButton(){
        document.getElementById('printout').classList.remove('visually-hidden')
    }
}