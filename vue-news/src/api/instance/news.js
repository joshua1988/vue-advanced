import { news } from './index-instance';

export function fetchNews(id) {
  return news.get(id);
}