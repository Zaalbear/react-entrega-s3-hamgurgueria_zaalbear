import "../../styles/styles.scss";

import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

import { productsApi } from "../../services";

export const HomePage = () => {
  const localData = JSON.parse(localStorage.getItem("@cartlist"));

  const [isVisible, setVisible] = useState(false);
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(localData);

  useEffect(() => {
    localStorage.setItem("@cartlist", JSON.stringify(cartList));
  }, [cartList]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await productsApi.get("products");
        setProductList(response.data);
      } catch (error) {
        alert("Algum erro ocorreu, por favor tente mais tarde...");
      }
    };
    getProducts();
  }, []);

  const addItem = (product) => {
    const foundProduct = cartList.find((item) => item.id === product.id);

    if (foundProduct) {
      Toastify({
        text: "Esse item já foi adicionado ao carrinho",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "var(--color-secondary)",
        },
      }).showToast();
    } else {
      setCartList([...cartList, product]);
    }
  };

  const removeItem = (deletingID) => {
    const filteredCart = cartList.filter((item) => {
      if (item.id !== deletingID) {
        return item;
      }
    });

    setCartList(filteredCart);
  };

  const clearCart = () => {
    setCartList([]);
    console.log(cartList);
  };

  return (
    <>
      <Header setVisible={setVisible} cartList={cartList} />
      <main>
        <ProductList addItem={addItem} productList={productList} />
        {isVisible ? (
          <CartModal
            setVisible={setVisible}
            clearCart={clearCart}
            removeItem={removeItem}
            cartList={cartList}
          />
        ) : null}
      </main>
    </>
  );
};
