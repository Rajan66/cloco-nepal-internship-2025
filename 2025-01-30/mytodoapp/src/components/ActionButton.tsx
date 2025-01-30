import { ButtonProps } from '../interfaces/ButtonProps'

const ActionButton = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className="w-10 h-8 text-blue-100 bg-black">{props.label}</button>
    )
}

export default ActionButton