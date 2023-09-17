function getTrackAndBrain(trackName, brainName){
    Promise.all([fetchBrain(brainName), fetchTrack(trackName)])
    .then(res => {
      let carBrain
      let carTrack
      res.forEach(data=> {
        if(data.track) carTrack=data.track
        if(data.brain) carBrain=data.brain
      })
      gameInit(carTrack,carBrain)
    })
    .catch(error => {
      console.error('error di local function:', error);
    });
}

function save(){
    localStorage.setItem('bestBrain', JSON.stringify(bestCar.brain))
}
function discard(){
    localStorage.removeItem('bestBrain')
}

function fetchBrain(brainName) {
    return fetch('./brain/'+brainName)
    .then(res=>res.json())
    .then(data=>({"brain":data}))
    .catch(err=>console.log('error di fetch brain: '+err))
}
  
function fetchTrack(trackName) {
    return fetch('./tracks/'+trackName)
    .then(res=>res.json())
    .then(data=>({"track":data}))
    .catch(err=>console.log('error di fetch track: '+err))
}
  
  
