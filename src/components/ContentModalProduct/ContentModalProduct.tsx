import "./ContentModalProduct.css";
import {Product} from "../../types";

interface Props {
    product?: Product;
}

export const ContentModalProduct = ({product}: Props) => {
    // Si no hay producto, no renderizamos nada
    if (!product) return null;

    return (
        <div className="contentModalProduct">
            {/* Encabezado con nombre del producto */}
            <header className="modalHeader">
                <h2>{product.marketName ?? "Producto sin nombre"}</h2>
                <p className="productDesc">{product.desc ?? "Sin descripción"}</p>
            </header>

            {/* Imagen principal */}
            <section className="productImages">
                <img
                    className="mainImage"
                    src={`/images/products/${product.imageList?.[0]?.url ?? "default-image"}.webp`}
                    alt={`Imagen principal de ${product.marketName ?? "producto"}`}
                />
                <div className="imageGallery">
                    {product.imageList && product.imageList.length > 1 ?
                        product.imageList.slice(1).map((image, index) => (
                            <img
                                key={index}
                                src={`/images/products/${image?.url ?? "default-image"}.webp`}
                                alt={`Imagen adicional ${index + 1}`}
                                className="thumbnailImage"
                            />
                        ))
                        : null
                    }
                </div>
            </section>

            {/* Información del producto */}
            <section className="productDetails">
                <div className="detailRow">
                    <strong>Marca:</strong> <span>{product.idBrand?.name ?? "Sin marca"}</span>
                </div>
                <div className="detailRow">
                    <strong>Categorías:</strong>{" "}
                    <span>
                        {product.categorySetInventory?.length
                            ? product.categorySetInventory
                                .map(category => category?.name)
                                .filter(Boolean)
                                .join(", ")
                            : "Sin categorías"
                        }
                    </span>
                </div>
                <div className="detailRow">
                    <strong>Tecnologías:</strong>{" "}
                    <span>
                        {product.technologySetInventory?.length
                            ? product.technologySetInventory
                                .map(tech => tech?.name)
                                .filter(Boolean)
                                .join(", ")
                            : "Sin tecnologías"
                        }
                    </span>
                </div>
                <div className="detailRow">
                    <strong>Aplicaciones:</strong>{" "}
                    <span>
                        {product.installationTypeSetInventory?.length
                            ? product.installationTypeSetInventory
                                .map(app => app?.name)
                                .filter(Boolean)
                                .join(", ")
                            : "Sin aplicaciones"
                        }
                    </span>
                </div>
                <div className="detailRow colorsRow">
                    <strong>Colores disponibles:</strong>
                    <div className="colorList">
                        {product.colorsSetInventory?.length ? (
                            product.colorsSetInventory.map((color, index) => (
                                <div key={color?.idColor ?? `color-${index}`} className="colorItem">
                                    <div className="colorDetails">
                                        <span className="colorTemperature">{color?.temperature ?? "N/A"}</span>
                                        <span className="colorDescription">{color?.description ?? "Sin descripción"}</span>
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