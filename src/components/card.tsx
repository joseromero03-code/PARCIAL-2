import "./card.css"

interface Variables{
    name: string,
    img: string,
    level: string
}

function Card({name, img, level}: Variables) {
    return(
        <div className="card">
            <img className="image" src={img}></img>
            <h3 className="">{name}</h3>
            <p>Nivel: {level}</p>
        </div>
    )
}

export default Card