import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { TooltipProvider } from '@/components/ui/tooltip'
import { WelcomeBanner } from '@/components/welcome-message'
import React, { ReactNode } from 'react'

export default function FrontLayout({ children }: {
    children: ReactNode }) {
      return (
      <div>
        <SiteHeader />
        <TooltipProvider>
        {children}
        </TooltipProvider>
        <SiteFooter />
        </div>
      )
}