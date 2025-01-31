import { TApplication } from '../../types/TApplication';
import { X } from 'lucide-react';
import Button from './Button';
import { useEffect, useState } from 'react';

type FormProps = {
    title: string
    closeModal: () => void;
    onSubmit: (formData: TApplication) => void;
    application?: TApplication;
    setShowPopup?: (flag: boolean) => void;
}

const ModalView = ({ title, closeModal, application, onSubmit }: FormProps) => {

    const [formData, setFormData] = useState<TApplication>({
        name: application?.name || '',
        email: application?.email || '',
        address: application?.address || '',
        phone: application?.phone || '',
        iq: application?.iq || '',
    });

    // useEffect(() => {
    //     if (title === "Edit Application") {
    //         setFormData(application!);
    //     }
    //     console.log(formData)
    // }, [application]);

    const submitForm = () => {
        onSubmit(formData); // childFormProps sends event to parent 
        closeModal();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData, // spread the form data
            [e.target.name]: e.target.value // update the respective field
        })
    }

    return (
        <div className="fixed inset-0 bg-black opacity-60 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
                        <X className="w-6 h-6 text-red-600" />
                    </button>
                </div>

                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex gap-4 items-center">
                        <label htmlFor="name" className="w-16">Name*:</label>
                        <input
                            placeholder="Enter your name"
                            onChange={handleChange}
                            name="name"
                            value={formData.name}
                            className="w-[350px] border p-2 rounded-md"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <label htmlFor="email" className="w-16">Email*:</label>
                        <input
                            placeholder="Enter your email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            className="w-[350px] border p-2 rounded-md"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <label htmlFor="address" className="w-16">Address*:</label>
                        <input
                            placeholder="Enter your address"
                            onChange={handleChange}
                            name="address"
                            value={formData.address}
                            className="w-[350px] border p-2 rounded-md"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <label htmlFor="phone" className="w-16">Phone*:</label>
                        <input
                            placeholder="Enter your phone"
                            onChange={handleChange}
                            name="phone"
                            value={formData.phone}
                            className="w-[350px] border p-2 rounded-md"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <label htmlFor="iq" className="w-16">IQ*:</label>
                        <input
                            placeholder="Enter your iq"
                            onChange={handleChange}
                            name="iq"
                            value={formData.iq}
                            className="w-[350px] border p-2 rounded-md"
                        />
                    </div>

                    <Button label="Submit" onClick={submitForm} />
                </form>
            </div>
        </div>
    )
}

export default ModalView