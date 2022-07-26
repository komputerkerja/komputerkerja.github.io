const localvideo = document.getElementById('local-video')
const remotevideo = document.getElementById('remote-video')
const textoffer = document.getElementById('text-offer')
const textanswer = document.getElementById('text-answer')
const textsend = document.getElementById('text-send')
const textmessage = document.getElementById('text-message')

let remoteStream;
let localStream;
let peer;
let dataChannel;

init = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({video:true,audio:true}) 
    localvideo.srcObject = localStream
}

createPeerConnection = async () => {
    const config = {iceServers:[{urls:'stun:stun.l.google.com:19302'}]}
    peer = new RTCPeerConnection(config)
    remoteStream = new MediaStream()
    remotevideo.srcObject = remoteStream
    localStream.getTracks().forEach(track => peer.addTrack(track,localStream))
    peer.ontrack = e => e.streams[0].getTracks().forEach(track => remoteStream.addTrack(track))    
}

createOffer = async () => {
    await createPeerConnection()

    dataChannel = await peer.createDataChannel("channel")
    dataChannel.onopen = () => console.log("open channel")
    dataChannel.onmessage = msg => textmessage.value += "[Teman] : " + msg.data + "\n"

    const offer = await peer.createOffer()
    await peer.setLocalDescription(offer)
    textoffer.value = JSON.stringify(peer.localDescription)
    peer.onicecandidate = e => {
        if(e.candidate) textoffer.value = JSON.stringify(peer.localDescription)
    }
}

createAnswer = async () => {
    await createPeerConnection()

    peer.ondatachannel = e => {
        dataChannel = e.channel
        dataChannel.onopen = () => console.log("open channel")
        dataChannel.onmessage = msg => textmessage.value += "[Teman] : " + msg.data + "\n"
    }

    const offer = JSON.parse(textoffer.value)
    peer.setRemoteDescription(offer)
    const answer = await peer.createAnswer()
    await peer.setLocalDescription(answer)
    textanswer.value = JSON.stringify(peer.localDescription)
    peer.onicecandidate = e => {
        if(e.candidate) textanswer.value = JSON.stringify(peer.localDescription)
    }
}

addAnswer = async () => {
    const answer = JSON.parse(textanswer.value)
    await peer.setRemoteDescription(answer)
}

init()

document.getElementById('btn-offer').onclick = async () => await createOffer()
document.getElementById('btn-answer').onclick = async () => await createAnswer()
document.getElementById('btn-addanswer').onclick = async () => await addAnswer()
document.getElementById('btn-send').onclick = () => {
    const message = textsend.value
    textsend.value = ""
    textmessage.value += "[Aku] : " + message + "\n"
    dataChannel.send(message)
}

localvideo.onclick = () => localvideo.muted = !localvideo.muted
remotevideo.onclick = () => remotevideo.muted = !remotevideo.muted