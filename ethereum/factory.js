import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface) , '0x07EB4838E74Da994d1E590B0af6BFA8666AB078B');

export default instance;

// 0x39E1Df649318eA8236aabcf074Cef5B20280a6AC
//  0x0639c03bf3CA148d05785143871FB3bd346f6685

