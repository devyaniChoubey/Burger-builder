import './Order.css';

const order = (props) => {
    let ingredientsArray =[];
    for(let key in props.ingredients){
        ingredientsArray.push({name : key , amount :  props.ingredients[key]})
    }

    const ingredientOutput = ingredientsArray.map(ig => {
        return <span  style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
            }} key={ig.name}>{ig.name} ({ig.amount})</span>
    })



    return(
        <div className="Order">
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
        
}

export default order;