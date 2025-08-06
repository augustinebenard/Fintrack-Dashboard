import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export function TransactionTableSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead><Skeleton className="h-5 w-20" /></TableHead>
                    <TableHead><Skeleton className="h-5 w-40" /></TableHead>
                    <TableHead className="text-right"><Skeleton className="h-5 w-24 ml-auto" /></TableHead>
                    <TableHead className="hidden md:table-cell"><Skeleton className="h-5 w-16" /></TableHead>
                    <TableHead><Skeleton className="h-5 w-24" /></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Array.from({ length: 5 }).map((_, index) => (
                    <TableRow key={index}>
                        <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                        <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                        <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                        <TableCell className="hidden md:table-cell"><Skeleton className="h-5 w-full" /></TableCell>
                        <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
}
