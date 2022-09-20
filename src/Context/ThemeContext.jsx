import { createContext } from 'react'; //This function (creatContext) allows us to create a new context object

export const ThemeContext = createContext(); //This is the new context object stored in a constant. On this object is a context provider component, which we can access using the line below.
//<ThemeContext.Provider></ThemeContext.Provider>
//This provides a global contxt value to the entire section it is wrapped around, if it was wrapped around the app component inside the index.jsx it would provide a global context value to the entire application because it is wrapping the root component. You need to import this jsx file where the wrapper is placed.
//The second way to use this file is by creating the below function and then wrapping the component, such as the app for use in the entire application, in the function name given for the below function. eg <ThemeProvider></ThemeProvider> You need to import the function into the component it is used in placing the function name inside {} followed by the file path (see index.jsx for example). Using the function way allows you to put custom logic inside the components, and that custom logic can keep track of the values that we put into the provider. It can also change the value if we need it to. This gives us much more flexability.

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
      {/*the children are the components that this function wraps around*/}
    </ThemeContext.Provider>
  );
};
