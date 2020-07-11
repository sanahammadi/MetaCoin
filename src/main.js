var contractAddress="0x97845fAeA3C28bF92ACEA22411CA1a9C4A11B8B2";
var contractABI=[
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_fullname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_discription",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "sellVehicule",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "setVehicule",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "vinNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "ownerName",
          "type": "string"
        },
        {
          "internalType": "uint16",
          "name": "y",
          "type": "uint16"
        },
        {
          "internalType": "uint8",
          "name": "m",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "d",
          "type": "uint8"
        }
      ],
      "name": "registerVehicle",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "vin",
          "type": "uint256"
        }
      ],
      "name": "getVehicleInfo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        },
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  var web3 = new Web3('http://localhost:7545');
  var Vehicule = new web3.eth.Contract(contractABI, contractAddress);
  document.addEventListener('DOMCntentLoaded')