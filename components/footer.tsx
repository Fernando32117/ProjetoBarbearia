import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <>
      <footer>
        <Card className="rounded-none">
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Copyright{" "}
              <span className="font-bold">Fernando</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </>
  )
}

export default Footer
