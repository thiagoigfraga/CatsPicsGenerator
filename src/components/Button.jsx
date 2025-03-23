import { useState } from 'react';

export default function Button({fetchCatPics}=props) {
const [ativo, setAtivo] = useState(true);
const [botaoConteudo, setBotaoConteudo] = useState("Load");

function handleClick() {
    fetchCatPics();
    setAtivo(!ativo);
    setBotaoConteudo("Reload");
}

return (
    <>
        { 
        <button className="btnStyle" onClick={()=> handleClick()}>{botaoConteudo}</button> 
        
        }
    </>
);
}