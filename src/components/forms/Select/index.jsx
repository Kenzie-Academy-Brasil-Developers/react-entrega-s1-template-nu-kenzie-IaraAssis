import styles from "./style.module.scss";

export const Select = ({value, setValue}) => {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setValue(selectedValue)
        
    }
    return (
    <div>
        <label className="title four" htmlFor="">Tipo de valor</label>
        <select className={styles.formBox} value={value} onChange = {handleSelectChange}>
            <option className="title four"  value="Entrada">Entrada</option>
            <option className="title four"  value="Despesa">Despesa</option>
        </select>
    </div>
    );
};