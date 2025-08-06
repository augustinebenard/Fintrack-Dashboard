import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string;
  change: number;
}

export function SummaryCard({ title, value, change }: SummaryCardProps) {
  const isPositive = change >= 0;
  return (
    <Card className="bg-muted border-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Button variant="ghost" size="icon" className="h-6 w-6">
            <MoreHorizontal className="h-4 w-4 text-muted-foreground hover:text-white" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change}%
        </p>
      </CardContent>
    </Card>
  );
}
