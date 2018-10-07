import ListView from './ListView.vue';

export default function createListView(name) {
  return {
    name,
    render(h) {
      return h(ListView);
    },
  };
}