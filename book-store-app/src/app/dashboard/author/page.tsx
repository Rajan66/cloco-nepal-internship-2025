import React from 'react'
import DataTable from '@/components/common/DataTable'
import { columns } from "@/components/dashboard/author/Columns"
import { useGetAuthor } from '@/hooks/authorQueries'
import { Author } from '@/types/index'

const page = async () => {

  const { data, isLoading } = useGetAuthor();
  console.log(data)

  return (
    <div className="mx-auto md:mx-10 py-10 ">
      <DataTable<Author, string[]> columns={columns} data={data ?? []} isLoading={isLoading} />
    </div>
  )
}

export default page