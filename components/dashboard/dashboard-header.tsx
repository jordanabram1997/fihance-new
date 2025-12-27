import { Separator } from '../ui/separator'
import { SidebarTrigger } from '../ui/sidebar'

type DashboardHeaderProps = {
  title?: string;
  actions?: React.ReactNode;
};

const DashboardHeader = ({ title = "", actions }: DashboardHeaderProps) => {
  return (
  <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
    <SidebarTrigger aria-label="Toggle sidebar" />
    <Separator orientation="vertical" className="mx-2 h-6" />
    <h1 className="text-base font-medium">{title}</h1>
    {actions && <div className="ml-auto flex items-center">{actions}</div>}
  </header>
  )
}

export default DashboardHeader