import { useState, memo} from "react";


function Product() {
    console.log('re-render con')


    const [name, setName] = useState('')

    return (
        <>
            Product
            <input
                value={name}
                placeholder='Enter your name'
                onChange={e => setName(e.target.value)}
            />
        </>
    )
}

export default memo(Product)