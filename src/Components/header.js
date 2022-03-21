
function Header (prop) {
    const {text, src} = prop
    console.log(prop)
    return (
        <div>
            <h1>
            {text}
            </h1>
            <a href={src} target='_blank'>Youtube</a>
        </div>
    )
}

export default Header