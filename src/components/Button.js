const Button = ({ color, text, onClick }) => {
  return (
    <div>
        <button className={`w-12 h-7 rounded text-sm text-white ${color}`}
            onClick={onClick}>
                {text}
        </button>
    </div>
  )
}

export default Button