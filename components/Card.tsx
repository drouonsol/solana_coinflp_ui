import { Box, HStack, Spacer, Stack, Text } from "@chakra-ui/react"
import { FC } from "react"

export interface CardProps {
  movie: any
  onClick: () => void
}

export const Card: FC<CardProps> = (props) => {
  return (
    <Box
      p={4}
      display={{ md: "flex" }}
      maxWidth="32rem"
      borderWidth={1}
      margin={2}
      _hover={{
        background: "gray.900",
      }}
      onClick={props.onClick}
    >
      Flip Result : 
    </Box>
  )
}
