import { TButtonProps } from '../../types/TButtonProps'

const Button = (props: TButtonProps) => {
    return <button onClick={props.onClick} className='text-white bg-blue-500 '>{props.label}</button>
}

export default Button