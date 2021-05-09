function merge(obj1, obj2) {
  if (obj1 && obj2) {
    Object.keys(obj2).forEach((prop) => {
      obj1[prop] = obj2[prop];
    });
  }
  return obj1;
}

module.exports = merge;
