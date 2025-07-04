import BarberShopItem from "@/components/barberShop-item"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/ui/header"
import { Input } from "@/components/ui/input"
import { db } from "@/lib/prisma"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = async () => {
  const barbershop = await db.barbershop.findMany({})
  console.log({ barbershop })

  return (
    <div>
      <Header></Header>
      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Francisco !</h2>
        <p>Quinta-feira, 03 de Julho </p>

        <div className="mt-6 flex items-center gap-2">
          <Input></Input>
          <Button>
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores !"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Agendamentos
        </h2>

        <Card className="p-0">
          <CardContent className="flex justify-between">
            <div className="flex flex-col gap-2 py-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia Luna</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid pl-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20h00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Agendamentos
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarberShopItem
              key={barbershop.id}
              barbershop={barbershop}
            ></BarberShopItem>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
