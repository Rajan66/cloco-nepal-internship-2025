import { EditIcon, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { TApplication } from '../types/TApplication';
import EditApplication from "./EditApplication";

type TodoProps = {
    applications: TApplication[];
    setApplications: any; // required to update the applications
};

const TodoTable = ({ applications, setApplications }: TodoProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [applicationToEdit, setApplicationToEdit] = useState<TApplication>();

    const handleFormSubmit = (data: TApplication) => {
        setApplications((prevApps: TApplication[]) => (
            prevApps.map((app) =>
                app.email === data.email ? { ...app, ...data } : app // shallow copy, data overrides the existing fields in the app
            )
        ));
    };

    useEffect(() => {
        setIsLoading(false); // useful when fetching data from api
    }, [applications]); // watch the applications, and change the loading state 

    const deleteApplication = (index: number) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this application?");
        if (isConfirmed) {
            setApplications(applications.filter((application, i) => i !== index));
            // create a new array and put item if the current item doesn't equal to the delete index
        }
    };

    const closeModal = () => {
        setShowPopup(false);
    };

    const openModalForEdit = (application: TApplication) => {
        setApplicationToEdit(application); // set the application to send as a prop to the edit
        setShowPopup(true);
    };

    return (
        <div className="w-full h-full text-gray-700 flex flex-col bg-white rounded-xl shadow-md static">
            <table className='w-full text-left'>
                <thead>
                    <tr>
                        <th className="p-4 border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">Name</p>
                        </th>
                        <th className="p-4 border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">Email</p>
                        </th>
                        <th className="p-4 border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">Address</p>
                        </th>
                        <th className="p-4 border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">Phone</p>
                        </th>
                        <th className="p-4 border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">IQ</p>
                        </th>
                        <th className="p-4 border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">Actions</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan={6} className="p-4 text-center">Loading...</td>
                        </tr>
                    ) : applications.length > 0 ? (
                        applications.map((application, index) => (
                            <tr key={index}>
                                <td className="p-4 border-gray-200">
                                    <p className="block font-normal text-gray-900">{application.name}</p>
                                </td>
                                <td className="p-4 border-gray-200">
                                    <p className="block font-normal text-gray-900">{application.email}</p>
                                </td>
                                <td className="p-4 border-gray-200">
                                    <p className="block font-normal text-gray-900">{application.address}</p>
                                </td>
                                <td className="p-4 border-gray-200">
                                    <p className="block font-normal text-gray-900">{application.phone}</p>
                                </td>
                                <td className="p-4 border-gray-200">
                                    <p className="block font-normal text-gray-900">{application.iq}</p>
                                </td>
                                <td className="p-4 border-gray-200">
                                    <div className="flex font-normal text-gray-900 gap-2">
                                        <span className="bg-blue-600 p-1.5 rounded-md">
                                            <EditIcon className="text-white" onClick={() => openModalForEdit(application)} />
                                        </span>
                                        <span className="bg-red-600 p-1.5 rounded-md">
                                            <TrashIcon
                                                className="text-white"
                                                onClick={() => deleteApplication(index)} // Pass index to delete
                                            />
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="p-4 text-center text-red-400 font-semibold">
                                No applications found....
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {showPopup && applicationToEdit && (
                <EditApplication closeModal={closeModal} application={applicationToEdit} onSubmit={handleFormSubmit} />
            )}
        </div>
    );
};

export default TodoTable;
