import React from 'react';

function CarrinhoDeCompra({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="shopping-cart">
      <h2>Carrinho</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.nome} - ${item.preco}
          </li>
        ))}
      </ul>
      <p>Total dos produtos: ${total}</p>
    </div>
  );
}

export default CarrinhoDeCompra;
