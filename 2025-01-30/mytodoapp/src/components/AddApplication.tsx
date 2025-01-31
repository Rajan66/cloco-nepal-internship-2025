import { useState } from "react"
import { TApplication } from "../types/TApplication";
import Button from "./common/Button";
import ModalView from "./common/ModalView";

type AddApplicationProps = {
    onSubmit: (data: TApplication) => void
}
const AddApplication = ({ onSubmit }: AddApplicationProps) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const closeModal = () => {
        setShowPopup(false);
    }
    return (
        <div>
            <div className="flex justify-start items-center pb-4">
                <Button label="Add Application" onClick={() => setShowPopup(true)} />
            </div>
            {showPopup && (
                <ModalView
                    title="Application Form"
                    closeModal={closeModal}
                    onSubmit={onSubmit}
                />
            )
            }
        </div >
    )
}

export default AddApplication