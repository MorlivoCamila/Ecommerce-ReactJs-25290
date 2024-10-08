import './Counter.scss'

const Counter = ({max, counter, setCounter , handleAgregar}) => {

    const handleSumar = () => {
        if(counter < max){
            setCounter(counter + 1)
        }
    }

    const handleRestar = () => {
        
        if(counter > 1 ){
            setCounter(counter - 1)
        }
    }

    return(
        <div className='buttonsCounter'>

            <div>

                <button className={`btn mx-2 ${counter === 0 ? "btn-outline-danger counter-disable" : "btn-outline-primary" }`}
                        onClick={handleRestar}> - </button>

                <span className="mx-3">{counter}</span>

                <button className={ counter === max ? "btn btn-danger" : "btn btn-outline-primary"} 
                        onClick={handleSumar}> + </button>
                
            </div>

            <div>

                <button disable={counter===0} className="btn btn-success my-2" onClick={handleAgregar}>Agregar al carrito</button>
           
            </div>

        </div>
    )
}

export default Counter