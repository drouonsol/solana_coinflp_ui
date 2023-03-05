export type CoinFlip = {
  "version": "0.1.0",
  "name": "coinflip_new",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "player"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "_"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "elysian_flip"
              }
            ]
          }
        },
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "escrowwallet"
              }
            ]
          }
        },
        {
          "name": "feeWallet",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "feewallet"
              }
            ]
          }
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "i32"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "player"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "_"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "elysian_flip"
              }
            ]
          }
        },
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "escrowwallet"
              }
            ]
          }
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "escrowwallet"
              }
            ]
          }
        },
        {
          "name": "authWallet",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "auth_wallet"
              }
            ]
          }
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "withdrawlAmount",
          "type": "i32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "FlipStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "games",
            "type": "i16"
          },
          {
            "name": "gameswon",
            "type": "i16"
          },
          {
            "name": "gameslost",
            "type": "i16"
          },
          {
            "name": "tokensOwed",
            "type": "u64"
          },
          {
            "name": "lastFlipValue",
            "type": "i64"
          },
          {
            "name": "lastFlipClaimed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Authority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timesCounted",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CoinResult",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Won"
          },
          {
            "name": "Lost"
          }
        ]
      }
    },
    {
      "name": "ClaimStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Claimed"
          },
          {
            "name": "Unclaimed"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "EscrowBalanceLow",
      "msg": "Not Enough Wallet Balance"
    },
    {
      "code": 6001,
      "name": "OutOfRange",
      "msg": "Bid Out Of Range"
    },
    {
      "code": 6002,
      "name": "BidLessThanMinumum",
      "msg": "Bid Too Low"
    },
    {
      "code": 6003,
      "name": "NotEnoughToClaim",
      "msg": "Not Enough Too Claim"
    }
  ],
  "metadata": {
    "address": "26Kzq7jgtst8BfT6oSWCxR1Di8JNBpZs8sytTgq1tik3"
  }
}
export const IDL: CoinFlip = {
  "version": "0.1.0",
  "name": "coinflip_new",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "player"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "_"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "elysian_flip"
              }
            ]
          }
        },
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "escrowwallet"
              }
            ]
          }
        },
        {
          "name": "feeWallet",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "feewallet"
              }
            ]
          }
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "i32"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "playerAccount",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "player"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "_"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "elysian_flip"
              }
            ]
          }
        },
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "escrowwallet"
              }
            ]
          }
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "escrowAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "escrowwallet"
              }
            ]
          }
        },
        {
          "name": "authWallet",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "auth_wallet"
              }
            ]
          }
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "withdrawlAmount",
          "type": "i32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "FlipStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "games",
            "type": "i16"
          },
          {
            "name": "gameswon",
            "type": "i16"
          },
          {
            "name": "gameslost",
            "type": "i16"
          },
          {
            "name": "tokensOwed",
            "type": "u64"
          },
          {
            "name": "lastFlipValue",
            "type": "i64"
          },
          {
            "name": "lastFlipClaimed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Authority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timesCounted",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CoinResult",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Won"
          },
          {
            "name": "Lost"
          }
        ]
      }
    },
    {
      "name": "ClaimStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Claimed"
          },
          {
            "name": "Unclaimed"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "EscrowBalanceLow",
      "msg": "Not Enough Wallet Balance"
    },
    {
      "code": 6001,
      "name": "OutOfRange",
      "msg": "Bid Out Of Range"
    },
    {
      "code": 6002,
      "name": "BidLessThanMinumum",
      "msg": "Bid Too Low"
    },
    {
      "code": 6003,
      "name": "NotEnoughToClaim",
      "msg": "Not Enough Too Claim"
    }
  ],
  "metadata": {
    "address": "26Kzq7jgtst8BfT6oSWCxR1Di8JNBpZs8sytTgq1tik3"
  }
}