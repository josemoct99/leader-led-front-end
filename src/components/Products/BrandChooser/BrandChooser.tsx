import './BrandChooser.css'
import {useFetch} from "../../../hooks";
import {Brand as BrandType, Direction} from "../../../types";
import {useEffect, useState} from "react";
import {MoveDiv} from "../../utils/MoveDiv/MoveDiv";
import {BrandList} from "../BrandList/BrandList";
import {BRAND_URL} from "../../../utils/api";

const url = BRAND_URL;

export const BrandChooser = () => {
    const {data, error, loading} = useFetch<Array<BrandType>>(url);
    const [leftBrand, setLeftBrand] = useState<number>(0);

    const moveBrandDiv = (dir: number) => {
        const brandChooser = document.querySelector('.brandChooser') as HTMLElement;
        const itemWidth = brandChooser.firstElementChild?.clientWidth || 0;
        const move = leftBrand + (dir * itemWidth);
        const dataLength: number = data?.length || 0;

        if (move > 0 || move < -(dataLength * itemWidth))
            return;

        setLeftBrand(leftBrand + (dir * itemWidth));
    };
    // movement
    useEffect(() => {
        const brandChooser = document.querySelector('.brandChooser') as HTMLElement;
        brandChooser.style.left = `${leftBrand}px`;

    }, [leftBrand]);


    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>
            <div className="containerBrandChooser">
                <MoveDiv parentMethod={moveBrandDiv} dir={Direction.BACK}/>
                <div className="aux-brandChooser">
                    <BrandList data={data}/>
                </div>
                <MoveDiv parentMethod={moveBrandDiv} dir={Direction.NEXT}/>
            </div>

        </>
    )
}



