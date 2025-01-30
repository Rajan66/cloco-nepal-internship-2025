import { ButtonProps } from '../interfaces/ButtonProps'

const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick}>{props.label}</button>
}

export default Button