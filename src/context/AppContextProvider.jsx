import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { carts } = useSelector((state) => state.cart);
  const { discounts } = useSelector((state) => state.discount);
  const { orders } = useSelector((state) => state.order);
  const { search } = useSelector((state) => state.product);

  return (
    <AppContext.Provider
      value={{
        user,
        carts,
        orders,
        search,
        discounts,
        isOpenModal,
        setIsOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
