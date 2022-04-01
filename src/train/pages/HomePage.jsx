import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addNewHobby, selectedHobby } from "../../actions/hobby";
import HobbyList from "../../Components/Home/HobbyList";

function HomePage() {

    const [hobby, setHooby] = useState('')

    const hobbyList = useSelector(state => state.hobby.list)
    const itemSelected = useSelector(state => state.hobby.itemSelected)
    const dispath = useDispatch()

    const inputRef = useRef()

    const handleInput = (value) => {

        setHooby(value)
    }
    
    const handleAdd = () => {
        dispath(addNewHobby(hobby))
        setHooby('')
        inputRef.current.focus()
    }

    const handleSelectedHobby = (hobby) => {
        dispath(selectedHobby(hobby))
    }

    return (
        <div>
            <h1>Home Page</h1>
                    <input
                        ref={inputRef}
                        placeholder="Enter your hobby..."
                        value={hobby}
                        onChange={(e) => handleInput(e.target.value)}
                    />
                    <br/>
                    <button onClick={handleAdd}>Add</button>
            <HobbyList 
                hobbyList={hobbyList}
                onClick={handleSelectedHobby}
                activeId={itemSelected}
            />
        </div>
    )
}

export default HomePage