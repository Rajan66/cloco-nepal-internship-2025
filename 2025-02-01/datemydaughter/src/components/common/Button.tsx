import { TButtonProps } from "@/types/props/TButtonProps"

const Button = ({ label = "Click Me", onClick }: TButtonProps) => {
    return (
        <button onClick={onClick} className="bg-pink-500 rounded-lg w-fit px-6 py-2">{label}</button>
    )
}

export default Button