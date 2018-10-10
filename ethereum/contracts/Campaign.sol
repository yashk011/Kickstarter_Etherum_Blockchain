pragma solidity ^0.4.17;

contract CampaignFactory {
    
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        
        address newCampaign = new Campaign(minimum , msg.sender);
        deployedCampaigns.push(newCampaign);
        
        // gotcha : 
        
    }
    
    function getDeployedCampaigns() public view returns (address[])
    {
        return deployedCampaigns;
        
    }
} 

contract Campaign {
    
    struct Request {
      
      string description;
      uint value;
      address recipient;
      bool complete;
      uint approvalCount;
      
      mapping(address => bool) approvals; // no need to initialise mappings !!!!!
      
    }
    
    address public manager;
    uint minimumContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint approversCount;
    
    // Modifier to restrict the function call to specific manager !!!

    modifier restricted()
    {
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minimum , address creator) public {
        
          manager = creator;
          minimumContribution = minimum;
        
    }
    
    function contribute() public payable {
        
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description , uint value , address recipient) public restricted { // so that only manager has access
        
        Request memory newRequest = Request({
            description : description ,
            value : value ,
            recipient : recipient,
            complete : false,
            approvalCount : 0
        });   
        
        requests.push(newRequest);
        
    }
    
    /*
    function approveRequest(Request request)
    {
        bool isAppprover = false;
        
        for(uint u = 0; u < approvers.length ;u++)
        {
            if(approvers[i] == msg.sender)
            {
                isApprover = true;
            }
            
        }
        
        require(isAppprover);
        
        for(uint j =0; j< request.approvers.length ;j++)
        {
            require(request.approvers[i]  != msg.sender);
            
        }
    
    }
    */
    
    function approveRequest(uint index) public {
        
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);   
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
        
        
    } 
    
    function finalizeRequest(uint index) public restricted {
        
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
        
        
    }
    
}