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

    projectFirestore
      .collection('recipes')
      .get()
      .then((snapshot) => {
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
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
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
