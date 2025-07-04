import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Search = () => {
  return (
    <>
      <div className="mt-6 flex items-center gap-2">
        <Input></Input>
        <Button>
          <SearchIcon></SearchIcon>
        </Button>
      </div>
    </>
  )
}

export default Search
;<></>
