const isValid = require('date-fns/is_valid')
const format = require('date-fns/format');

exports.dateHandler = (date) => {
  const validUnixDate = isValid(new Date(parseInt(date)))
  if (validUnixDate) {
    const parsedDate = parseInt(date);
    return { unix: parsedDate, natural: format(validUnixDate, 'MMMM DD, YYYY')};
  } else if(isValid(new Date(date))) {
    return { unix: new Date(date).getTime(), natural: format(date, 'MMMM DD, YYYY') };
  } else {
    return { unix: null, natural: null };
  }
}
