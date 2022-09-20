import { createContext, useReducer } from 'react'; //The function (creatContext) allows us to create a new context object. The useReducer hook allows us to specify a reducer function, which will be responsible for updating our state and keeping all of that logic together in one place. It also allows you to specify an initial state value.

export const ThemeContext = createContext(); //This is the new context object stored in a constant. On this object is a context provider component, which we can access using the line below.
//<ThemeContext.Provider></ThemeContext.Provider>
//This provides a global contxt value to the entire section it is wrapped around, if it was wrapped around the app component inside the index.jsx it would provide a global context value to the entire application because it is wrapping the root component. You need to import this jsx file where the wrapper is placed.
//The second way to use this file is by creating the below function and then wrapping the component, such as the app for use in the entire application, in the function name given for the below function. eg <ThemeProvider></ThemeProvider> You need to import the function into the component it is used in placing the function name inside {} followed by the file path (see index.jsx for example). Using the function way allows you to put custom logic inside the components, and that custom logic can keep track of the values that we put into the provider. It can also change the value if we need it to. This gives us much more flexability.

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    //the ...state means spread the current state properties, this is for when you have multiple properties that are to be changed. If you don't use the spread operator when you have multiple properties, when you change the state it will only have that one property and all the others will be forgotten and become unable to change
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

//We can call this change color function and pass in a new color that's going to fire dispatch, where we specify the type and the payload on the action object. And in turn, this fires the theme reducer function, which takes in the current state and the action. We check the action type, and if it's equal to CHANGE_COLOR, then we return a new state object with new color value that then updates the state object that we get back from the use reducer.

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#58249c',
    mode: 'dark',
  }); //dispatch is a function that allows us to dispatch a state change. state is the initial state that we specify

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };
  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
      {/*the children are the components that this function wraps around*/}
    </ThemeContext.Provider>
  );
};
