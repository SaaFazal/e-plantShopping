import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plantsArray = [
    {
      category: "Aromatic Plants",
      plants: [
        { name: "Lavender", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bloeiende_lavendel.jpg/800px-Bloeiende_lavendel.jpg", description: "Calming fragrance, great for relaxation.", cost: "$12.00" },
        { name: "Mint", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Spearmint.jpg/800px-Spearmint.jpg", description: "Fresh and invigorating aroma.", cost: "$8.00" },
        { name: "Rosemary", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Rosemary_bush.jpg/800px-Rosemary_bush.jpg", description: "Woody fragrance, great for cooking too.", cost: "$10.00" },
        { name: "Basil", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/BasilFragrant.jpg/800px-BasilFragrant.jpg", description: "Sweet and spicy aromatic herb.", cost: "$7.00" },
        { name: "Lemon Balm", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Lemon_balm_flowers.jpg/800px-Lemon_balm_flowers.jpg", description: "Citrusy scent, stress-relieving.", cost: "$9.00" },
        { name: "Jasmine", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jasmine_flowers.jpg/800px-Jasmine_flowers.jpg", description: "Sweet floral fragrance.", cost: "$14.00" },
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Aloe Vera", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/800px-Aloe_vera_flower_inset.png", description: "Soothes skin and aids digestion.", cost: "$11.00" },
        { name: "Echinacea", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Echinacea_purpurea_1.jpg/800px-Echinacea_purpurea_1.jpg", description: "Boosts the immune system.", cost: "$13.00" },
        { name: "Peppermint", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Mintha_x_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-095.jpg/800px-Mintha_x_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-095.jpg", description: "Relieves headaches and nausea.", cost: "$8.00" },
        { name: "Chamomile", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Camomile_flowers.jpg/800px-Camomile_flowers.jpg", description: "Calming, promotes sleep.", cost: "$10.00" },
        { name: "Turmeric", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Turmeric_plant.jpg/800px-Turmeric_plant.jpg", description: "Anti-inflammatory properties.", cost: "$12.00" },
        { name: "Ginger", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Zingiber_officinale.jpg/800px-Zingiber_officinale.jpg", description: "Aids digestion and reduces nausea.", cost: "$9.00" },
      ]
    },
    {
      category: "Decorative Plants",
      plants: [
        { name: "Peace Lily", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/800px-Spathiphyllum_cochlearispathum_RTBG.jpg", description: "Elegant white flowers, easy care.", cost: "$18.00" },
        { name: "Snake Plant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/800px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg", description: "Tough and stylish, air purifier.", cost: "$15.00" },
        { name: "Pothos", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pothos_in_Alaska.jpg/800px-Pothos_in_Alaska.jpg", description: "Trailing vines, very low maintenance.", cost: "$10.00" },
        { name: "Fiddle Leaf Fig", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ficus_lyrata.jpg/800px-Ficus_lyrata.jpg", description: "Large leaves, dramatic statement plant.", cost: "$30.00" },
        { name: "Monstera", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Monoderma_monstrosum.jpg/800px-Monoderma_monstrosum.jpg", description: "Iconic split leaves, tropical look.", cost: "$25.00" },
        { name: "ZZ Plant", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Zamioculcas_zamiifolia.jpg/800px-Zamioculcas_zamiifolia.jpg", description: "Hardy and glossy, thrives in low light.", cost: "$20.00" },
      ]
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar" style={{ backgroundColor: 'green', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
            Paradise Nursery
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</a>
          <a href="#plants" onClick={handlePlantsClick} style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Plants</a>
          <a href="#cart" onClick={handleCartClick} style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>
            🛒 Cart ({calculateTotalQuantity()})
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid" style={{ padding: '20px' }}>
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1 style={{ textAlign: 'center', color: 'green' }}>{category.category}</h1>
              <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '200px', textAlign: 'center' }}>
                    <img className="product-image" src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div className="product-title" style={{ fontWeight: 'bold', marginTop: '10px' }}>{plant.name}</div>
                    <div className="product-description" style={{ fontSize: '12px', color: '#555', marginTop: '5px' }}>{plant.description}</div>
                    <div className="product-cost" style={{ color: 'green', fontWeight: 'bold', marginTop: '5px' }}>{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={!!addedToCart[plant.name]}
                      style={{
                        marginTop: '10px',
                        padding: '8px 16px',
                        backgroundColor: addedToCart[plant.name] ? '#aaa' : 'green',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer',
                        width: '100%'
                      }}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;