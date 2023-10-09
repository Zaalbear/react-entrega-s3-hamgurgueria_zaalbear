import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss"

export const ProductList = ({ productList }) => {
   return (
      <ul className={styles.product__list}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </ul>
   );
};
