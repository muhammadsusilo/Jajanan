const Button = (props) => {
   const {children,id} =props;
   return ( 
      <button className="bg-blue-600 px-3  py-1 rounded-lg"
       id={id}
      >
         {children}
      </button>
   )
}

export default Button;