import { Card, CardContent } from "./card"
import { MenuIcon } from "lucide-react"
import { Button } from "./button"
import Image from "next/image"
import { ThemeSwitcher } from "./theme-switcher"
import { Sheet, SheetTrigger } from "./sheet"
import SidebarSheet from "../sidebar-sheet"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet></SidebarSheet>
          </Sheet>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
