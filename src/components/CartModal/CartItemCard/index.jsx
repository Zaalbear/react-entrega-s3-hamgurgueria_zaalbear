import { MdDelete } from "react-icons/md";
import styles from "../styles.module.scss"

export const CartItemCard = ({ product }) => {
   return (
      <li className={styles.list__item}>
         <div className={styles.item__container}>
            <img src={product.img} alt={product.name} />
            <div className={styles.item__infos}>  
               <h3 className="heading3">{product.name}</h3>
               <span className="text__body">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
         </div>
         <button className={styles.delete__bttn} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
