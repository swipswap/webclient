1. Make sure the chainlink local node, contracts and this directory (webclient) are siblings in the same directory
2. Start the chainlink local node
  - If you used the address value in the `config/config.json` file before starting the chainlink local node, 
    create a `.secret` file in the root of webclient otherwise and paste the corresponding privateKey in the file, go to 3
3. Go to the contracts directory and `npm install` then `truffle migrate --reset`
4. In this directory, run `npm install` and `npm run dev` to start development client
  