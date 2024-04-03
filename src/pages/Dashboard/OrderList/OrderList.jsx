import React from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import DnaLoader from "../../Shared/Loader/DnaLoader/DnaLoader";
import {
     createColumnHelper,
     flexRender,
     getCoreRowModel,
     useReactTable,
} from '@tanstack/react-table'


export const getOrderList = () => ({
     queryKey: ["orderList"],
     queryFn: async () => {
          const { data } = await axios.get(`/order-list`, {
               headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
               }
          });
          return data;
     }
});

const OrderList = () => {
     const { data: orderList = [], isLoading } = useQuery(getOrderList());

     const columnHelper = createColumnHelper();

     const columns = [
          columnHelper.accessor('customer_name', {
               header: () => 'Name',
               cell: info => info.getValue(),
               footer: info => info.column.id,
          }),
          columnHelper.accessor('email', {
               header: () => 'Email',
               cell: info => info.renderValue(),
               footer: info => info.column.id,
          }),
          columnHelper.accessor('status', {
               header: () => <span>Status</span>,
               footer: info => info.column.id,
          }),
          columnHelper.accessor('payment', {
               header: 'Payment',
               footer: info => info.column.id,
          }),
     ]


     const table = useReactTable({
          columns,
          data: orderList,
          getCoreRowModel: getCoreRowModel(),
     })
     if (isLoading) {
          return <DnaLoader />;
     }

     return (
          <div className="p-2">
               <table>
                    <thead>
                         {table.getHeaderGroups().map(headerGroup => (
                              <tr key={headerGroup.id}>
                                   {headerGroup.headers.map(header => (
                                        <th key={header.id}>
                                             {header.isPlaceholder
                                                  ? null
                                                  : flexRender(
                                                       header.column.columnDef.header,
                                                       header.getContext()
                                                  )}
                                        </th>
                                   ))}
                              </tr>
                         ))}
                    </thead>
                    <tbody>
                         {table.getRowModel().rows.map(row => (
                              <tr key={row.id}>
                                   {row.getVisibleCells().map(cell => (
                                        <td key={cell.id}>
                                             {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                   ))}
                              </tr>
                         ))}
                    </tbody>
                    {/* <tfoot>
                         {table.getFooterGroups().map(footerGroup => (
                              <tr key={footerGroup.id}>
                                   {footerGroup.headers.map(header => (
                                        <th key={header.id}>
                                             {header.isPlaceholder
                                                  ? null
                                                  : flexRender(
                                                       header.column.columnDef.footer,
                                                       header.getContext()
                                                  )}
                                        </th>
                                   ))}
                              </tr>
                         ))}
                    </tfoot> */}
               </table>
          </div>
     )
}

export default OrderList;
