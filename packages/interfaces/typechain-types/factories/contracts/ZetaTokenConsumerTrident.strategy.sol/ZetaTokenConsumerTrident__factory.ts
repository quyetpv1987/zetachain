/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ZetaTokenConsumerTrident,
  ZetaTokenConsumerTridentInterface,
} from "../../../contracts/ZetaTokenConsumerTrident.strategy.sol/ZetaTokenConsumerTrident";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "zetaToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "uniswapV3Router_",
        type: "address",
      },
      {
        internalType: "address",
        name: "WETH9Address_",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolFactory_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ErrorSendingETH",
    type: "error",
  },
  {
    inputs: [],
    name: "InputCantBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "EthExchangedForZeta",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "TokenExchangedForZeta",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "ZetaExchangedForEth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "ZetaExchangedForToken",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zetaTokenAmount",
        type: "uint256",
      },
    ],
    name: "getEthFromZeta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "outputToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "zetaTokenAmount",
        type: "uint256",
      },
    ],
    name: "getTokenFromZeta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
    ],
    name: "getZetaFromEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "inputToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "inputTokenAmount",
        type: "uint256",
      },
    ],
    name: "getZetaFromToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolFactory",
    outputs: [
      {
        internalType: "contract ConcentratedLiquidityPoolFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tridentRouter",
    outputs: [
      {
        internalType: "contract IPoolRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zetaToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162002add38038062002add833981810160405281019062000038919062000245565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480620000a05750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b80620000d85750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b80620001105750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b1562000148576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508273ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505050506200030a565b6000815190506200023f81620002f0565b92915050565b60008060008060808587031215620002625762000261620002eb565b5b600062000272878288016200022e565b945050602062000285878288016200022e565b935050604062000298878288016200022e565b9250506060620002ab878288016200022e565b91505092959194509250565b6000620002c482620002cb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620002fb81620002b7565b81146200030757600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6126c962000414600039600081816102e0015281816106ca015281816107d601528181610b0c01528181610cde015281816111a8015261129401526000818161042c0152818161064f01528181610a1201528181610c2301528181610e4901528181610f3e015281816110ed01526114f00152600081816102b401528181610521015281816107a601528181610bd901528181610c4501528181610c9101528181610da3015281816110a30152818161110f0152818161115b015261147b0152600081816102930152818161069e0152818161078501528181610cb20152818161117c015261126301526126c96000f3fe6080604052600436106100745760003560e01c80634219dc401161004e5780634219dc401461011857806354c49a2a1461014357806364b5528a14610180578063a53fb10b146101ab5761007b565b8063013b2ff81461008057806321e093b1146100b05780632405620a146100db5761007b565b3661007b57005b600080fd5b61009a60048036038101906100959190611bbd565b6101e8565b6040516100a7919061229d565b60405180910390f35b3480156100bc57600080fd5b506100c561051f565b6040516100d29190612068565b60405180910390f35b3480156100e757600080fd5b5061010260048036038101906100fd9190611bfd565b610543565b60405161010f919061229d565b60405180910390f35b34801561012457600080fd5b5061012d610b0a565b60405161013a9190612188565b60405180910390f35b34801561014f57600080fd5b5061016a60048036038101906101659190611c64565b610b2e565b604051610177919061229d565b60405180910390f35b34801561018c57600080fd5b50610195610f3c565b6040516101a291906121a3565b60405180910390f35b3480156101b757600080fd5b506101d260048036038101906101cd9190611bfd565b610f60565b6040516101df919061229d565b60405180910390f35b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610250576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600034141561028b576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806102d87f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611602565b9150915060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166371a258128484600060016040518563ffffffff1660e01b815260040161033f94939291906120ac565b60006040518083038186803b15801561035757600080fd5b505afa15801561036b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103949190611cb7565b905060006040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001348152602001878152602001836000815181106103e0576103df6124b5565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c07f5c3234846040518363ffffffff1660e01b81526004016104849190612282565b6020604051808303818588803b15801561049d57600080fd5b505af11580156104b1573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906104d69190611d2d565b90507f87890b0a30955b1db16cc894fbe24779ae05d9f337bfe8b6dfc0809b5bf9da1134826040516105099291906122b8565b60405180910390a1809550505050505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806105ab5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156105e2576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082141561061d576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064a3330848673ffffffffffffffffffffffffffffffffffffffff16611652909392919063ffffffff16565b6106957f0000000000000000000000000000000000000000000000000000000000000000838573ffffffffffffffffffffffffffffffffffffffff166116db9092919063ffffffff16565b6000806106c2857f0000000000000000000000000000000000000000000000000000000000000000611602565b9150915060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166371a258128484600060016040518563ffffffff1660e01b815260040161072994939291906120ac565b60006040518083038186803b15801561074157600080fd5b505afa158015610755573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061077e9190611cb7565b90506107ca7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611602565b809350819450505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166371a258128585600060016040518563ffffffff1660e01b815260040161083594939291906120ac565b60006040518083038186803b15801561084d57600080fd5b505afa158015610861573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061088a9190611cb7565b90506000600267ffffffffffffffff8111156108a9576108a86124e4565b5b6040519080825280602002602001820160405280156108d75781602001602082028036833780820191505090505b509050826000815181106108ee576108ed6124b5565b5b60200260200101518160008151811061090a576109096124b5565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081600081518110610958576109576124b5565b5b602002602001015181600181518110610974576109736124b5565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060006040518060c001604052808a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018b81526020018381526020018c73ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663363a9dba836040518263ffffffff1660e01b8152600401610a699190612260565b602060405180830381600087803b158015610a8357600080fd5b505af1158015610a97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abb9190611d2d565b90507f017190d3d99ee6d8dd0604ef1e71ff9802810c6485f57c9b2ed6169848dd119f8a8a83604051610af093929190612151565b60405180910390a180975050505050505050949350505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610b96576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000821415610bd1576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c1e3330847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611652909392919063ffffffff16565b610c897f0000000000000000000000000000000000000000000000000000000000000000837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166116db9092919063ffffffff16565b600080610cd67f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611602565b9150915060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166371a258128484600060016040518563ffffffff1660e01b8152600401610d3d94939291906120ac565b60006040518083038186803b158015610d5557600080fd5b505afa158015610d69573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610d929190611cb7565b905060006040518060c001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16815260200187815260200188815260200183600081518110610dfd57610dfc6124b5565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff16815260200160011515815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c07f5c32836040518263ffffffff1660e01b8152600401610ea09190612282565b602060405180830381600087803b158015610eba57600080fd5b505af1158015610ece573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef29190611d2d565b90507f74e171117e91660f493740924d8bad0caf48dc4fbccb767fb05935397a2c17ae8782604051610f259291906122b8565b60405180910390a180955050505050509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060009054906101000a900460ff1615610fa8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60016000806101000a81548160ff021916908315150217905550600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806110295750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b15611060576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082141561109b576040517fb813f54900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110e83330847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611652909392919063ffffffff16565b6111537f0000000000000000000000000000000000000000000000000000000000000000837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166116db9092919063ffffffff16565b6000806111a07f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611602565b9150915060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166371a258128484600060016040518563ffffffff1660e01b815260040161120794939291906120ac565b60006040518083038186803b15801561121f57600080fd5b505afa158015611233573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061125c9190611cb7565b90506112887f000000000000000000000000000000000000000000000000000000000000000087611602565b809350819450505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166371a258128585600060016040518563ffffffff1660e01b81526004016112f394939291906120ac565b60006040518083038186803b15801561130b57600080fd5b505afa15801561131f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906113489190611cb7565b90506000600267ffffffffffffffff811115611367576113666124e4565b5b6040519080825280602002602001820160405280156113955781602001602082028036833780820191505090505b509050826000815181106113ac576113ab6124b5565b5b6020026020010151816000815181106113c8576113c76124b5565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081600081518110611416576114156124b5565b5b602002602001015181600181518110611432576114316124b5565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060006040518060c001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018b81526020018381526020018c73ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663363a9dba836040518263ffffffff1660e01b81526004016115479190612260565b602060405180830381600087803b15801561156157600080fd5b505af1158015611575573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115999190611d2d565b90507f0a7cb8f6e1d29e616c1209a3f418c17b3a9137005377f6dd072217b1ede2573b8a8a836040516115ce93929190612151565b60405180910390a18097505050505050505060008060006101000a81548160ff021916908315150217905550949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610156116445783839150915061164b565b8284915091505b9250929050565b6116d5846323b872dd60e01b858585604051602401611673939291906120f1565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611839565b50505050565b6000811480611774575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401611722929190612083565b60206040518083038186803b15801561173a57600080fd5b505afa15801561174e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117729190611d2d565b145b6117b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117aa90612240565b60405180910390fd5b6118348363095ea7b360e01b84846040516024016117d2929190612128565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611839565b505050565b600061189b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119009092919063ffffffff16565b90506000815111156118fb57808060200190518101906118bb9190611d00565b6118fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118f190612220565b60405180910390fd5b5b505050565b606061190f8484600085611918565b90509392505050565b60608247101561195d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611954906121e0565b60405180910390fd5b61196685611a2c565b6119a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161199c90612200565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516119ce9190612051565b60006040518083038185875af1925050503d8060008114611a0b576040519150601f19603f3d011682016040523d82523d6000602084013e611a10565b606091505b5091509150611a20828286611a4f565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315611a5f57829050611aaf565b600083511115611a725782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aa691906121be565b60405180910390fd5b9392505050565b6000611ac9611ac484612306565b6122e1565b90508083825260208201905082856020860282011115611aec57611aeb612518565b5b60005b85811015611b1c5781611b028882611b3b565b845260208401935060208301925050600181019050611aef565b5050509392505050565b600081359050611b358161264e565b92915050565b600081519050611b4a8161264e565b92915050565b600082601f830112611b6557611b64612513565b5b8151611b75848260208601611ab6565b91505092915050565b600081519050611b8d81612665565b92915050565b600081359050611ba28161267c565b92915050565b600081519050611bb78161267c565b92915050565b60008060408385031215611bd457611bd3612522565b5b6000611be285828601611b26565b9250506020611bf385828601611b93565b9150509250929050565b60008060008060808587031215611c1757611c16612522565b5b6000611c2587828801611b26565b9450506020611c3687828801611b93565b9350506040611c4787828801611b26565b9250506060611c5887828801611b93565b91505092959194509250565b600080600060608486031215611c7d57611c7c612522565b5b6000611c8b86828701611b26565b9350506020611c9c86828701611b93565b9250506040611cad86828701611b93565b9150509250925092565b600060208284031215611ccd57611ccc612522565b5b600082015167ffffffffffffffff811115611ceb57611cea61251d565b5b611cf784828501611b50565b91505092915050565b600060208284031215611d1657611d15612522565b5b6000611d2484828501611b7e565b91505092915050565b600060208284031215611d4357611d42612522565b5b6000611d5184828501611ba8565b91505092915050565b6000611d668383611d72565b60208301905092915050565b611d7b8161239d565b82525050565b611d8a8161239d565b82525050565b6000611d9b82612342565b611da58185612370565b9350611db083612332565b8060005b83811015611de1578151611dc88882611d5a565b9750611dd383612363565b925050600181019050611db4565b5085935050505092915050565b611df7816123af565b82525050565b6000611e088261234d565b611e128185612381565b9350611e22818560208601612451565b80840191505092915050565b611e37816123e5565b82525050565b611e46816123f7565b82525050565b611e5581612409565b82525050565b611e648161241b565b82525050565b6000611e7582612358565b611e7f818561238c565b9350611e8f818560208601612451565b611e9881612527565b840191505092915050565b6000611eb060268361238c565b9150611ebb82612538565b604082019050919050565b6000611ed3601d8361238c565b9150611ede82612587565b602082019050919050565b6000611ef6602a8361238c565b9150611f01826125b0565b604082019050919050565b6000611f1960368361238c565b9150611f24826125ff565b604082019050919050565b600060c083016000830151611f476000860182611d72565b506020830151611f5a6020860182612033565b506040830151611f6d6040860182612033565b5060608301518482036060860152611f858282611d90565b9150506080830151611f9a6080860182611d72565b5060a0830151611fad60a0860182611dee565b508091505092915050565b60c082016000820151611fce6000850182611d72565b506020820151611fe16020850182612033565b506040820151611ff46040850182612033565b5060608201516120076060850182611d72565b50608082015161201a6080850182611d72565b5060a082015161202d60a0850182611dee565b50505050565b61203c816123db565b82525050565b61204b816123db565b82525050565b600061205d8284611dfd565b915081905092915050565b600060208201905061207d6000830184611d81565b92915050565b60006040820190506120986000830185611d81565b6120a56020830184611d81565b9392505050565b60006080820190506120c16000830187611d81565b6120ce6020830186611d81565b6120db6040830185611e4c565b6120e86060830184611e5b565b95945050505050565b60006060820190506121066000830186611d81565b6121136020830185611d81565b6121206040830184612042565b949350505050565b600060408201905061213d6000830185611d81565b61214a6020830184612042565b9392505050565b60006060820190506121666000830186611d81565b6121736020830185612042565b6121806040830184612042565b949350505050565b600060208201905061219d6000830184611e2e565b92915050565b60006020820190506121b86000830184611e3d565b92915050565b600060208201905081810360008301526121d88184611e6a565b905092915050565b600060208201905081810360008301526121f981611ea3565b9050919050565b6000602082019050818103600083015261221981611ec6565b9050919050565b6000602082019050818103600083015261223981611ee9565b9050919050565b6000602082019050818103600083015261225981611f0c565b9050919050565b6000602082019050818103600083015261227a8184611f2f565b905092915050565b600060c0820190506122976000830184611fb8565b92915050565b60006020820190506122b26000830184612042565b92915050565b60006040820190506122cd6000830185612042565b6122da6020830184612042565b9392505050565b60006122eb6122fc565b90506122f78282612484565b919050565b6000604051905090565b600067ffffffffffffffff821115612321576123206124e4565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006123a8826123bb565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006123f08261242d565b9050919050565b60006124028261242d565b9050919050565b6000612414826123db565b9050919050565b6000612426826123db565b9050919050565b60006124388261243f565b9050919050565b600061244a826123bb565b9050919050565b60005b8381101561246f578082015181840152602081019050612454565b8381111561247e576000848401525b50505050565b61248d82612527565b810181811067ffffffffffffffff821117156124ac576124ab6124e4565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b6126578161239d565b811461266257600080fd5b50565b61266e816123af565b811461267957600080fd5b50565b612685816123db565b811461269057600080fd5b5056fea2646970667358221220a553569c9610a34e29e7a80e1bded855d026e48ea087596037ab14ad290b88b164736f6c63430008070033";

type ZetaTokenConsumerTridentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZetaTokenConsumerTridentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZetaTokenConsumerTrident__factory extends ContractFactory {
  constructor(...args: ZetaTokenConsumerTridentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    zetaToken_: string,
    uniswapV3Router_: string,
    WETH9Address_: string,
    poolFactory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZetaTokenConsumerTrident> {
    return super.deploy(
      zetaToken_,
      uniswapV3Router_,
      WETH9Address_,
      poolFactory_,
      overrides || {}
    ) as Promise<ZetaTokenConsumerTrident>;
  }
  override getDeployTransaction(
    zetaToken_: string,
    uniswapV3Router_: string,
    WETH9Address_: string,
    poolFactory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      zetaToken_,
      uniswapV3Router_,
      WETH9Address_,
      poolFactory_,
      overrides || {}
    );
  }
  override attach(address: string): ZetaTokenConsumerTrident {
    return super.attach(address) as ZetaTokenConsumerTrident;
  }
  override connect(signer: Signer): ZetaTokenConsumerTrident__factory {
    return super.connect(signer) as ZetaTokenConsumerTrident__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZetaTokenConsumerTridentInterface {
    return new utils.Interface(_abi) as ZetaTokenConsumerTridentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZetaTokenConsumerTrident {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZetaTokenConsumerTrident;
  }
}