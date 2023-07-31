import styles from "./style.module.scss";

export const FinancialCard = ({description, value, type, removeNote, id}) =>{
    return(
    
        <li className={`
            ${styles.liBox} 
            ${type === "Entrada" ? styles.green : styles.gray}`} >

            <div className={styles.left}>
                <h2 className="title three">{description}</h2>
                <h3 className="title two">{type}</h3>
            </div>
            <div className={styles.right}>
                <span className="three">{value.toLocaleString("pt-BR", {
                style: "currency",currency: "BRL"})}</span>    
                <button className="btnSm" onClick={() => removeNote(id)}>
                    Excluir
                </button>
            </div>
        </li>
    );
};


