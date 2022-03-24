import video1 from '../video/video-1.mp4'

function Video() {
    return ( 
    <div >
        <video src={video1} style={{width: 320}} />
        <button>Play</button>
        <button>Pause</button>
    </div>
    )
}

export default Video