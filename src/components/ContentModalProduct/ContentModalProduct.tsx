import "./ContentModalProduct.css";
import {Product} from "../../types"; // Asegúrate de agregar estilos personalizados

interface Props {
    product: Product;
}

export const ContentModalProduct = ({product}: Props) => {
    return (
        <div className="contentModalProduct">
            {/* Encabezado con nombre del producto */}
            <header className="modalHeader">
                <h2>{product.marketName}</h2>
                <p className="productDesc">{product.desc}</p>
            </header>

            {/* Imagen principal */}
            <section className="productImages">
                <img
                    className="mainImage"
                    src={`/images/products/${product.imageList[0]?.url || "default-image"}.webp`}
                    alt={`Imagen principal de ${product.marketName}`}
                />
                <div className="imageGallery">
                    {product.imageList.slice(1).map((image, index) => (
                        <img
                            key={index}
                            src={`/images/products/${image.url}.webp`}
                            alt={`Imagen adicional ${index + 1}`}
                            className="thumbnailImage"
                        />
                    ))}
                </div>
            </section>

            {/* Información del producto */}
            <section className="productDetails">
                <div className="detailRow">
                    <strong>Marca:</strong> <span>{product.idBrand?.name || "Sin marca"}</span>
                </div>
                <div className="detailRow">
                    <strong>Categorías:</strong>{" "}
                    <span>
            {product.categorySetInventory.map((category) => category.name).join(", ") ||
                "Sin categorías"}
          </span>
                </div>
                <div className="detailRow">
                    <strong>Tecnologías:</strong>{" "}
                    <span>
            {product.technologySetInventory.map((tech) => tech.name).join(", ") ||
                "Sin tecnologías"}
          </span>
                </div>
                <div className="detailRow">
                    <strong>Aplicaciones:</strong>{" "}
                    <span>
                        {product.applicationTypeSetInventory
                            .map((app) => app.name)
                            .join(", ") || "Sin aplicaciones"}
                    </span>
                </div>
                <div className="detailRow colorsRow">
                    <strong>Colores disponibles:</strong>
                    <div className="colorList">
                        {product.colorsSetInventory.length > 0 ? (
                            product.colorsSetInventory.map((color) => (
                                <div key={color.idColor} className="colorItem">
                                    <div className="colorDetails">
                                        <span className="colorTemperature">{color.temperature}</span>
                                        <span className="colorDescription">{color.description}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <span>Sin colores</span>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};
