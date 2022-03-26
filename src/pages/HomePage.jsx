import { useSelector } from "react-redux"
import HobbyList from "../Components/Home/HobbyList";
import casual from "casual";

function HomePage() {

    const hobbyList = useSelector(state => state.hobby.list)
    // console.log(casual.title);

    return (
        <div>
            <h1>Home Page</h1>
            <HobbyList hobbyList={hobbyList}/>
        </div>
    )
}

export default HomePage