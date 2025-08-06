
'use client';

import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SummaryCard } from '@/components/summary-card';
import { TransactionTable } from '@/components/transaction-table';
import { dashboardSummaryData, sampleTransactions } from '@/lib/data';
import { DashboardHeader } from './dashboard-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { SummaryCardSkeleton } from './summary-card-skeleton';
import { TransactionTableSkeleton } from './transaction-table-skeleton';

export function Dashboard() {
  const [loading, setLoading] = useState(true);
  const summary = dashboardSummaryData;
  const transactions = sampleTransactions;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 overflow-auto">
        <DashboardHeader />
        <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {loading ? (
                        <>
                            <SummaryCardSkeleton />
                            <SummaryCardSkeleton />
                            <SummaryCardSkeleton />
                            <SummaryCardSkeleton />
                        </>
                    ) : (
                        <>
                            <SummaryCard
                                title="Total Balance"
                                value={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(summary.totalBalance)}
                                change={summary.balanceChange}
                            />
                            <SummaryCard
                                title="Total Credits"
                                value={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(summary.totalCredits)}
                                change={summary.creditsChange}
                            />
                            <SummaryCard
                                title="Total Debits"
                                value={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(summary.totalDebits)}
                                change={summary.debitsChange}
                            />
                            <SummaryCard
                                title="Transactions"
                                value={summary.transactionCount.toString()}
                                change={summary.transactionChange}
                            />
                        </>
                    )}
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                            <CardDescription>A list of your recent wallet activities.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {loading ? <TransactionTableSkeleton /> : <TransactionTable transactions={transactions.slice(0, 5)} />}
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
            <TabsContent value="transactions">
                <Card>
                    <CardHeader>
                        <CardTitle>All Transactions</CardTitle>
                        <CardDescription>A complete list of your wallet activities.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         {loading ? <TransactionTableSkeleton /> : <TransactionTable transactions={transactions} />}
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </main>
  );
}
