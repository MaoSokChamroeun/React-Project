
// export default ProductDisplayAsus
import React, { useContext, useEffect, useState } from 'react';
import asus_product from '../Assets/asus_product';
import { ShopContext } from '../Context/ShopContext';
import { useParams, Link } from 'react-router-dom';
import './ProductDisplayCss/ProductDisplay.css';
import Footer from '../Footer/Footer';
import HotProduct from '../HotProduct/HotProduct';

const ProductDisplayAsus = () => {
  const { addToCard } = useContext(ShopContext);
  const { asusID } = useParams();
  const asusProduct = asus_product.find((e) => e.asus_id === Number(asusID));
  // Move useState to the top to follow React Hook rules
  const [mainImage, setMainImage] = useState(null);
  useEffect(() => {
    if (asusProduct) {
      setMainImage(asusProduct.asus_image);
    }
  }, [asusProduct]);
  // Handle case where product is not found
  if (!asusProduct) {
    return (
      <div className="not-found-container" style={{ textAlign: 'center', margin: '100px' }}>
        <h2>Product Not Found :(</h2>
        <Link to="/">Go Back to Home</Link>
      </div>
    );
  }
  const images = [
    asusProduct.asus_image,
    asusProduct.asus_detail_2,
    asusProduct.asus_detail_3,
    asusProduct.asus_detail_4,
  ];

  const changeImage = (src) => {
    if (src) setMainImage(src);
  };

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" style={{ margin: '110px' }}>
      <div className='product-display-asus'>
        <div className="container py-5">
          <div className="gallery-container mx-auto">
            <div className="main-image-container mb-3">
              <img id="mainImage" onClick={() => window.scrollTo(0, 0)} src={mainImage} alt="Main Display" className="img-fluid rounded" />
            </div>
            <div className="thumbnail-container d-flex gap-4 mt-5">
              {images.map((image, i) => (
                <img key={i} src={image} alt={`Thumbnail ${i + 1}`} className="img-thumbnail" onClick={() => changeImage(image)} />
              ))}
            </div>
          </div>
        </div>
        <div className='display-right'>
          <div className='asus-infor'>
            <h1>{asusProduct.asus_name}</h1>
            <p>{asusProduct.window_info}</p>
            <p>{asusProduct.graphic_card}</p>
            <p>{asusProduct.cpu}</p>
            <p>{asusProduct.storage}</p>
            <p>{asusProduct.display}</p>
          </div>
          <div className='about-price'>
            <p className='new-price'>
              <span>${asusProduct.new_price}</span>
            </p>
            <p className='old-price'>
              <span>${asusProduct.old_price}</span>
            </p>
          </div>
          <button className="add-card" onClick={() => addToCard(asusProduct.asus_id)}>
            ADD TO CART
          </button>
        </div>
      </div>
      <HotProduct />
      <Footer />
    </div>
  );
};

export default ProductDisplayAsus;
