import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss"

export const Header = () => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.header__container}>
         <img className={styles.header__logo} src={Logo} alt="Logo Kenzie Burguer" />
         <div className={styles.cart__container}>
            <button className={styles.cart__bttn}>
                <MdShoppingCart size={21} />
                <span>0</span>
            </button>
            <form className={styles.header__search}>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
