import styles from "./style.module.scss";

export const SectionValue = ({notList}) => {

    const totalValue = notList.reduce((value, note) => {
        const cont = parseFloat(note.value);
        if (note.type === "Entrada"){
            return value + cont;
        }else{
            return value - cont;
        }
    }, 0);
    
    return(
        <section className={styles.container}>
            <div>
                <h2 className="title one">Valor Total:</h2>
                <span className="title three">{totalValue.toLocaleString("pt-BR", {
            style: "currency",currency: "BRL"})}
            </span>
            </div>
            <p className="title four">O valor se refere ao saldo</p>   
        </section>
    );
};

