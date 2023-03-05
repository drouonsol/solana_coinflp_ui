import { Card } from "./Card"
import { FC, useEffect, useState } from "react"
import {
  Button,
  Center,
  HStack,
  Input,
  Spacer,
  Heading,
} from "@chakra-ui/react"
import { useWorkspace } from "../context/Anchor"
import { useWallet } from "@solana/wallet-adapter-react"
import { useDisclosure } from "@chakra-ui/react"
import { ReviewDetail } from "./ReviewDetail"

export const MovieList: FC = () => {
  const { program } = useWorkspace()
  const [movies, setMovies] = useState<any | null>(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [result, setResult] = useState<any | null>(null)
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const wallet = useWallet()

  const fetchMyReviews = async () => {}

  const fetchAccounts = async () => {}

  useEffect(() => {
    fetchAccounts()
  }, [])

  useEffect(() => {
    if (movies && search != "") {
      const filtered = movies.filter((movie: any) => {
        return movie.account.title
          .toLowerCase()
          .startsWith(search.toLowerCase())
      })
      setResult(filtered)
    }
  }, [search])

  useEffect(() => {
    if (movies && search == "") {
      const filtered = movies.slice((page - 1) * 3, page * 3)
      setResult(filtered)
    }
  }, [page, movies, search])

  const handleReviewSelected = (data: any) => {
    setSelectedMovie(data)
    onOpen()
  }

  return (
    <div>
      <Center>

      </Center>
    </div>
  )
}
