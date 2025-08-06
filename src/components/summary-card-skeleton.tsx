import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function SummaryCardSkeleton() {
  return (
    <Card className="bg-muted border-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-1/2 mb-2" />
        <Skeleton className="h-3 w-1/4" />
      </CardContent>
    </Card>
  );
}
