export default function (context) {
  console.log('Check auth');
  context.store.dispatch('initAuth', context.req);
};
