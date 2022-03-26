import style from './style.css'


function HobbyList({hobbyList, activeId, onClick}) {


    const handleClick = (hobby) => {
        if(onClick) {
            onClick(hobby)
        }
    }

    return (
        <div>
            <h3>List Hobby</h3>
            <ul>
                {hobbyList.map((item, index) => (
                    <li 
                        key={index} 
                        className={item === activeId ? 'item-hobby' : '' }
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HobbyList