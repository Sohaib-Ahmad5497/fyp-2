import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{myName :'sohaib'}}>
            {children}
        </AppContext.Provider>
    );
};

const UseProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, UseProductContext };
