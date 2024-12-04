import './ProductItem.css';

interface ProductItemProps {
    image: string;
    name: string;
    price: string;
    colors?: string[];
}

export const ProductItem = ({ image, name, price, colors }: ProductItemProps) => {
    return (
        <div className="product-item">
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price}</p>
            {colors && (
                <div className="product-colors">
                    {colors.map((color, index) => (
                        <span
                            key={index}
                            className="product-color"
                            style={{ backgroundColor: color }}
                        ></span>
                    ))}
                </div>
            )}
        </div>
    );
};
