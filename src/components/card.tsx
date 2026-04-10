import "./card.css"

interface Variables{
    title: string,
    img: string,
    level: string
}

function Card({title, img, level}: Variables) {
    return(
        <div>
            <img src={img}></img>
            <h3>{title}</h3>
            <p>{level}</p>
        </div>
    )
}

export default Card