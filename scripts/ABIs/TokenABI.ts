const tokenABI = [
    "function transfer(address _to, uint256 _value) returns (bool)",
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)"
]

export default tokenABI;
    