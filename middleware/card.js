export default async ({ store, route }) => {
  await store.dispatch('FETCH_CARD', route.params.id);
  const includes = store.state.card.works_with.concat(store.state.card.might_be_interesting);
  await store.dispatch('FETCH_CAREER_CARDS', `?id=${includes.join(',')}`);
};
