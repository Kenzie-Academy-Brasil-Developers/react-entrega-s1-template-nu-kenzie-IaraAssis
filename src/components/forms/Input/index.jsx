import styles from "./style.module.scss"


export const Input = ({label, id, type , placeholder, value , setValue, paragraph}) => {
    return (
    <div >
        <label className="title four" htmlFor={id}>{label}</label>
        <input
            className="title Headline" 
            placeholder={placeholder}
            type={type}
            name={id}
            id={id}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            />
            <p className="Headline"> {paragraph}</p>
    </div>
    );
};
