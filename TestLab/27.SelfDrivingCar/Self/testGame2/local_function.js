function getTrackAndBrain(trackName, brainName){
    fetch('./tracks/'+trackName)
    .then(res=>res.json())
    .then(data=>{
        gameInit(data)
    })
    .catch(err=>console.log(err))
}

function save(){
    localStorage.setItem('bestBrain', JSON.stringify(bestCar.brain))
}
function discard(){
    localStorage.removeItem('bestBrain')
}
