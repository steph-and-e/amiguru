// import components

export default function Button({id, text, colour, icon}) {
    return (
        <button id={id}className={colour}>{text}</button>
    )
}