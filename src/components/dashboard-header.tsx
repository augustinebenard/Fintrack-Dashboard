
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  ChevronDown,
  Grid3x3,
  Menu,
  MoreHorizontal,
  Search,
  Share2,
} from 'lucide-react';
import { AppSidebar } from './app-sidebar';

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <SheetHeader className="p-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <AppSidebar />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 ml-auto">
          <Button variant="ghost" size="icon">
            <Search className="h-8 w-8" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Grid3x3 className="h-8 w-8" />
            <span className="sr-only">Apps</span>
          </Button>
          <Avatar>
            <AvatarImage
              src="/img/profile-img.svg"
              alt="User"
              data-ai-hint="user avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-2xl md:text-4xl font-bold p-0 h-auto"
                >
                  Wallet Ledger
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Personal</DropdownMenuItem>
                <DropdownMenuItem>Business</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500/75 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Active
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center -space-x-2">
              <Avatar className="h-10 w-10 border-2 border-background">
                <AvatarImage src="/img/profile-img.svg" alt="User" data-ai-hint="woman glasses" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10 border-2 border-background">
                <AvatarImage src="/img/user-1.svg" alt="User" data-ai-hint="woman smiling" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10 border-2 border-background">
                <AvatarImage src="/img/user-2.svg" alt="User" data-ai-hint="woman blue shirt" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10 border-2 border-background">
                <AvatarImage src="/img/user-3.svg" alt="User" data-ai-hint="man tablet" />
                <AvatarFallback>O</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Ava, Liam, Noah +12 others
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button>
            <Share2 />
            Share
          </Button>
          <Button variant="outline" size="icon">
            <MoreHorizontal className="h-5 w-5" />
            <span className="sr-only">More options</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
