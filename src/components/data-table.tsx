
'use client';

import { useState, useMemo, type ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ColumnDef<TData> {
  accessorKey: keyof TData;
  header: ReactNode;
  cell?: ({ row }: { row: { original: TData } }) => ReactNode;
  enableSorting?: boolean;
  headerClassName?: string;
  cellClassName?: string;
}

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  initialSort?: {
    key: keyof TData;
    direction: 'ascending' | 'descending';
  };
}

export function DataTable<TData>({
  columns,
  data,
  initialSort,
}: DataTableProps<TData>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof TData;
    direction: 'ascending' | 'descending';
  } | null>(initialSort || null);

  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];

        if (valA < valB) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (valA > valB) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key: keyof TData) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const SortableHeader = ({
    sortKey,
    children,
    className,
  }: {
    sortKey: keyof TData;
    children: ReactNode;
    className?: string;
  }) => (
    <Button
      variant="ghost"
      onClick={() => requestSort(sortKey)}
      className={cn("p-0 hover:bg-transparent hover:text-primary ", className)}
    >
      {children}
      {sortConfig?.key === sortKey ? (
        sortConfig.direction === 'ascending' ? (
          <ArrowUp className="ml-2 h-4 w-4" />
        ) : (
          <ArrowDown className="ml-2 h-4 w-4" />
        )
      ) : (
        <ArrowUpDown className="ml-2 h-4 w-4" />
      )}
    </Button>
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index} className={column.headerClassName}>
              {column.enableSorting ? (
                <SortableHeader sortKey={column.accessorKey}>
                  {column.header}
                </SortableHeader>
              ) : (
                column.header
              )}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.length > 0 ? (
          sortedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex} className={column.cellClassName}>
                  {column.cell
                    ? column.cell({ row: { original: row } })
                    : (row[column.accessorKey] as ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
