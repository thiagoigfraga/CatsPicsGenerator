import { useState } from 'react';


export default function Button(props) {
const [ativo, setAtivo] = useState(false);

return (
    <>
        {ativo ? 
            <button onClick={() => setAtivo(false)}>Ativo</button> 
            : 
            <button onClick={() => setAtivo(true)}>Inativo</button>
        }
    </>
);
}