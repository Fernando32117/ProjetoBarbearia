import Image from "next/image"
import { Card, CardContent } from "./card"
import { Button } from "./button"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        </Link>
        <Button size="icon" variant="outline" className="cursor-pointer">
          <MenuIcon></MenuIcon>
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
