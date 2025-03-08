export const problems = [
  {
    id: 1,
    title: " Simple Storage Contract",
    description:
      "Create a smart contract that allows users to store and retrieve a single integer value.",
    difficulty: "Easy",
    category: "Solidity",
    path: "sol",
    solved: false,
    codeTemplate: `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedValue;

    function setValue(uint256 _value) public {
        // Implement logic to store value
    }

    function getValue() public view returns (uint256) {
        // Implement logic to return stored value
    }
}
`,
    Requirements:
      "Users should be able to set a value.\nThe contract should return the last stored value.",
    testCases: [
      {
        input: ["setValue(10)", "getValue()"],
        expectedOutput: "10",
      },
      {
        input: ["setValue(42)", "getValue()"],
        expectedOutput: "42",
      },
    ],
  },

  {
    id: 2,
    title: " Counter Contract",
    description:
      "Implement a counter contract with increment and decrement functionality.",
    difficulty: "Medium",
    category: "Solidity",
    path: "sol",
    solved: false,
    codeTemplate: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 private count;

    function increment() public {
        // Implement increment logic
    }

    function decrement() public {
        // Implement decrement logic
    }

    function getCount() public view returns (uint256) {
        // Implement logic to return counter value
    }
}
`,
    Requirements:
      "A function increment() should increase the counter.\nA function decrement() should decrease the counter.\nA function getCount() should return the current counter value.",
    testCases: [
      {
        input: ["increment()", "increment()", "getCount()"],
        expectedOutput: "2",
      },
      {
        input: ["increment()", "decrement()", "getCount()"],
        expectedOutput: "0",
      },
    ],
  },
  {
    id: 3,
    title: "Token Vesting Contract",
    description:
      "Implement a module that locks MOVE coins for an employee and releases them over time.",
    difficulty: "Hard",
    category: "Move",
    path: "move",
    solved: false,
    codeTemplate: `// Token Vesting Contract
module vesting {
    public fun lock_tokens(employer: &signer, employee: address, amount: u64) {}
    public fun withdraw_tokens(employee: &signer) {}
}`,
    Requirements:
      "Employer deposits coins.\nEmployee can claim a portion after a set time.",
  },
  {
    id: 4,
    title: "Even or Odd",
    description:
      "Create a smart contract that checks if a given number is even or odd.",
    difficulty: "Hard",
    category: "Solidity",
    path: "sol",
    solved: false,
    codeTemplate: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EvenOdd {
    function isEven(uint256 num) public pure returns (bool) {
        // Implement logic to check even or odd
    }
}
`,
    Requirements:
      "Implement a function isEven(uint256 num) → bool that returns true if the number is even, otherwise false.",
    testCases: [
      {
        input: ["isEven(10)"],
        expectedOutput: "true",
      },
      {
        input: ["isEven(7)"],
        expectedOutput: "false",
      },
    ],
  },
  {
    id: 5,
    title: "NFT Marketplace",
    description: "Implement a marketplace for NFTs in Move.",
    difficulty: "Medium",
    category: "Move",
    path: "move",
    solved: false,
    codeTemplate: `// NFT Marketplace
module nft_marketplace {
    public fun list_nft(owner: &signer, token_id: u64, price: u64) {}
    public fun buy_nft(buyer: &signer, token_id: u64) {}
}
`,
    Requirements: "NFT owner can list an NFT.\nBuyer can purchase the NFT.",
  },
  {
    id: 6,
    title: "Escrow Contract",
    description:
      "Implement a simple escrow module where a buyer can lock MOVE coins, and the seller can withdraw them after buyer approval.",
    difficulty: "Hard",
    category: "Move",
    path: "move",
    solved: false,
    codeTemplate: `// Escrow Contract
module escrow {
    public fun deposit(buyer: &signer, amount: u64) {}
    public fun approve_release(buyer: &signer) {}
    public fun dispute(buyer: &signer) {}
}`,
    Requirements:
      "Buyer deposits funds.\nBuyer must approve for seller withdrawal.\nBuyer can dispute to get a refund.",
  },
  {
    id: 7,
    title: "Maximum of Three Numbers",
    description:
      "Implement a contract that returns the maximum of three numbers.",
    difficulty: "Medium",
    category: "Solidity",
    path: "sol",
    solved: false,
    codeTemplate: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MaxNumber {
    function maxOfThree(uint256 a, uint256 b, uint256 c) public pure returns (uint256) {
        // Implement logic to find max
    }
}
`,
    Requirements:
      "Function maxOfThree(uint256 a, uint256 b, uint256 c) → uint256",
    testCases: [
      {
        input: ["maxOfThree(10, 20, 30)"],
        expectedOutput: "30",
      },
      {
        input: ["maxOfThree(100, 50, 75)"],
        expectedOutput: "100",
      },
    ],
  },
  {
    id: 8,
    title: "Decentralized Voting System",
    description:
      "Implement a voting system where registered users can vote on-chain.",
    difficulty: "Medium",
    category: "Move",
    path: "move",
    solved: false,
    codeTemplate: `//Decentralized Voting System
module voting {
    public fun register_voter(admin: &signer, voter: address) {}
    public fun vote(voter: &signer, candidate_id: u64) {}
    public fun get_results(): vector<u64> { 
        return vector[]; 
    }
}`,
    Requirements: "Users must register before voting.\nVotes are immutable.",
  },
  {
    id: 10,
    title: "Factorial Calculation",
    description:
      "Create a function that calculates the factorial of a given number.",
    difficulty: "Easy",
    category: "Solidity",
    path: "sol",
    solved: false,
    codeTemplate: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Factorial {
    function factorial(uint256 num) public pure returns (uint256) {
        // Implement factorial logic
    }
}
`,
    Requirements: "Implement factorial(uint256 num) → uint256",
    testCases: [
      {
        input: ["factorial(5)"],
        expectedOutput: "120",
      },
      {
        input: ["factorial(3)"],
        expectedOutput: "6",
      },
    ],
  },
  {
    id: 11,
    title: "Rate-Limited Faucet",
    description: "Implement a rate-limited faucet in Move.",
    difficulty: "Easy",
    category: "Move",
    path: "move",
    solved: false,
    codeTemplate: `//Rate-Limited Faucet
module faucet {
    public fun claim_tokens(user: &signer) {}
}`,
    Requirements: "Users can claim MOVE coins only once per day.",
  },
  {
    id: 12,
    title: "Fibonacci Sequence",
    description:
      "Create a Solidity function that calculates the nth Fibonacci number.",
    difficulty: "Easy",
    category: "Solidity",
    path: "sol",
    solved: false,
    codeTemplate: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Fibonacci {
    function fibonacci(uint256 n) public pure returns (uint256) {
        // Implement Fibonacci logic
    }
}
`,
    Requirements:
      "Implement a function fibonacci(uint256 n) → uint256\nThe function should return the nth Fibonacci number, where:\n\tF(0) = 0, F(1) = 1\n\tF(n) = F(n-1) + F(n-2) for n >= 2",
    testCases: [
      {
        input: ["fibonacci(0)"],
        expectedOutput: "0",
      },
      {
        input: ["fibonacci(1)"],
        expectedOutput: "1",
      },
      {
        input: ["fibonacci(5)"],
        expectedOutput: "5",
      },
      {
        input: ["fibonacci(10)"],
        expectedOutput: "55",
      },
    ],
  },
  {
    id: 13,
    title: "Prime Number Checker",
    description: "Create a Solidity function that checks if a number is prime.",
    difficulty: "Easy",
    category: "Solidity",
    path: "sol",
    solved: false,
    codeTemplate: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrimeChecker {
    function isPrime(uint256 num) public pure returns (bool) {
        // Implement prime number logic
    }
}
`,
    Requirements:
      "Implement isPrime(uint256 num) → bool\nThe function should return true if num is prime, otherwise false",
    testCases: [
      {
        input: ["isPrime(2)"],
        expectedOutput: "true",
      },
      {
        input: ["isPrime(10)"],
        expectedOutput: "false",
      },
      {
        input: ["isPrime(17)"],
        expectedOutput: "true",
      },
      {
        input: ["isPrime(1)"],
        expectedOutput: "false",
      },
    ],
  },
  {
    id: 14,
    title: "Palindrome Checker",
    description:
      "Create a Solidity function that checks if a given number is a palindrome.",
    difficulty: "Easy",
    category: "Solidity",
    path: "sol",
    solved: false,
    codeTemplate: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Palindrome {
    function isPalindrome(uint256 num) public pure returns (bool) {
        // Implement palindrome check logic
    }
}
`,
    Requirements:
      "Implement isPalindrome(uint256 num) → bool\nThe function should return true if num is the same when reversed, otherwise false",
    testCases: [
      {
        input: ["isPalindrome(121)"],
        expectedOutput: "true",
      },
      {
        input: ["isPalindrome(123)"],
        expectedOutput: "false",
      },
      {
        input: ["isPalindrome(1221)"],
        expectedOutput: "true",
      },
      {
        input: ["isPalindrome(1001)"],
        expectedOutput: "true",
      },
    ],
  },
  {
    id: 15,
    title: "Voting Smart Contract",
    description:
      "Create a simple voting contract where users can vote for candidates.",
    difficulty: "Easy",
    category: "Solidity",
    path: "sol",
    solved: false,
    codeTemplate: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    mapping(string => uint256) private votes;

    function vote(string memory candidate) public {
        // Implement voting logic
    }

    function getVotes(string memory candidate) public view returns (uint256) {
        // Implement logic to return vote count
    }
}

`,
    Requirements:
      "Implement vote(string memory candidate) public to add a vote\nImplement getVotes(string memory candidate) public view returns (uint256) to check votes",
    testCases: [
      {
        input: ["vote('Alice')", "getVotes('Alice')"],
        expectedOutput: "1",
      },
      {
        input: ["vote('Alice')", "vote('Alice')", "getVotes('Alice')"],
        expectedOutput: "3",
      },
      {
        input: ["vote('Bob')", "getVotes('Bob')"],
        expectedOutput: "1",
      },
    ],
  },

  {
    id: 16,
    title: "Simple Bank Contract",
    description:
      "Create a basic bank contract that allows deposits and withdrawals.",
    difficulty: "Easy",
    category: "Solidity",
    path: "sol",
    solved: false,
    codeTemplate: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleBank {
    mapping(address => uint256) private balances;

    function deposit() public payable {
        // Implement deposit logic
    }

    function withdraw(uint256 amount) public {
        // Implement withdrawal logic
    }

    function getBalance() public view returns (uint256) {
        // Implement balance check logic
    }
}

`,
    Requirements: "Implement deposit() payable to add funds\nImplement withdraw(uint256 amount) to withdraw funds\nImplement getBalance() view returns (uint256) to check balance",
    testCases: [
    {
      "input": ["deposit(100)", "getBalance()"],
      "expectedOutput": "100"
    },
    {
      "input": ["deposit(50)", "withdraw(30)", "getBalance()"],
      "expectedOutput": "120"
    },
    {
      "input": ["withdraw(200)"],
      "expectedOutput": "Error: Insufficient balance"
    }
  ]
  },
];
