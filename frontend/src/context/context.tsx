import { useState, createContext, ReactNode, ElementType } from "react";
import { IUserData } from "../services/users";

type UserContextProps = {
  children: ReactNode;
};

type PopupData = {
    msg: string;
    icon: string;
    theme: string;
}

type UserContextType = {
  isUserAdded: boolean;
  isUserDeleted: boolean;
  isUserUpdated: boolean;
  setIsUserAdded: (newState: boolean) => void;
  setIsUserDeleted: (newState: boolean) => void;
  setIsUserUpdated: (newState: boolean) => void;
  popupData: PopupData,
  setPopupData: (newState: PopupData) => void
}

const initialValue = {
  isUserAdded: false,
  isUserDeleted: false,
  isUserUpdated: false,
  setIsUserAdded: () => {},
  setIsUserDeleted: () => {},
  setIsUserUpdated: () => {},
  popupData: {
    msg: "",
    icon: "",
    theme: "",
  },
  setPopupData: () => {}
};

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isUserAdded, setIsUserAdded] = useState(initialValue.isUserAdded);
  const [isUserDeleted, setIsUserDeleted] = useState(initialValue.isUserDeleted);
  const [isUserUpdated, setIsUserUpdated] = useState(initialValue.isUserUpdated);
  const [popupData, setPopupData] = useState(initialValue.popupData);

  return (
    <UserContext.Provider
      value={{
        isUserAdded,
        setIsUserAdded,
        isUserDeleted,
        setIsUserDeleted,
        isUserUpdated,
        setIsUserUpdated,
        popupData,
        setPopupData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
