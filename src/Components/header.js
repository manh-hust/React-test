import { Container } from "reactstrap"


function Header (prop) {
    const {text, src} = prop
    console.log(prop)
    return (
        <Container>
            <h1>
            {text}
            </h1>
            <a href={src} target='_blank' rel="noreferrer">Youtube</a>
        </Container>
    )
}

export default Header