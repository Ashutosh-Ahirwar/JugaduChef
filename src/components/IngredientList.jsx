

function IngredientList(props){

    const ingredientsListItems = props.ingredients.map(i=>{
    return(
        <li key={i}>{i}</li>
    )
    })

    return (
        <section className="section-ing">
                <h2>Ingredients on hand:</h2>
                <div className="section-ul-button-container">
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {props.ingredients.length>3 ?<div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>:null}
                </div>
            </section>
    )
}

export default IngredientList