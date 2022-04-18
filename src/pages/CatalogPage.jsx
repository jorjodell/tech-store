import { useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, title: 'A', color: '#000' },
  { id: 2, title: 'B', color: '#00f' },
  { id: 3, title: 'C', color: '#f00' },
  { id: 5, title: 'D', color: '#000' },
  { id: 6, title: 'E', color: '#00f' },
];

const colorOptions = [
  { title: 'Black', value: '#000' },
  { title: 'Red', value: '#f00' },
  { title: 'Blue', value: '#00f' },
  { title: 'White', value: '#fff' },
  { title: 'Green', value: '#0f0' },
];

function CatalogPage() {
  const { name } = useParams();
  const [colors, setColors] = useState(new Set(['#000', '#fff']));

  const handleChange = (value) => {
    if(colors.has(value)) {
      colors.delete(value)
    } else {
      colors.add(value)
    }
    setColors(new Set(colors))
  }

  return (
    <div style={{padding: 20}}>
      <h1>{name}</h1>
      <div>
        {colorOptions.map((op) => (
          <label key={op.value}>
            <input
              type="checkbox"
              value={op.value}
              checked={colors.has(op.value)}
              onChange={() => handleChange(op.value)}
            />
            {op.title}
          </label>
        ))}
      </div>
      <div>
        {products
          .filter((prod) => colors.has(prod.color))
          .map((prod) => <p key={prod.id}>{prod.title}</p>)}
      </div>
    </div>
  );
}

export default CatalogPage;
