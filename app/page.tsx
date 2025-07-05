import BarberShopItem from "@/components/barberShop-item"
import BookingItem from "@/components/booking-item"
import Search from "@/components/search"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { db } from "@/lib/prisma"
import Image from "next/image"

interface QuickSearchOption {
  imageUrl: string
  title: string
}

export const quickSearchOptions: QuickSearchOption[] = [
  {
    imageUrl: "/cabelo.svg",
    title: "Cabelo",
  },
  {
    imageUrl: "/barba.svg",
    title: "Barba",
  },
  {
    imageUrl: "/acabamento.svg",
    title: "Acabamento",
  },
  {
    imageUrl: "/massagem.svg",
    title: "Massagem",
  },
  {
    imageUrl: "/sobrancelha.svg",
    title: "Sobrancelha",
  },
  {
    imageUrl: "/hidratacao.svg",
    title: "Hidratação",
  },
]

const Home = async () => {
  const barbershop = await db.barbershop.findMany({})
  const popularBarberShops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header></Header>
      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Francisco !</h2>
        <p>Quinta-feira, 03 de Julho </p>

        <Search></Search>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
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

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores !"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <BookingItem></BookingItem>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarberShopItem
              key={barbershop.id}
              barbershop={barbershop}
            ></BarberShopItem>
          ))}
        </div>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Populares
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {popularBarberShops.map((barbershop) => (
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
