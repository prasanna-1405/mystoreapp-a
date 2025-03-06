// import "./Products.css"
// export default function Products() {
//   const products = [
//     { id: 1, name: "Product 1", price: 30 },
//     { id: 2, name: "Product 2", price: 40 },
//     { id: 3, name: "Product 3", price: 45 },
//     { id: 4, name: "Product 3", price: 35 },
//     { id: 5, name: "Product 3", price: 25 },
//     { id: 6, name: "Product 3", price: 40 },
//   ];
//   return (
//     <div>
//       <div className="App-Products-Row">
//         {products.map((value, index) => (
//           <div className="App-Products-Box" key={index}>
//             <h3>{value.name}</h3>
//             <h4>{value.price}</h4>
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import "./Products.css";

export default function Products() {
  const products = [
    { id: 1, name: "Product 1", price: 30, image: "https://i.pinimg.com/736x/bc/c7/23/bcc723326772de30f20296b91eb8bd70.jpg" },
    { id: 2, name: "Product 2", price: 40, image: "https://i.pinimg.com/736x/38/a6/6f/38a66fedf4b552c8f4c2b69d1f47c448.jpg" },
    { id: 3, name: "Product 3", price: 45, image: "https://i.pinimg.com/736x/95/de/7a/95de7aad349822137df587faab0b0841.jpg" },
    { id: 4, name: "Product 4", price: 35, image: "https://i.pinimg.com/736x/bc/c7/23/bcc723326772de30f20296b91eb8bd70.jpg" },
    { id: 5, name: "Product 5", price: 25, image: "https://i.pinimg.com/736x/38/a6/6f/38a66fedf4b552c8f4c2b69d1f47c448.jpg" },
    { id: 6, name: "Product 6", price: 40, image: "https://i.pinimg.com/736x/95/de/7a/95de7aad349822137df587faab0b0841.jpg" },
  ];

  return (
    <div>
      <div className="App-Products-Row">
        {products.map((product, index) => (
          <div className="App-Products-Box" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
