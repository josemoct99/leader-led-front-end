import './Brand.css'
import {Brand as BrandType} from '../../../types/brand'
import {useState} from "react";

interface Props {
    brand: BrandType,
    parentMethod: (value: string, isPressed: boolean) => void,

}


export const Brand = ({brand, parentMethod}: Props) => {
    const [clicked, setClicked] = useState(false)
    const images = brand.images;
    const name = brand.name;

    let stringImage: string[] = []
    images.forEach(image => {
        image.typeSet.forEach(type => {
            stringImage.push(image.url + "." + type?.type);
        })
    })

    const clickedHandler = () => {
        const newClicked = !clicked;
        setClicked(newClicked);
        parentMethod(name, newClicked);

    };

    const principalImg = "images/brands/" + stringImage[0] // principal image
    return (
        <>
            <button className={`brand ${clicked}-brand`} title={name}
                    onClick={clickedHandler}>
                <img src={principalImg} alt={`${name}-img`}/>

            </button>
        </>
    )
}