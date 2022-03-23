import { useState, useEffect } from "react"
import { Container } from "reactstrap"


const Header = {
     Header1 : () => {
        return (
            <Container>
                <button>Header1</button>
            </Container>
        )
    },
     Header2 : () => {

        const [width, setWidth] = useState(window.innerWidth)

        useEffect(() => {

            const handleResize = () => {
                setWidth(window.innerWidth)
            }

            window.addEventListener('resize', handleResize)
            return () => {
            window.removeEventListener('resize', handleResize)
            }    
        },[])

        return (
            <Container>
                <h1>{width}</h1>
            </Container>
        ) 
    }
}

export default Header