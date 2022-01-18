
export const ButtonDropdown = ({ text, showMenu, getOption }) => {

    // const { text, showMenu } = props || { text: "Texto de prueba" }

    // console.log(props, "🍑🍑🍑😪🍑🍑")

    const handleClick = () => {
        getOption(text)
        console.log("lachota")
    }

    return (
        <button className="bg-white w-full py-2 lg:hover:bg-Neutral200" onClick={handleClick}>
            {
                text
            }
        </button>
    )
}
