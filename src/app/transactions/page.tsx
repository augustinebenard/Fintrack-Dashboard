import { AppSidebarDesktop } from '@/components/app-sidebar';
import { ComingSoon } from '@/components/coming-soon';

export default function TransactionsPage() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <AppSidebarDesktop />
      <ComingSoon />
    </div>
  );
}
