const Button = (props) => {
   const {children, onClick, type = "button"} =props;
   return ( 
      <button className="bg-blue-600 px-3  py-1 rounded-lg"
       type={type} onClick={onClick}
      >
         {children}
      </button>
   )
}

export default Button;