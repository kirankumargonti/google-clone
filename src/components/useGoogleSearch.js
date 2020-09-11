import {useEffect, useState} from 'react';
import axios from 'axios';

import {baseURL, CONTEXT_KEY, API_KEY} from './keys';

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${baseURL}?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
        .then((result) => {
          setData(result.data);
        })
        .catch((err) => alert(err.message));
    };

    fetchData();
  }, [term]);

  return {data};
};

export default useGoogleSearch;