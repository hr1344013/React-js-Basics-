
function Buton(){
    let count = 0;

    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    };

    const handleClick4 = (e) => e.target.textContent = "OUCH!";

    const handleClick = () => console.log("OUCH!");
     
  
   /*Sending arguments to the function */  const handleClick2 = (name) => console.log(`${name} stop clicking me `);
    return(
        <button onClick={(e) => handleClick4(e)}>Click me </button>
    );
}

export default Buton