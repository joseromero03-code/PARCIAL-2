import "./card.css"

interface Variables{
    name: string,
    img: string,
    level: string
}

function Card({name, img, level}: Variables) {
    return(
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"16px", padding:"16px" }} className={`card ${level?"card-evo":"card-normal"}`}>
            <img className="image" src={img}></img>
            <h3 className="">{name}</h3>
            <p>Nivel: {level}</p>
        </div>
    )
}

export default Card