
export const ButtonDropdown = ({ text, showMenu, getOption }) => {

    const handleClick = () => {
        getOption(text)
    }

    return (
        <button className="bg-white w-full py-2 lg:hover:bg-Neutral200" onClick={handleClick}>
            {
                text
            }
        </button>
    )
}
