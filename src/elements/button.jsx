const Button = (props) => {
   const {children} =props;
   return ( 
      <button className="bg-blue-600 px-3  py-1 rounded-lg">
         {children}
      </button>

   )
}

export default Button;