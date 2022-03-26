import { useState, useEffect } from "react";


function Avatar () {

    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
           avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])

    const handleChange = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return(
        <div>
            <input
            type='file'
            onChange={handleChange}
            />
            {avatar && 
                <img src={avatar.preview} width='50%' />
            }            
        </div>
    )
}

export default Avatar