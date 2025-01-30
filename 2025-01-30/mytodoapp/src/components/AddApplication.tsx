import { useState } from "react"
import { TApplication } from "../types/TApplication";
import { X } from "lucide-react";
import Button from "./Button";

type AddApplicationProps = {
    onSubmit: (data: TApplication) => void
}
const AddApplication = ({ onSubmit }: AddApplicationProps) => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [formData, setFormData] = useState<TApplication>({
        name: '',
        email: '',
        address: '',
        phone: '',
        iq: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData, // spread the form data
            [e.target.name]: e.target.value // update the respective field
        })
    }
    const closeModal = () => {
        setShowPopup(false);
    }
    const submitForm = () => {
        onSubmit(formData); // child sends event to parent 
        setShowPopup(false);
    }

    return (
        <div>
            <div className="flex justify-start items-center pb-4">
                <Button label="Add Application" onClick={() => setShowPopup(true)} />
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Application Form</h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
                                <X className="w-6 h-6 text-red-600" />
                            </button>
                        </div>

                        <form className="flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <label htmlFor="name" className="w-16">Name*:</label>
                                <input
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                    name="name"
                                    className="w-[350px] border p-2 rounded-md !bg-white"
                                />
                            </div>

                            <div className="flex gap-4 items-center">
                                <label htmlFor="email" className="w-16">Email*:</label>
                                <input
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                    name="email"
                                    className="w-[350px] border p-2 rounded-md"
                                />
                            </div>


                            <div className="flex gap-4 items-center">
                                <label htmlFor="address" className="w-16">Address*:</label>
                                <input
                                    placeholder="Enter your address"
                                    onChange={handleChange}
                                    name="address"
                                    className="w-[350px] border p-2 rounded-md"
                                />
                            </div>

                            <div className="flex gap-4 items-center">
                                <label htmlFor="phone" className="w-16">Phone*:</label>
                                <input
                                    placeholder="Enter your phone"
                                    onChange={handleChange}
                                    name="phone"
                                    className="w-[350px] border p-2 rounded-md"
                                />
                            </div>

                            <div className="flex gap-4 items-center">
                                <label htmlFor="iq" className="w-16">IQ*:</label>
                                <input
                                    placeholder="Enter your iq"
                                    onChange={handleChange}
                                    name="iq"
                                    className="w-[350px] border p-2 rounded-md"
                                />
                            </div>
                            <Button label="Submit" onClick={submitForm} />
                        </form>
                    </div>
                </div >
            )
            }
        </div >
    )
}

export default AddApplication