// netlify/functions/getRecipe.js
import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. Don't say affirmation words like 'sure', 'ofcourse',etc. just tell what we can make and then ingredients and Instruction. Also highlight ingredient, instruction and dish text
`

const hf = new HfInference(process.env.HF_API_KEY)

export async function handler(event) {
  try {
    const { ingredients } = JSON.parse(event.body)
    const ingredientsString = ingredients.join(", ")

    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe!` },
      ],
      max_tokens: 1024
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ recipe: response.choices[0].message.content })
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    }
  }
}
