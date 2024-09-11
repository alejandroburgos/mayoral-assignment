import React, { useEffect, useState } from 'react';
import { useMobile } from '../../contexts/MobileContext';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  price: number;
  offer?: number;
  imageUrl: string;
  colors?: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  offer,
  colors,
  imageUrl,
}) => {
  const { isMobile } = useMobile();
  const [truncatedTitle, setTruncatedTitle] = useState(title);

  const discountedPrice = offer ? (price - (price * offer) / 100).toFixed(2) : price.toFixed(2);

  const titleLengthDesktop = 40;
  const titleLengthMobile = 17;

  useEffect(() => {
    if (isMobile && title.length > titleLengthMobile) {
      setTruncatedTitle(title.slice(0, titleLengthMobile) + '...');
    } else if (!isMobile && title.length > titleLengthDesktop) {
      setTruncatedTitle(title.slice(0, titleLengthDesktop) + '...');
    } else {
      setTruncatedTitle(title);
    }
  }, [isMobile, title]);

  return (
    <div className="product-card">
      <Image
        className="product-image"
        src={imageUrl}
        alt={truncatedTitle}
        layout="responsive"
        width={220}
        height={300}
      />

      <span className="product-name">{truncatedTitle}</span>

      <div className="price">
        {offer ? (
          <div className="price-container">
            <span className="old-price">{price.toFixed(2)} €</span>
            <span className="discount-price">
              {discountedPrice} € ({offer}%)
            </span>
          </div>
        ) : (
          <span className="current-price">{price.toFixed(2)} €</span>
        )}
      </div>

      <div className="color-info">{colors && colors.length ? <span>más colores</span> : null}</div>

      <div className="btn-container">
        <button className="add-to-cart">AÑADIR</button>
      </div>
    </div>
  );
};
