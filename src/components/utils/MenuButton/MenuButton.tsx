interface MenuButtonProps {
    parentMethod: ()=>void

}


export const MenuButton = ({parentMethod}:MenuButtonProps) => {

    return (
        <button style={{background:"none", border:"none"}} onClick={parentMethod} >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
        </button>
    )
}