// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MessagePortal {

    event NewMessage(address indexed sender,uint256 timestamp,string context);

    struct Message {
        address sender;
        uint256 timestamp;
        string context;
    }
    Message[] messages;

    function message(string memory _context) public {
        messages.push(Message(msg.sender, block.timestamp, _context));
        emit NewMessage(msg.sender,block.timestamp,_context);
    }

    function getCurrentMessages() public view returns (Message[] memory){
        return messages;
    }
}