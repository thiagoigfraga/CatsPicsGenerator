import { useState } from 'react';

export default function Button({fetchCatPics}=props) {
const [ativo, setAtivo] = useState(true);
const [botaoConteudo, setBotaoConteudo] = useState("Carregar");

function handleClick() {
    fetchCatPics();
    setAtivo(!ativo);
    setBotaoConteudo("Recarregar");
}

return (
    <>
        { 
        <button className="btnStyle" onClick={()=> handleClick()}>{botaoConteudo}</button> 
        
        }
    </>
);
}