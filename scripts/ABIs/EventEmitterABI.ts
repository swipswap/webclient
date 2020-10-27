const eventEmitterABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_requestId",
				"type": "uint256"
			}
		],
		"name": "Fulfill",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_requestId",
				"type": "uint256"
			}
		],
		"name": "emitFulfill",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "emitFulfillSelector",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "_selector",
				"type": "bytes4"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]

export default eventEmitterABI;
  