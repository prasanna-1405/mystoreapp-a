import { useState } from "react";
// import "./Cart.css";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ name: "", price: "", qty: "" });

  const handleSubmit = () => {
    if (!product.name || !product.price || !product.qty) {
      alert("Please fill all fields before submitting!");
      return;
    }

    setProducts([
      ...products,
      { 
        name: product.name, 
        price: parseFloat(product.price), 
        qty: parseInt(product.qty) 
      }
    ]);

    setProduct({ name: "", price: "", qty: "" }); // Reset fields
  };

  const handleDelete = (indexToDelete) => {
    setProducts(products.filter((_, index) => index !== indexToDelete));
  };

  const totalAmount = products.reduce(
    (total, product) => total + product.price * product.qty,
    0
  ).toFixed(2);

  return (
    <div>
      <h3>Cart</h3>
      <div className="App-Row">
        <div className="App-Box">
          <p>
            <input
              type="text"
              placeholder="Product Name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </p>
          <p>
            <input
              type="number"
              placeholder="Price"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
            />
          </p>
          <p>
            <input
              type="number"
              placeholder="Quantity"
              value={product.qty}
              onChange={(e) => setProduct({ ...product, qty: e.target.value })}
            />
          </p>
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <div className="App-Box">
          <h3>Product List</h3>
          {products.length === 0 ? (
            <p>No products added yet.</p>
          ) : (
            <table border="1" style={{ width: "100%", textAlign: "center" }}>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price (₹)</th>
                  <th>Quantity</th>
                  <th>Total (₹)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>₹{product.price.toFixed(2)}</td>
                    <td>{product.qty}</td>
                    <td>₹{(product.price * product.qty).toFixed(2)}</td>
                    <td>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <h3>Total Amount: ₹{totalAmount}</h3>
        </div>
      </div>
    </div>
  );
}
