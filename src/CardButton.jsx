import "./CardButton.css"
export default function CardButton({buttonText, changeSlide, buttonValue}){
    const buttonFunction = () => {
        changeSlide(buttonValue);
    }
    return <button className="entry-button" onClick={buttonFunction}>
        {buttonText}
    </button>
}