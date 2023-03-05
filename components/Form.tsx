import { FC } from "react"
import { useState } from "react"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
  Switch,
} from "@chakra-ui/react"
import { useWorkspace } from "../context/Anchor"
import { useWallet } from "@solana/wallet-adapter-react"
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey"
import { getAssociatedTokenAddressSync } from "@solana/spl-token"
import * as anchor from "@project-serum/anchor"
import InstructionNamespaceFactory from "@project-serum/anchor/dist/cjs/program/namespace/instruction"
import { title } from "process"
import { CoinFlip } from "../context/Anchor/movie_review"

export const Form: FC = () => {
  const [betamount, setBetamount] = useState("")
  const [toggle, setToggle] = useState(true)

  const workspace = useWorkspace()
  const { publicKey, sendTransaction } = useWallet()




  const handleSubmit = async (event: any) => {
    event.preventDefault()

    if (!publicKey || !workspace.program || !workspace.connection) {
      alert("Please connect your wallet")
      return
    }



    const [infoPda] = await anchor.web3.PublicKey.findProgramAddress(
      [publicKey.toBuffer(), Buffer.from("_"),  Buffer.from("elysian_flip")],
      workspace.program.programId
    )
  
    
      

    console.log("PDA account :", infoPda.toBase58())


    const transaction = new anchor.web3.Transaction()

    if (toggle) {
      const ix = await workspace.program.methods
        .initialize(Number(betamount)* 100)
        .instruction()

      transaction.add(ix)
    } 

    try {
      let signature = await sendTransaction(transaction, workspace.connection)
      console.log(
        `Transaction submitted: https://explorer.solana.com/tx/${signature}?cluster=devnet`
      )
      
    } catch (e) {
      console.log("Error:", JSON.stringify(e))
      alert(JSON.stringify(e))
    }

  }

  const handleClaim = async (event: any) => {
    event.preventDefault()

    if (!publicKey || !workspace.program || !workspace.connection) {
      alert("Please connect your wallet")
      return
    }

    const [statPda] = findProgramAddressSync(
      [Buffer.from("mint")],
      workspace.program.programId
    )

  const statPDA = findProgramAddressSync(
    []
  )

    const transaction = new anchor.web3.Transaction()

    if (toggle) {
      const ix = await workspace.program.methods
        .claim(1)
        .instruction()

      transaction.add(ix)
    } 

    try {
      let signature = await sendTransaction(transaction, workspace.connection)
      console.log(
        `Transaction submitted: https://explorer.solana.com/tx/${signature}?cluster=devnet`
      )
    } catch (e) {
      console.log("Error:", JSON.stringify(e))
      alert(JSON.stringify(e))
    }
  }


  return (
    <div>
    <Box
      p={4}
      display={{ md: "flex" }}
      maxWidth="32rem"
      borderWidth={0}
      margin={0}
      justifyContent="center"
    >
  
        <FormControl >
          <FormLabel color="white" style={{textDecoration: "none"}}>Bet Amount</FormLabel>
          <Input
            id="amount"
            color="gray.400"
            onChange={(event) => setBetamount(event.currentTarget.value)}
          />
        </FormControl>


      
 
 
    </Box>
    <form onSubmit={handleSubmit}>
        <Button width="full" mt={4} type="submit">
          Flip Coin
        </Button>

      </form>
<form onSubmit={handleClaim}>
<Button width="full" mt={4} type="submit">
    Claim Rewards
  </Button>
</form>
</div>
  )
}
