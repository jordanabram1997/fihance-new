import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import React from 'react'
import { PageHeaderActionsClient } from './page-header-client'

type PageHeaderProps = React.HTMLAttributes<HTMLDivElement> & {};

/**
 * PageHeader is a component that wraps the page header content and actions.
 * It is used to display the page header content and actions.
 *
 * @example
 * ```tsx
 * <PageHeader>
    <PageHeaderContent>
        <PageHeaderTitle variant="Primary">{data.title}</PageHeaderTitle>
            <PageHeaderDescription>{data.description}</PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
            <Button variant="outline">{data.ctaText}</Button>
        </PageHeaderActions>
    </PageHeader>
 * ```
 */
export const PageHeader = ({ children, className, ...props }: PageHeaderProps) => {
    return (
        <div className={cn('flex gap-2 items-center justify-between w-full', className)} {...props}>
            {children}
        </div>
    )
}

type PageHeaderTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
    variant?: "Primary" | "SubHeading"
};

/**
 * PageHeaderTitle is a component that displays the page header title.
 * It is used to display the page header title.
 *
 * @param children - The content to display in the page header title.
 * @param className - The class name to apply to the page header title.
 * @param variant - The variant of the page header title. Currently supports "Primary" which is equivalent to "h1" and "SubHeading" which is equivalent to "h2".
 * @param props - The props to apply to the page header title.
 * @returns The page header title component.
 * 
 * @example
 * ```tsx
 * <PageHeaderTitle variant="Primary">Page Header Text</PageHeaderTitle>
 * ```
 */
export const PageHeaderTitle = ({ children, className, variant = "Primary", ...props }: PageHeaderTitleProps) => {
    const Tag = variant === "SubHeading" ? 'h2' : 'h1'
    const sizeClass = variant === "SubHeading" ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'
    return (
        <Tag className={cn(sizeClass, 'font-semibold text-neutral-900 dark:text-neutral-100', className)} {...props}>
            {children}
        </Tag>
    )
}

type PageHeaderDescriptionProps = React.HTMLAttributes<HTMLParagraphElement> & {};

/**
 * PageHeaderDescription is a component that displays the page header description.
 * It is used to display the page header description.
 *
 * @param children - The content to display in the page header description.
 * @param className - The class name to apply to the page header description.
 * @param props - The props to apply to the page header description.
 * @returns The page header description component.
 * 
 * @example
 * ```tsx
 * <PageHeaderDescription>Page Header Description</PageHeaderDescription>
 * ```
 */
export const PageHeaderDescription = ({ children, className, ...props }: PageHeaderDescriptionProps) => {
    return (
        <p className={cn('text-sm text-muted-foreground', className)} {...props}>
            {children}
        </p>
    )
}

type PageHeaderContentProps = React.HTMLAttributes<HTMLDivElement> & {};

/**
 * PageHeaderContent is a component that displays the page header content.
 * It is used to display the page header content.
 *
 * @param children - The content to display in the page header content.
 * @param className - The class name to apply to the page header content.
 * @param props - The props to apply to the page header content.
 * @returns The page header content component.
 * 
 * @example
 * ```tsx
 * <PageHeaderContent>
 *   <PageHeaderTitle variant="Primary">Page Header Text</PageHeaderTitle>
 *   <PageHeaderDescription>Page Header Description</PageHeaderDescription>
 * </PageHeaderContent>
 * ```
 */
export const PageHeaderContent = ({ children, className, ...props }: PageHeaderContentProps) => {
    return (
        <div className={cn('flex flex-col gap-0', className)} {...props}>
            {children}
        </div>
    )
}

type PageHeaderActionsProps = React.HTMLAttributes<HTMLDivElement> & {};

/**
 * PageHeaderActions is a component that displays the page header actions.
 * It is used to display the page header actions.
 *
 * @param children - The content to display in the page header actions.
 * @param className - The class name to apply to the page header actions.
 * @param props - The props to apply to the page header actions.
 * @returns The page header actions component.
 * 
 * @example
 * ```tsx
 * <PageHeaderActions>
 *   <Button variant="outline">Action</Button>
 * </PageHeaderActions>
 * ```
 */
export const PageHeaderActions = ({ children, className, ...props }: PageHeaderActionsProps) => {
    return (
        <PageHeaderActionsClient className={cn('gap-2', className)} {...props}>
            {children}
        </PageHeaderActionsClient>
    )
}
  
/**
 * PageHeaderSkeleton is a component that displays a skeleton loading state for the page header.
 * It is used to display a loading state for the page header.
 *
 * @returns The page header skeleton component.
 * 
 * @example
 * ```tsx
 * <PageHeaderSkeleton />
 * ```
 */
export const PageHeaderSkeleton = () => {
    return (
        <div className="flex gap-2 items-center justify-between w-full">
            <div className="flex flex-col gap-2">
                <Skeleton className="w-48 h-4" />
                <Skeleton className="w-60 h-3" />
            </div>
            <Skeleton className="w-44 h-9" />
        </div>
    )
}
