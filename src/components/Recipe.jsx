import Markdown from 'https://esm.sh/react-markdown@10?bundle'
import React from "react"

const Recipe = React.forwardRef(function Recipe(props, ref) {
    return (
        <section className='suggested-recipe-container' ref={ref}>
            <h2 style={{color: "#d27759", fontFamily: "italic"}}>Jugad by the Jugadu Chef:</h2>
            <Markdown>{props.recipe}</Markdown>
        </section>
    )
})

export default Recipe