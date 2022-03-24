import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from '../video/video-1.mp4'

function Video(prop, ref) {

    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))
    return ( 
    <div>
        <video 
            src={video1} 
            style={{width: 320}} 
            ref={videoRef}
        />
    </div>
    )
}

export default forwardRef(Video)