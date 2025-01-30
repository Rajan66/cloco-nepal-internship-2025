import { useState } from "react"
import { TApplication } from "../types/TApplication";
import { X } from "lucide-react";
import Button from "./Button";

const AddApplication = () => {
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

    return (
        <div>
            <Button label="Add Application" onClick={() => setShowPopup(true)} />
            {showPopup && (
                <div className="bg-gray-700 opacity-20 w-[100%] flex">
                    <button onClick={() => setShowPopup(false)} className="bg-white opacity-100">
                        <X className="text-red-700" />
                    </button>
                    <form className="bg-white opacity-100 fixed top-0 bottom-0 flex flex-col">
                        <div className="flex p-4 gap-4">
                            <label htmlFor="name">Name*:</label>
                            <input
                                placeholder="Enter your name"
                                onChange={handleChange}
                                name="name"
                                className="w-[350px]"
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email*:</label>
                            <input
                                placeholder="Enter your email"
                                onChange={handleChange}
                                name="email"
                            />
                        </div>

                        <div>
                            <label htmlFor="address">Address*:</label>
                            <input
                                placeholder="Enter your address"
                                onChange={handleChange}
                                name="address"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone">Phone*:</label>
                            <input
                                placeholder="Enter your phone"
                                onChange={handleChange}
                                name="phone"
                            />
                        </div>

                        <div>
                            <label htmlFor="name">IQ*:</label>
                            <input
                                placeholder="Enter your iq"
                                onChange={handleChange}
                                name="name"
                            />
                        </div>
                    </form>
                </div>
            )
            }
        </div>
    )
}

export default AddApplication