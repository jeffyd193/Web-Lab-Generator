import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {
    sections: [
        
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    function addSection(section) {
        dispatch({
            type: "ADD_SECTION",
            payload: section
        });
    }

    function editSection(section) {
        dispatch({
            type: "EDIT_SECTION",
            payload: section
        });
    }

    function removeSection(id) {
        dispatch({
            type: "REMOVE_SECTION",
            payload: id
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                sections: state.sections,
                addSection,
                editSection,
                removeSection
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};