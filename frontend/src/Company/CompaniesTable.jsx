import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";   
import { Avatar,AvatarImage } from '@radix-ui/react-avatar';
import { Popover, PopoverTrigger ,PopoverContent} from '@radix-ui/react-popover';
import { MoreHorizontal } from 'lucide-react';
import { FiEdit } from 'react-icons/fi';
const CompaniesTable = () => {
  return (
    <div>
<Table>
<TableCaption>List of Companies</TableCaption>
<TableHeader>
    <TableRow>
        <TableHead>Logo</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Date</TableHead>
        <TableHead>Action</TableHead>
</TableRow>
</TableHeader>
<TableBody>
    <TableRow>
        <TableCell><Avatar>
            <AvatarImage className="w-12 h-12 rounded-4xl" src="data:image/jpeg;base64,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"></AvatarImage>
            </Avatar></TableCell>
        <TableCell>Company Name</TableCell>
        <TableCell>12-10-2023</TableCell>
        <TableCell> 
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal/>
              </PopoverTrigger>
            <PopoverContent>
                <FiEdit size={20} />
<span>Edit</span>
            </PopoverContent>
            </Popover> </TableCell>
    </TableRow>
</TableBody>
</Table>

    </div>
  )
}

export default CompaniesTable