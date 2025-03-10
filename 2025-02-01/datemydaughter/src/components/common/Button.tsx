import { TButtonProps } from "@/types/props/TButtonProps"
import { ArrowLeft, PlusCircleIcon } from "lucide-react"

const Button = ({ label = "Click Me", onClick }: TButtonProps) => {
    // TODO Question: is it better to handle specific cases here or just do it where it is needed?
    if (label === "Add application") {
        return (
            <div className="flex  bg-blue-500 rounded-lg justify-center items-center px-4 py-2 gap-2 cursor-pointer">
                <PlusCircleIcon />
                <button onClick={onClick} >{label}</button>
            </div>
        )
    }
    if (label === "Cancel") {
        return (
            <div className="bg-red-500 hover:bg-red-400 rounded-lg w-fit px-6 py-2">
                <button onClick={onClick} >{label}</button>
            </div >
        )
    }
    return (
        <button onClick={onClick} className="bg-pink-500 hover:bg-pink-400 rounded-lg w-fit px-6 py-2">{label}</button>
    )
}

export default Button