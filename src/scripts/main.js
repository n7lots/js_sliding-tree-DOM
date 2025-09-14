'use strict';

const tree = document.querySelectorAll('.tree li');

tree.forEach((li) => {
  li.childNodes.forEach((node) => {
    if (
      node.nodeType === 3 &&
      node.nextSibling &&
      node.nextSibling.nodeType === 1 &&
      node.nextSibling.tagName === 'UL'
    ) {
      const text = node.nodeValue.trim();

      if (text) {
        const span = document.createElement('span');

        span.textContent = text;
        li.replaceChild(span, node);

        span.addEventListener('click', () => {
          const ul = span.nextElementSibling;

          if (ul && ul.tagName === 'UL') {
            ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
          }
        });
      }
    }
  });
});
