import { Card, CardContent } from "./card"
import { MenuIcon } from "lucide-react"
import { Button } from "./button"
import Image from "next/image"
import { ThemeSwitcher } from "./theme-switcher"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button variant="outline" size="icon" className="h-8 w-8">
            <MenuIcon size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
