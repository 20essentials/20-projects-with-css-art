
import 'atropos/atropos.min.css';
import Atropos from 'atropos';
const $$ = el => document.querySelectorAll(el);

document.addEventListener('DOMContentLoaded', () => {
  const $cards = $$('.my-atropos');
  $cards.forEach(el => {
    const myAtropos = Atropos({
      el,
      activeOffset: 40,
      shadowScale: 1,
      alwaysActive: true
    });
  });

});

/* window.addEventListener('resize', () => {
  document.title = window.innerWidth;
}); */
