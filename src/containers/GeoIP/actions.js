import * as at from 'constants/actionTypes';


export function getIpList(msg) {
  console.log(msg);
  return {
    msg,
    type: at.GET_IP_LIST,
  };
}
