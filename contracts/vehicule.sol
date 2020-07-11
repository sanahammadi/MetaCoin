// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 <0.7.4;
contract vehicule {
    struct Date {
        uint16 year;
        uint8 month;
        uint8 day;
    }
    struct vehiculeMetaInfo {
        Date date;
        string owner;
         }
   string fullname;
   address sender;
  string discription;
  uint price;
    Date date;
    vehiculeMetaInfo vInfo;
    mapping(uint => vehiculeMetaInfo) vehiculeList;
function sellVehicule(string memory _fullname,string memory _discription,
 uint _price) public {
          sender = msg.sender;
          fullname = _fullname;
          discription = _discription;
          price = _price;}
    function setVehicule(string memory name )public {
       fullname = name;
    }
    function registerVehicle(uint vinNumber, string memory  ownerName, uint16 y, uint8 m, uint8 d) public {
        date = Date(y, m, d);
        vehiculeList[vinNumber].owner = ownerName;
        vehiculeList[vinNumber].date = date;
    }
    function getVehicleInfo(uint vin) public view   returns(uint,  string memory , uint16, uint8, uint8) {
        return (vin, vehiculeList[vin].owner, vehiculeList[vin].date.year,
        vehiculeList[vin].date.month, vehiculeList[vin].date.day);

    }
}