import { useState } from "react";
import { Input } from "../input";
import { Select } from "../Select";
import styles from "./style.module.scss"



export const TodoForm = ({addNote}) => {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [type, setType] = useState("Entrada");
    

    const submit = (event) => {
    event.preventDefault();
    
    const numericValue = parseFloat(value)

    if(!isNaN(numericValue)){
        addNote({description, value:numericValue, type})

    }else{
        window.alert("Por favor, preencha um número válido para o valor.")
    }

    setDescription("");
    setValue("");
    
    };

    return (
        <div className={styles.formBox}>
        <form onSubmit={submit}>
            <Input 
                
                label="Descrição" 
                placeholder="Digite aqui sua descrição" 
                type="text" 
                id="description" 
                value={description} 
                setValue={setDescription} 
                paragraph="Ex: Compra de roupas"
            />
            <Input 
                label="Valor (R$)" 
                placeholder="1" 
                type="number" 
                required 
                id="value" 
                value={value} 
                setValue={setValue}
            />

            <Select 
                value={type} 
                setValue={setType}
            />

            <button 
                className="btn"
                type="submit" 
                >Inserir valor
            </button>
        </form>
        </div>

    );
        
};
