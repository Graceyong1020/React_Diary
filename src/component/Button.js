import "./Button.css";

const Button = ({text, type, onClick}) => { 
    // text: 문자열, type: 버튼 색상, onClick: 버튼 클릭했을 때 발생하는 이벤트 핸들러
    const btnType = ["positive", "negative"].includes(type) ? type : "default";
    return (
    <button className={["Button", `Button_${btnType}`].join(" ")}
     onClick={onClick}>{text}</button>
    );
};
Button.defaultProps = {
    type: "default",
};
export default Button;