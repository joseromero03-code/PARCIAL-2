import { useEffect, useState } from "react";

interface Digimon{
    name: string,
    img: string,
    level: string
};

const useDigimon = () => {
    const [digi, setDigi] = useState<Digimon[]>([]);
    const [filtro, setFiltro] = useState("");

    useEffect(()=>{
    const traerInfo = async ()=>{
        try{
        const respuesta = await fetch("https://digimon-api.vercel.app/api/digimon")
        const datos = await respuesta.json()
        const lista : Digimon[] = datos.map((p:Digimon)=>({
            name: p.name,
            img: p.img,
            level: p.level
        }))
        setDigi(lista)
        } catch(error){
            console.error(error);
        }
    }
    traerInfo()
    }, []);

    const digiFiltrado = digi.filter((p)=>
    p.name.toLowerCase().includes(filtro.toLowerCase())
    );

    return{
        digi : digiFiltrado,
        filtro,
        setFiltro
    }
}

export default useDigimon;