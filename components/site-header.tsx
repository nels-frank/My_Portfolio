"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Bell,
  Menu,
  Users,
  GraduationCap,
  ClipboardCheck,
  CreditCard,
  Laptop,
  BookOpen,
  UserCheck,
  Bus,
  MessageSquare,
  BarChart3,
  House,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Information System",
    description: "Complete student lifecycle management including admission, biodata, class history, and academic records.",
    href: "/features/student-information-system",
  },
  {
    icon: GraduationCap,
    title: "Academic & Curriculum Management",
    description: "Manage subjects, departments, class structure, grading system, and automated result computation.",
    href: "/features/academic-management",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance Management",
    description: "Digital attendance tracking for students and staff with daily, termly, and yearly reports.",
    href: "/features/attendance-management",
  },
  {
    icon: CreditCard,
    title: "Fees & Billing System",
    description: "Invoice generation, online payments, installment tracking, and automated financial reporting.",
    href: "/features/fees-billing",
  },
  {
    icon: Laptop,
    title: "CBT & Online Examination",
    description: "Computer-based testing system with question banks, auto-grading, and instant result publishing.",
    href: "/features/cbt-exams",
  },
  {
    icon: BookOpen,
    title: "Library Management",
    description: "Track book inventory, borrowing, returns, overdue fines, and digital library records.",
    href: "/features/library-management",
  },
  {
    icon: UserCheck,
    title: "HR & Payroll Management",
    description: "Manage staff records, payroll processing, leave requests, and performance evaluation.",
    href: "/features/hr-payroll",
  },
  {
    icon: Bus,
    title: "Transport Management",
    description: "Manage school buses, routes, driver assignments, and student transport tracking.",
    href: "/features/transport-management",
  },
  {
    icon: House,
    title: "Hostel Management",
    description: "Room allocation, hostel fees tracking, visitor logs, and hostel attendance monitoring.",
    href: "/features/hostel-management",
  },
  {
    icon: MessageSquare,
    title: "Parent & Student Portal",
    description: "Dedicated portal for parents and students to view results, fees status, attendance, and announcements.",
    href: "/features/parent-student-portal",
  },
  {
    icon: Bell,
    title: "Communication & Notifications",
    description: "SMS, email, and in-app notifications for announcements, reminders, and emergency alerts.",
    href: "/features/communication",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards and detailed academic, financial, and operational reports.",
    href: "/features/analytics-reporting",
  },
  
];

export default function SiteHeader() {
const [open, setOpen] = React.useState(false);
const [showFeatures, setShowFeatures] = React.useState(false);
const menuItems: readonly [string, string][] = [
  
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Experiences", "/experiences"],
  ["Education", "/education"],
  ["Services", "/services"],
  ["Contact", "/contact"],
]
return (
  <div className="bg-slate-50 px-[13px] md:px-[21px] lg:px-10">
  <header className="fixed inset-x-[13px] top-3 z-50 rounded-md backdrop-blur md:inset-x-[21px] md:top-4 lg:left-10 lg:right-5">
    <div className="flex items-center justify-end gap-4 px-2 md:gap-6 md:px-3 lg:gap-10 lg:px-10">
    {/* Desktop Navigation */}
    <div>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-1 md:gap-2 lg:gap-3">

          <NavigationMenuItem >
            <NavigationMenuLink asChild className="rounded-md bg-gray-200 px-3 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-purple-800 hover:text-white lg:px-4">
              <Link href="/">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
              <NavigationMenuLink asChild className="rounded-md bg-gray-200 px-3 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-purple-800 hover:text-white lg:px-4">
                <Link href="/about">
                About
                </Link>
              </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
              <NavigationMenuLink asChild className="rounded-md bg-gray-200 px-3 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-purple-800 hover:text-white lg:px-4">
                <Link href="/skills">
                Skills
                </Link>
              </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="rounded-md bg-gray-200 px-3 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-purple-800 hover:text-white lg:px-4">
            <Link href="/projects">
                Project
                </Link>
              </NavigationMenuLink>           
          </NavigationMenuItem>

          <NavigationMenuItem>
             <NavigationMenuLink asChild className="rounded-md bg-gray-200 px-3 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-purple-800 hover:text-white lg:px-4">
            <Link href="/experiences">
                Experiences
              </Link>
              </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
              <NavigationMenuLink asChild className="rounded-md bg-gray-200 px-3 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-purple-800 hover:text-white lg:px-4">
                <Link href="/education">
                Education
                </Link>
              </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink asChild className="rounded-md bg-gray-200 px-3 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-purple-800 hover:text-white lg:px-4">
                <Link href="/services">
                Services
                </Link>
              </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink asChild className="rounded-md bg-gray-200 px-3 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-purple-800 hover:text-white lg:px-4">
                <Link href="/contact">
                Contact
                </Link>
              </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

    {/* Mobile Menu */}
    <div className="flex items-center justify-start gap-4 px-2 md:gap-6 md:px-3 lg:justify-end lg:gap-10 lg:px-10">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            className="h-10 w-10 rounded-md bg-gray-200 text-gray-900 hover:bg-purple-800 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
        side="left"
        className="!inset-y-auto !top-3 !bottom-auto !h-auto !w-fit !max-w-[calc(100vw-26px)] border-purple-300/40 bg-purple-950/90 px-2 py-3 text-white shadow-2xl backdrop-blur-xl"
      >
          <SheetHeader className="p-1">
            <SheetTitle className="text-lg text-white font-bold">Menu</SheetTitle>
          </SheetHeader>

      <nav className="mt-2 flex w-fit flex-col gap-0.5">
      {menuItems.map(([label, href]) => (
        <Link
          key={href}
          href={href}
          onClick={() => setOpen(false)}
          className="block whitespace-nowrap rounded-md px-3 py-2 text-left text-lg font-bold text-white transition-colors hover:bg-purple-700/80"
        >
          {label}
        </Link>
      ))}
    </nav>
   </SheetContent>
        
      </Sheet>
    </div>
  </div>
</header>
</div>
  );
}
