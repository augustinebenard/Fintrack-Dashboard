import { AppSidebarDesktop } from '@/components/app-sidebar';
import { Dashboard } from '@/components/dashboard';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebarDesktop />
      <Dashboard />
    </div>
  );
}
