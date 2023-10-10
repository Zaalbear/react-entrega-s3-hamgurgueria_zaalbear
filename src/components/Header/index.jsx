import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ setVisible, cartList }) => {
  const [value, setValue] = useState("");

  const openCart = () => {
    setVisible(true);
  };

  return (
    <header className={styles.header__container}>
      <div className={styles.logo__container}>
        <img
          className={styles.header__logo}
          src={Logo}
          alt="Logo Kenzie Burguer"
        />
        <div className={styles.cart__container}>
          <button onClick={openCart} className={styles.cart__bttn}>
            <MdShoppingCart className={styles.cart__icon} size={21} />
            <span className={styles.cart__count}>{cartList.length}</span>
          </button>
        </div>
      </div>
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
    </header>
  );
};
