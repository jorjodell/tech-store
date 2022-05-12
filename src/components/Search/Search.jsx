import axios from 'axios';
import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import css from './search.module.css';

const Search = () => {
  const [value, setValue] = useState('');
  const search = useDebounce(value, 500);

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true)
      const { data } = await axios.get(`http://localhost:3001/products`, {
        params: {
          q: search,
        },
      });
      setResults(data);
      setLoading(false);
    };
    if (search.trim()) {
      handleSearch();
    }
  }, [search]);

  return (
    <div className={css.search}>
      <input
        type="search"
        className={css.input}
        placeholder="Search entiere store here..."
        onChange={(e) => setValue(e.target.value)}
      />
      {(!!results.length || loading) && (
        <div className={css.list}>
          {loading && "Загрузка..."}
          {results.map((product) => (
            <div key={product.id}>{product.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
