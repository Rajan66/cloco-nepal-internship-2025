import { TTableProps } from '@/types/props/TTableProps'
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogDescription,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { EditIcon, TrashIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

// T, to make it a generic component
// T extends Record<string, any> ensures that T is always an object with string keys and values of any type.
const Table = <T extends Record<string, any>>({ isLoading, heading, datas, onDelete, editUrl }: TTableProps<T>) => {
    const router = useRouter();
    return (

        <div className="w-full text-gray-100 flex flex-col border-0 shadow-md">
            <table className='w-full text-left rounded-lg bg-neutral-600  border-0' >
                <thead>
                    <tr>
                        {heading.map((headName, index) => (
                            <th className="p-4 border-gray-200 bg-neutral-700 text-white" key={index}>
                                <p className="block font-normal">{headName}</p>
                            </th>
                        ))}
                        {editUrl ? (
                            <th className="p-4 border-gray-200 bg-neutral-700 text-white" >
                                <p className="block font-normal">Actions</p>
                            </th>
                        ) : (<th></th>)}
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan={6} className="p-4 text-center">Loading...</td>
                        </tr>
                    ) : datas?.length > 0 ? (
                        datas?.map((item: T, index: number) => (
                            <tr key={index}>
                                {Object.entries(item).map(([key, value], colIndex) => (
                                    <td key={colIndex} className="p-4 border-neutral-600 border">
                                        <p className={`block font-normal text-white ${key === "essay" ? "truncate max-w-xs" : ""}`}>
                                            {String(value)}
                                        </p>
                                    </td>
                                ))}


                                {editUrl ? (
                                    <td className="p-4 border-gray-200">
                                        <div className="flex font-normal text-gray-900 gap-2">
                                            <span className="bg-blue-600 p-2 rounded-md cursor-pointer">
                                                {/* replace index with id */}
                                                <EditIcon className="text-white" onClick={() => router.push(`/${editUrl}/${index}`)} />
                                            </span>
                                            <span className="bg-red-600 p-2 rounded-md cursor-pointer">
                                                <AlertDialog>
                                                    <AlertDialogTrigger>
                                                        <TrashIcon
                                                            className="text-white"
                                                        />
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This will permanently delete the application.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => onDelete ? onDelete(index) : null}>Continue</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </span>
                                        </div>
                                    </td>
                                ) : (
                                    <div></div>
                                )}

                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="p-4 text-center text-red-400 font-semibold">
                                No datas found....
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table