export default async ({ store }) => {
  await store.dispatch('FETCH_INDUSTRIES');
  const departments = store.state.industries[0].departments;
  await store.dispatch('FETCH_DEPARTMENTS', `?id=${departments.join(',')}`);
  let cards = [];
  for (let index = 0; index < store.state.departments.length; index++) {
    const department = store.state.departments[index];
    cards = cards.concat(department.career_cards);
  }
  await store.dispatch('FETCH_CAREER_CARDS', `?id=${cards.join(',')}`);
};
