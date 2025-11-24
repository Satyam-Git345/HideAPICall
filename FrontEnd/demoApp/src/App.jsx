import { useEffect, useState } from "react";
import { getProducts } from "./api/getProducts";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setData(res.products);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
