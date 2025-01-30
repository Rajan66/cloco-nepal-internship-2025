import { EditIcon, TrashIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { TApplication } from '../types/TApplication';

const TodoTable = (applications: TApplication) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

    }, [])

    // TODO  make isLoading and handle empty table

    return (
        <div className="relative w-full h-full text-gray-700 
                flex flex-col bg-white rounded-xl shadow-md">
            <table className='w-full min-w-max text-left table-auto'>
                <thead>
                    <tr>
                        <th className="p-4 bo border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">
                                Name
                            </p>
                        </th>
                        <th className="p-4 bo border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">
                                Email
                            </p>
                        </th>
                        <th className="p-4 bo border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">
                                Address
                            </p>
                        </th>
                        <th className="p-4 bo border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">
                                Phone
                            </p>
                        </th>
                        <th className="p-4 bo border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">
                                IQ
                            </p>
                        </th>
                        <th className="p-4 bo border-gray-200 bg-gray-100">
                            <p className="block font-normal text-gray-900 opacity-80">
                                Actions
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4 bo border-gray-200 ">
                            <p className="block font-normal text-gray-900">
                                Rajan Maharjan
                            </p>
                        </td>
                        <td className="p-4 bo border-gray-200 ">
                            <p className="block font-normal text-gray-900">
                                rajanmaharjan042@gmail.com
                            </p>
                        </td>
                        <td className="p-4 bo border-gray-200 ">
                            <p className="block font-normal text-gray-900">
                                Mhepi
                            </p>
                        </td>
                        <td className="p-4 bo border-gray-200 ">
                            <p className="block font-normal text-gray-900">
                                9810350199
                            </p>
                        </td>
                        <td className="p-4 bo border-gray-200 ">
                            <p className="block font-normal text-gray-900">
                                123
                            </p>
                        </td>
                        <td className="p-4 bo border-gray-200 ">
                            <div className="flex font-normal text-gray-900 gap-2">
                                <span className="bg-blue-600 p-1.5 rounded-md"><EditIcon className="text-white" /></span>
                                <span className="bg-red-600 p-1.5 rounded-md"><TrashIcon className="text-white" /></span>
                            </div>
                        </td>
                    </tr>

                </tbody>
                <tfoot>pagination</tfoot>
            </table >
        </div >
    )
}

export default TodoTable