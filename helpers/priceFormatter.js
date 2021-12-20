export default val => {
  if (!val) return '0';

  return val.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').slice(0, -3) + ' тыс. ₽';
};
