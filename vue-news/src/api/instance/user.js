import { user } from './index-instance.js';

export function fetchUser(id) {
  return user.get(id);
}