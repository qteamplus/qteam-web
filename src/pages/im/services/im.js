import request from '../../../utils/request';

export function fetch() {
  return request(`/api/notifications`);
}
export function fetchMessages(notification) {
  
  console.log(notification);
  const id = notification._targetId;
  return request(`/api/messages?_toId=${id}`);
}