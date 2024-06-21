import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

export default function Table({
    actions,
}) {
    const table = useReactTable({
        columns,
        data: orderList,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <>
            {/* TABLE */}
            <table>
                {/* TABLE HEADER  */}
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
                            {/* TABLE ACTIONS COLUMNS  */}
                            {actions && <th>Action</th>}
                        </tr>
                    ))}
                </thead>
                {/* TABLE BODY  */}
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}

                            {/* TABLE ACTIONS BUTTONS  */}
                            {actions &&
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => console.log(row.original)}
                                    >Edit
                                    </button>
                                    <button
                                        onClick={() => console.log(row.original)}
                                    >Delete
                                    </button>
                                </td>}
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
        </>
    )
}
