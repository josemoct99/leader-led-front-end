import './TitleDecorate.css'

interface Title {
    title: string;
    subTitle: string;
}

export const TitleDecorate = ({title, subTitle}: Title) => {
    return (
        <>
            <div className="default" id="title-products">
                <span>{title}</span>
                <h1>{subTitle}</h1>
            </div>
        </>
    )
}