import { useContext } from 'react'; //to access the context value you need to use the useContext hook in the component where the context value is needed.
import { ThemeContext } from '../Context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  {
    /*you must pass in the context jsx file name (the context object) inside the useContext() and not the function created inside it*/
  }

  if (context === undefined) {
    throw new Error('useTheme() must be used inside a ThemeProvider'); //This will give the error message if the useTheme hook is used outside of the part of the component tree that is wrapped by the ThemeProvider (this is for when you are only wrapping a section of your application and not the whole thing. It is still a good idea to have this if statement even if you have wrapped the app component in the ThemeProvider).
  }

  return context;
};
