// import components

export default function Button({text, colour}) {
    return (
        <button className={colour}>{text}</button>
    )
}