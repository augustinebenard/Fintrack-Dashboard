
'use client';

import type { Transaction } from '@/lib/types';
import { DataTable, type ColumnDef } from '@/components/data-table';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';

interface TransactionTableProps {
  transactions: Transaction[];
}

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => format(new Date(row.original.date), 'yyyy-MM-dd'),
    enableSorting: true,
  },
  {
    accessorKey: 'remark',
    header: 'Remark',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    headerClassName: 'text-right',
    cell: ({ row }) => {
      const { type, amount, currency } = row.original;
      const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
      }).format(Math.abs(amount));
      const sign = type === 'Credit' ? '+' : '-';
      const textColor = type === 'Credit' ? 'text-green-500' : 'text-red-500';
      return (
        <div className={`text-right font-semibold ${textColor}`}>
          {sign}
          {formattedAmount}
        </div>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: 'currency',
    header: 'Currency',
    headerClassName: 'hidden md:table-cell',
    cellClassName: 'hidden md:table-cell',
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => {
      const type = row.original.type;
      const variant = type === 'Credit' ? 'default' : 'destructive';
       return (
          <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium">
            <span className={`h-2 w-2 rounded-full ${type === 'Credit' ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span>{type}</span>
          </div>
        );
    },
  },
];

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <DataTable
        columns={columns}
        data={transactions}
        initialSort={{ key: 'date', direction: 'descending' }}
      />
    </div>
  );
}
