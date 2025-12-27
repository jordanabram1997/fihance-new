"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'

interface PageHeaderActionsClientProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function PageHeaderActionsClient({ children, className, ...props }: PageHeaderActionsClientProps) {
    return (
        <div className={cn('flex items-center', className)} {...props}>
            <div className="hidden md:flex gap-2">
                {children}
            </div>
            <div className="md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" aria-label="Actions">
                            <MoreHorizontal className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="min-w-40">
                        <div className="flex flex-col">
                            {React.Children.toArray(children).map((child, index) => (
                                <div key={index} className="p-1">
                                    {child}
                                </div>
                            ))}
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
