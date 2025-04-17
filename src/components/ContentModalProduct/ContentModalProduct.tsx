import "./ContentModalProduct.css";
import {ColorProps, Product} from "../../types";
import {useFetch} from "../../hooks";
import {INVENTORY_URL} from "../../utils/api";

interface Props {
    product?: Product;
    productId: number;
}
const url = INVENTORY_URL;

export const ContentModalProduct = ({productId}: Props) => {
    const {data:product, loading, error} = useFetch<Product>(url + `/${productId}`);

    // Si no hay productId, no renderizamos nada
    if (!productId) return null;

    if (loading) return (
        <div className="contentModalProduct loadingState">
            Cargando...
        </div>
    );

    if (error) return (
        <div className="contentModalProduct errorState">
            Error en la carga
        </div>
    );

    // Imagen por defecto en caso de que no exista
    const defaultImage = "default-image";

    return (
        <div className="contentModalProduct">
            {/* Encabezado con nombre del producto */}
            <header className="modalHeader">
                <h2>{product?.marketName ?? "Producto sin nombre"}</h2>
                <p className="productDesc">{product?.desc ?? "Sin descripción"}</p>
                <div className="productReference">
                    <span>Referencia: {product?.reference ?? "Sin referencia"}</span>
                </div>
            </header>

            {/* Imagen principal */}
            <section className="productImages">
                <img
                    className="mainImage"
                    src={product?.imageList?.length && product?.imageList?.length > 0
                        ? `/images/products/${product?.imageList[0].url}.webp`
                        : `/images/products/${defaultImage}.webp`}
                    alt={`Imagen principal de ${product?.marketName ?? "producto"}`}
                />
                <div className="imageGallery">
                    {product?.imageList && product?.imageList.length > 1 ?
                        product?.imageList.slice(1).map((image, index) => (
                            <img
                                key={index}
                                src={`/images/products/${image?.url ?? defaultImage}.webp`}
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
                    <strong>Marca:</strong> <span>{product?.idBrand?.name ?? "Sin marca"}</span>
                </div>
                <div className="detailRow">
                    <strong>Estado:</strong> <span>{product?.idStatus?.name ?? "No especificado"}</span>
                </div>
                <div className="detailRow">
                    <strong>Potencia:</strong> <span>{product?.power ? `${product.power}W` : "No especificada"}</span>
                </div>
                <div className="detailRow">
                    <strong>Lúmenes:</strong> <span>{product?.lumens ?? "No especificados"}</span>
                </div>
                <div className="detailRow">
                    <strong>Categorías:</strong>{" "}
                    <span>
                        {product?.categoriesSetInventory?.length
                            ? product?.categoriesSetInventory
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
                        {product?.technologiesSetInventory?.length
                            ? product?.technologiesSetInventory
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
                        {product?.installationTypeSetInventory?.length
                            ? product?.installationTypeSetInventory
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
                        {product?.colorsSetInventory?.length ? (
                            product?.colorsSetInventory.map((color:ColorProps, index) => (
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