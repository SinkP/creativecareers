export default (ctx, inject) => {
  inject('prefix', process.env.ROUTER_BASE);
};
