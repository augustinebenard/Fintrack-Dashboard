import { AppSidebarDesktop } from '@/components/app-sidebar';
import { ComingSoon } from '@/components/coming-soon';

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <AppSidebarDesktop />
      <ComingSoon />
    </div>
  );
}
