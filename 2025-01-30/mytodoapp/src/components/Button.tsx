import { TButtonProps } from '../types/TButtonProps'

const Button = (props: TButtonProps) => {
    return <button onClick={props.onClick}>{props.label}</button>
}

export default Button