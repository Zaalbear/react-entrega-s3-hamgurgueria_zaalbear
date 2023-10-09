import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss"

export const ProductList = ({ productList, addItem }) => {
   return (
      <ul className={styles.product__list}>
         {productList.map((product) => (
            <ProductCard addItem={addItem} key={product.id} product={product} />
         ))}
      </ul>
   );
};
