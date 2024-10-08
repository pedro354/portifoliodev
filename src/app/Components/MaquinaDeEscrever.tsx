import { useEffect, useState } from "react";

export function MaquinaDeEscrever(props: { text: string; }){
    const [text, setText] = useState("");
    
    const escreverNaTela = (text: string, i = 0) => {
        if(i < text.length){
            setText(text.slice(0, i + 1));
            setTimeout(() => escreverNaTela(text, i + 1), 80);
        }
    };

    useEffect(() => {
        setTimeout(() => escreverNaTela(props.text));
    }, []);
    
    return(
        <>
        {text}
        </>
    )
}