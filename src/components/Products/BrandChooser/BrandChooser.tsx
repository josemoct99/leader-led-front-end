import './BrandChooser.css'
import {useFetch} from "../../../hooks";
import {Brand as BrandType} from "../../../types";
import {Brand} from "../index";

const url = "http://localhost:8080/api/brand/";

export const BrandChooser = () => {
    const {data, error, loading} = useFetch<Array<BrandType>>(url);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>
            <div>
                {data?.map((item) => (
                    <Brand key={item.name} name={item.name} images={item.images} idBrand={item.idBrand}/>
                ))}

            </div>
        </>
    )
}



