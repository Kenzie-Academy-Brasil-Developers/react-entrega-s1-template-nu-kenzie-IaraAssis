import { FinancialCard } from "./FinancialCard"
import styles from "./style.module.scss"


export const FinancialList = ({notList, removeNote}) => {
    
    return(
        <ul className={styles.containerUl}>
                {notList.length === 0 ? 
                (<p>Voce ainda nao possui nenhum lancamento!</p>)
                    : (
                    notList.map((note) => (
                        <FinancialCard 
                            key={note.id}
                            id={note.id} 
                            description={note.description} 
                            value={note.value} 
                            type={note.type}
                            removeNote={removeNote}
                        />
                    ))
                )}
            
        </ul>
    )
}

