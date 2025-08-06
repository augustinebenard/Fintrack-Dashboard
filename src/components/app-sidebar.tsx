'use client';

import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { Settings, BarChart, ArrowRightLeft, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';

function SidebarContentComponent() {
  const pathname = usePathname();
  return (
    <>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Image src="/img/fintrack.svg" alt="FinTrack Logo" width={134} height={32} />
        </div>
      </SidebarHeader>
      <SidebarContent className="flex-1 px-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard" isActive={pathname === '/dashboard'}>
              <LayoutDashboard />
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton href="/transactions" isActive={pathname === '/transactions'}>
                    <ArrowRightLeft />
                    Transactions
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right" align="center">
                  Coming Soon
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton href="/reports" isActive={pathname === '/reports'}>
                    <BarChart />
                    Reports
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right" align="center">
                  Coming Soon
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton href="/settings" isActive={pathname === '/settings'}>
                    <Settings />
                    Settings
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right" align="center">
                  Coming Soon
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </>
  )
}


export function AppSidebar() {
  return (
    <div className="lg:hidden">
       <div className="flex h-full max-h-screen flex-col gap-2">
         <SidebarContentComponent />
       </div>
    </div>
   
  );
}

export function AppSidebarDesktop() {
  return (
     <Sidebar className="border-r hidden lg:flex">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <SidebarContentComponent />
      </div>
    </Sidebar>
  )
}