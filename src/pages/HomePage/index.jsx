import "../../styles/styles.scss"

import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

import { productsApi } from "../../services";

export const HomePage = () => {
   const [isVisible, setVisible] = useState(false)
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);

   useEffect(() => {

      const getProducts = async () => {
         try {
            const response = await productsApi.get("products")
      
           console.log(response)
         
         } catch (error) {
         console.log(error);
      }
   }
   getProducts()
     
   }, [])



   
   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header setVisible={setVisible} cartList={cartList} />
         <main>
            <ProductList productList={productList} />
            {isVisible ? <CartModal setVisible={setVisible} cartList={cartList} /> : null}
         </main>
      </>
   );
};
