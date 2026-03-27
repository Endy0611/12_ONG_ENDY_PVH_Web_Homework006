"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon, User, PackageSearch, BookOpen } from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.co  m",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "HRD SHOP",
      logo: (
        <GalleryVerticalEndIcon />
      ),
      plan: "ADMIN V2.0",
    },
    
  ],
  navMain: [
    {
      title: "Products",
      url: "/products",
      icon: (
        <PackageSearch />
      ),
      
    },
    {
      title: "Customers",
      url: "/customers",
      icon: (
        <User />
      ),
    },
    {
      title: "Categories",
      url: "/categories",
      icon: (
        <BookOpen />
      ),
    },
    {
      title: "Settings",
      url: "/profiles",
      icon: (
        <Settings2Icon />
      ),
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: (
        <FrameIcon />
      ),
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: (
        <PieChartIcon />
      ),
    },
    {
      name: "Travel",
      url: "#",
      icon: (
        <MapIcon />
      ),
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
