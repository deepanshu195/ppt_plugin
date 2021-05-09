function css(node, style) {
  Object.keys(style).forEach((prop) => {
    node.style[prop] = style[prop];
  });
}

module.exports = css;
