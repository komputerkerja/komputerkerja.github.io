class DB{
    static deleteURL = "?delete=true"
    static scriptURL =
    "https://script.google.com/macros/s/AKfycbw6Jt8qmO3jbUNbMuoe9tbGoXJ_DlfCQUw1sU4RCRmLdlcIzudpSgcCHtxQGxZP7EZt8w/exec";

    static async getData(){
        const data = await fetch(DB.scriptURL);
        const res = await data.json();
        const jsonArray = JSON.parse(res.result)
        return jsonArray;
    }

    static async postData(dataObject){
        const data = await fetch(DB.scriptURL, {method: "POST", body: JSON.stringify(dataObject)})
        const res = await data.json();
        const jsonArray = JSON.parse(res.result)
        return jsonArray;
    }
    
    static async deleteData(){
        const data = await fetch(DB.scriptURL+DB.deleteURL);
        const res = await data.json();
        const jsonArray = JSON.parse(res.result)
        return jsonArray;
    }

}