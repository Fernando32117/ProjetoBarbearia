import { Card, CardContent } from "./card"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "./button"
import Image from "next/image"
import { ThemeSwitcher } from "./theme-switcher"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"
import { quickSearchOptions } from "@/app/_constants/search"
import { Avatar, AvatarImage } from "./avatar"

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
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="flex items-center gap-3 border-b border-solid px-4 py-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <p className="font-bold">Fernando</p>
                  <p className="text-xs">fernando@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                <SheetClose asChild>
                  <Link href="/" passHref>
                    <Button className="justify-start gap-2" variant="ghost">
                      <HomeIcon size={18} />
                      Início
                    </Button>
                  </Link>
                </SheetClose>
                <Link href="/bookings" passHref>
                  <Button className="justify-start gap-2" variant="ghost">
                    <CalendarIcon size={18} />
                    Agendamentos
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                {quickSearchOptions.map((option) => (
                  <Button
                    key={option.title}
                    className="justify-start gap-2"
                    variant="ghost"
                  >
                    <Image
                      src={option.imageUrl}
                      width={16}
                      height={16}
                      alt={option.title}
                    />
                    {option.title}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-2 py-5">
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  //onClick={handleLogoutClick}
                >
                  <LogOutIcon size={18} />
                  Sair da conta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
