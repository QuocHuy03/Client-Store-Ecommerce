import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { carts } = useSelector((state) => state.cart);

  return (
    <AppContext.Provider
      value={{
        user,
        carts,
        isOpenModal,
        setIsOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
