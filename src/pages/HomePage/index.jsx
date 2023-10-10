import "../../styles/styles.scss"

import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

import { productsApi } from "../../services";

export const HomePage = () => {
   const localData = JSON.parse(localStorage.getItem("@cartlist"))

   const [isVisible, setVisible] = useState(false)
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(localData);
   
   useEffect(() => {
      localStorage.setItem("@cartlist", JSON.stringify(cartList))
    }, [cartList])

   useEffect(() => {
      const getProducts = async () => {
         try {
            const response = await productsApi.get("products")
            setProductList(response.data)
         
         } catch (error) {
         alert("Algum erro ocorreu, por favor tente mais tarde...")
      }
   }
   getProducts()
   }, [])

   const addItem = ({ id, img, name, price }) => {
      console.log( cartList.includes(id))
         setCartList([...cartList, {id: id, img: img, name: name, price: price}])
   }
   
   const removeItem = (deletingID) => {
      const filteredCart = cartList.filter((item) => {
         if (item.id !== deletingID) {
            return item;
         }
      });
      
      setCartList(filteredCart);
   };
   
   const clearCart = () => {
      setCartList([])
      console.log(cartList)
    }

   return (
      <>
         <Header setVisible={setVisible} cartList={cartList} />
         <main>
            <ProductList addItem={addItem} productList={productList} />
            {isVisible ? <CartModal setVisible={setVisible} clearCart={clearCart} removeItem={removeItem} cartList={cartList} /> : null}
         </main>
      </>
   );
};
