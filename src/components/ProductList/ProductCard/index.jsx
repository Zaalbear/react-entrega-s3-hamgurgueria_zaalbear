import styles from "../styles.module.scss"

export const ProductCard = ({ product, addItem }) => {
    return(
        <li tabIndex={product.id} className={styles.list__item}>
            <img className={styles.item__img} src={product.img} alt={product.name} />
            <div className={styles.info__container}>
                <h3 className={`${styles.item__name} heading3`}>{product.name}</h3>
                <span className={`${styles.item__category} caption`}>{product.category}</span>
                <span className={`${styles.item__price} text__body`}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => {addItem(product)}} className={`${styles.add__bttn} text__body`} >Adicionar</button>
            </div>
        </li>
    )
}