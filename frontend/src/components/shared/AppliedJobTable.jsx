import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table.jsx';
import { Badge } from '../ui/badge';

const AppliedJobTable = () => {
  return (
    <div>
        <Table className="mb-10">
            <TableCaption>A list of your applied jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-bold text-[17px] text-gray-900">Date</TableHead>
                    <TableHead className="text-bold text-[17px] text-gray-900">Job Role</TableHead>
                    <TableHead className="text-bold text-[17px] text-gray-900">Company</TableHead>
                    <TableHead className="text-right pr-10 text-bold text-[17px] text-gray-900">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1, 2, 3].map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>17-07-2024</TableCell>
                            <TableCell>Frontend Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className="text-right"><span className='inline-block px-4 py-2 bg-[#ad38c2] text-white rounded-full text-sm'>Selected</span></TableCell>
                        </TableRow>
                    )) 
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable;