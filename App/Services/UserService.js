import axios from 'axios';

const PATH = 'http://localhost:44352/api/user';

export const loginRest = async data => {
  return await axios.post(`${PATH}/authenticate/rest`, data);
};

export const loginXML = async data => {
  var xmlBodyStr = `<?xml version="1.0" encoding="UTF-8"?>
       <req:KnownTrackingRequest xmlns:req="http://www.example.com" 
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                xsi:schemaLocation="http://www.example.com
                TrackingRequestKnown.xsd">
         <Request>
           <ServiceHeader>
              <Email>${data.email}</Email>
              <Password>${data.password}</Password>
           </ServiceHeader>
         </Request>`;
  var config = {
    headers: {'Accepts': 'application/xml'},
  };
  return await axios.post(`${PATH}/authenticate/soap`, xmlBodyStr, config);
};
