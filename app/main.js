// The router: hash routes render the overview, a section, an indicator or the About page from views.js,
// with the figures in data.js. No network, no build step.
//
//   #/                    the overview
//   #/population          a section (#/economy, #/society likewise)
//   #/indicator/<code>    one indicator, full series and table
//   #/about               source and method
//
// window.__shotReady is false while a page renders and true once it is on screen, so a screenshot
// script knows when to capture.

import { SECTIONS, indicatorByCode } from './data.js';
import { overviewPage, sectionPage, indicatorPage, aboutPage, missingPage } from './views.js';

const app = document.getElementById('app');
const rangeByCode = new Map(); // indicator code -> first year shown on its chart

function render() {
  window.__shotReady = false;
  const hash = location.hash.replace(/^#/, '') || '/';
  const indicatorMatch = hash.match(/^\/indicator\/([^/?]+)/);
  const section = SECTIONS.find((s) => hash === `/${s.id}`);
  let html;
  let title;
  let navKey = 'overview';
  if (indicatorMatch) {
    const found = indicatorByCode(decodeURIComponent(indicatorMatch[1]));
    if (found) {
      html = indicatorPage(found, rangeByCode.get(found.code) ?? null);
      title = `${found.name} | China in Numbers`;
      navKey = found.section;
    } else {
      html = missingPage();
      title = 'Not found | China in Numbers';
    }
  } else if (section) {
    html = sectionPage(section);
    title = `${section.title} | China in Numbers`;
    navKey = section.id;
  } else if (hash === '/about') {
    html = aboutPage();
    title = 'About | China in Numbers';
    navKey = 'about';
  } else if (hash === '/' || hash === '') {
    html = overviewPage();
    title = 'China in Numbers — National Statistics';
  } else {
    html = missingPage();
    title = 'Not found | China in Numbers';
  }
  document.title = title;
  app.innerHTML = html;
  document.querySelectorAll('nav.main-nav a').forEach((a) => {
    a.classList.toggle('active', a.dataset.nav === navKey);
  });
  window.scrollTo(0, 0);
  window.__shotReady = true;
}

// Chart range buttons on indicator pages: remember the choice per indicator and re-render.
document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-range]');
  if (!button) return;
  const raw = button.getAttribute('data-range');
  rangeByCode.set(button.getAttribute('data-code'), raw === '' ? null : Number(raw));
  render();
});

window.addEventListener('hashchange', render);
render();
