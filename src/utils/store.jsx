import React, { createContext, useContext, useEffect, useReducer } from "react";

export const saveToStorage = (key = "@user", state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem(key, serialisedState);
        // console.log('SAVING LOCALSTORAGE', key, state)
    } catch (e) {
        console.warn(e);
    }
};

// Create a context for your store
const StoreContext = createContext();

// Create a custom hook to access the store
export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
};

// Create a provider for your store
export const StoreProvider = ({ children }) => {
    const savedUser = localStorage.getItem("@user");
    const initialState = {
        user: savedUser ? JSON.parse(savedUser) : null,
        activeMenu: '/',
        theme: 'light'
    };

    // Define a reducer function to update the state
    const reducer = (state, action) => {
        switch (action.type) {
            case "set_user":
                return { ...state, user: action.payload };
            case "set_menu":
                return { ...state, activeMenu: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const setUser = (user) => {
        saveToStorage("@user", user);
        dispatch({
            type: "set_user",
            payload: user,
        });
    };

    const swichMenu = (menuItem) => {
        dispatch({
            type: "set_menu",
            payload: menuItem,
        });
    };


    //   useEffect(() => {
    //   }, []);

    const setTheme = (mode = 'light') => {
        // console.log({ mode });
        document.documentElement.classList.remove(mode == 'light' ? 'dark' : 'light');
        document.documentElement.classList.add(mode)
        dispatch({
            type: "set_theme",
            payload: mode,
        });
        localStorage.setItem('theme', mode)

    }





    const value = {
        ...state,
        dispatch,
        saveToStorage,
        setUser,
        swichMenu,
        setTheme
    };

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};
