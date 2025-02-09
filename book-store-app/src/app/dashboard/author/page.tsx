import DataTable from '@/components/common/DataTable'
import { columns } from "@/components/dashboard/author/Columns"
import { Author } from '@/types/index'
import React from 'react'
import { getData } from '@/api/author'

const page = async () => {

  const data = await getData()
  console.log(data)

  return (
    <div>
      <DataTable<Author, string[]> columns={columns} data={data} />
    </div>
  )
}

export default page