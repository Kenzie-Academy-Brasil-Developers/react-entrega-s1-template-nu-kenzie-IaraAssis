import { useState } from "react";
import { TodoForm } from "../../forms/TodoForm";
import { FinancialList } from "./FinancialList";
import { SectionValue } from "../../valueTotal/SectionValue";
import {v4 as uuidv4} from "uuid";
import styles from "./style.module.scss";

export const FinancialSummary = () => {
    const [notList, setNotList] = useState([]);

    const addNote = (formData) => {
        const newNote = {...formData, id: uuidv4()}
        setNotList([...notList, newNote]);
    }
        
    const removeNote = (removeId) => {
        const newNoteList = notList.filter(note => note.id !== removeId);
        setNotList(newNoteList);
    }
        
    return(
        
        <section className={styles.container}>
            <div className={styles.containerForm}>
                <TodoForm addNote={addNote} />
                {notList.length > 0 && <SectionValue notList={notList} />}
            </div>
            
            <div className={styles.containerLi}>
                <h2 className="title one">Resumo financeiro</h2> 
                <FinancialList notList={notList} removeNote={removeNote}/>
                
            </div>
        </section>
    );

};




