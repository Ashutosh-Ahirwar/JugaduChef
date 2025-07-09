import React, { useRef, useEffect, useState } from "react"


import Recipe from "./Recipe"
import IngredientList from "./IngredientList"
import { getRecipeFromMistral } from "../ai"


function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const targetDivRef = useRef(null)

    useEffect(() => {
        if (recipe && targetDivRef.current) {
            targetDivRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
    }

    async function getRecipe() {
        setIsLoading(true)
        const Response = await getRecipeFromMistral(ingredients)
        setRecipe(Response)
        setIsLoading(false)
        console.log(Response)
    }

    function clearIngredients(){
        setIngredients([])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input type="text" placeholder="e.g. sugar" name="ingredient" aria-label="Add ingredient" required />
                <button>Add Ingredient</button>
            </form>

            {ingredients.length < 4 && <p style={{ color: "red", fontSize: "15px", textAlign: "center" }}>Add at least 4 ingredients!</p>}
            {ingredients.length > 0 && <IngredientList ingredients={ingredients} getRecipe={getRecipe} clearIngredients={clearIngredients} />}

            {isLoading && <p style={{ textAlign: "center", fontStyle: "italic" }}>🍳 Cooking up your recipe...</p>}
            {recipe && <Recipe ref={targetDivRef} recipe={recipe} />}
        </main>
    )
}

export default Main