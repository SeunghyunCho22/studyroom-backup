const Button = ({
    text, onClick
}) => {
    return <p className="bg-gray-800 hover:bg-gray-600 duration-100 text-white inline m-2 p-2 rounded-lg cursor-pointer" onClick={onClick}>{text}</p>
}

export default Button