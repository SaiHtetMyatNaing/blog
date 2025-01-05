function limitString(str, limit) {
  return str.substring(0, limit) + "...";
};

module.exports = limitString;
