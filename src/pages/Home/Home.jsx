import RecipeList from '../../components/RecipeList/RecipeList';
// import { useFetch } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { projectFirestore } from '../../Firebase/config';
import { useTheme } from '../../hooks/useTheme';

import './Home.scss';

const Home = () => {
  // const { data, isPending, error } = useFetch('http://localhost:3000/recipes'); //only needed when using the useFetch hook and a json file rather than firebase
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);

    //by assigning the below code to a const variable we can then return it at the end of the code block as a function call so that when we change pages the code no longer tries to display the realtime snapshot as it it no longer in the DOM
    const unsub = projectFirestore.collection('recipes').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );
    //this return statement uses unsub() inside a function to unsubscribe from the real time snapshot (meaning it stops listening for the change to the snapshot) whenever the page changes from the home page as it no longer exists in the DOM and will cause errors without this.
    return () => unsub();
  }, []);

  return (
    <div className={`home ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
