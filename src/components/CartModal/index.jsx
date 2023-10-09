import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss"

export const CartModal = ({ setVisible, cartList, removeItem, clearCart }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const closeCart = () => {
     setVisible(false)
   }

   return (
         <div className={styles.modal__container} role="dialog">
            <div className={styles.modal__header}>
               <h2 className={`heading3 ${styles.modal__title}`}>Carrinho de compras</h2>
               <button className={styles.modal__closeBttn} onClick={closeCart} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>

            <div  className={styles.cart__container}>
            {cartList.length !== 0 ?
               <ul className={styles.products__list}>
                  {cartList.map((product) => (
                     <CartItemCard removeItem={removeItem} key={product.id} product={product} />
                     ))}
               </ul>
               :
               <h2 className={`${styles.empty__cart} text__body`} >Ainda não há itens no carrinho...</h2>
            }
            </div>

            <div className={styles.modal__footer}>
               <div className={styles.total__container}>
                  <span className="headline">Total</span>
                  <span className={`${styles.total__value} text__body`}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={clearCart} className={`headline ${styles.clear__bttn}`}>Remover todos</button>
            </div>
         </div>
   );
};
