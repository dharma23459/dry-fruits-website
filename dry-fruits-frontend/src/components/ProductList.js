import React from "react";

const products = [
  { id: 1, name: "Almonds", price: "$10", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Cashews", price: "$12", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Pistachios", price: "$15", image: "https://via.placeholder.com/150" },
];

const ProductList = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Our Best Sellers</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
