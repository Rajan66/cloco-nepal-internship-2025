"use client"
import DataTable from '@/components/common/DataTable'
import { columns } from "@/components/dashboard/book/Columns"
import { Book } from '@/types/index'
import React, { useEffect } from 'react'
import { useGetBooks } from '@/hooks/bookQueries'
import { Loader2Icon } from 'lucide-react'

const page = () => {

  const { data: books, isLoading } = useGetBooks();

  return (
    <div className="mx-auto md:mx-10 py-10 ">
      {!isLoading ? (
        <DataTable<Book, string[]> columns={columns} data={books ?? []} isLoading={isLoading} />
      ) : (
        <div className='flex justify-center items-center'>
          <Loader2Icon className='text-blue-600' />
        </div>
      )}
    </div>
  )
}

export default page