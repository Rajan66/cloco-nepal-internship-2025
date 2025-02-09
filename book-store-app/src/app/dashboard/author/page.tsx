import DataTable from '@/components/common/DataTable'
import { columns } from "@/components/dashboard/author/Columns"
import { Author } from '@/types/index'
import React from 'react'
import { getAuthor } from '@/api/author'

const page = async () => {

  const data = await getAuthor()
  console.log(data)

  return (
    <div className="mx-auto md:mx-10 py-10 ">
      <DataTable<Author, string[]> columns={columns} data={data} />
    </div>
  )
}

export default page