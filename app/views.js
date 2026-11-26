// HTML for every page, built from the dataset in data.js. Pages: the overview, one page per section
// (Population, Economy, Society), one page per indicator with its full table, and an About page that
// names the source and method. Every figure on every page is drawn from data.js and labelled with its
// source and the latest year it covers.

import { META, SECTIONS, indicatorByCode, indicatorsIn, featuredIndicators } from './data.js';
import { fmtValue, commas, latest, earliest, peak, valueIn, changeText } from './format.js';
import { lineChart, PALETTE } from './charts.js';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const ind = (code) => indicatorByCode(code);
const sectionOf = (id) => SECTIONS.find((s) => s.id === id);
const sourceLine = (i) => `Source: ${META.source} · series to ${latest(i)[0]}`;

// ---------- shared pieces ----------

function statCard(i) {
  const [year, value] = latest(i);
  return `<a class="stat-card" href="#/indicator/${i.code}">
  <span class="stat-name">${esc(i.name)}</span>
  <span class="stat-value">${esc(fmtValue(i.unit, value))}</span>
  <span class="stat-meta">in ${year} · ${esc(changeText(i))}</span>
</a>`;
}

function chartCard(i, height = 168) {
  const [year, value] = latest(i);
  return `<article class="chart-card">
  <header>
    <h3><a href="#/indicator/${i.code}">${esc(i.name)}</a></h3>
    <p class="card-value">${esc(fmtValue(i.unit, value))} <span>in ${year}</span></p>
  </header>
  ${lineChart([{ data: i.series, color: PALETTE[0] }], { unit: i.unit, height })}
  <p class="card-blurb">${esc(i.blurb)}</p>
  <p class="card-foot"><span>${esc(sourceLine(i))}</span><a href="#/indicator/${i.code}">Full series &amp; table →</a></p>
</article>`;
}

function compositeCard(title, seriesList, unit, note) {
  const legend = seriesList
    .map((s) => `<span class="legend-item"><span class="swatch" style="background:${s.color}"></span>${esc(s.label)}</span>`)
    .join('');
  return `<article class="chart-card wide">
  <header><h3>${esc(title)}</h3><p class="legend">${legend}</p></header>
  ${lineChart(seriesList, { unit, height: 250 })}
  <p class="card-foot"><span>${esc(note)}</span></p>
</article>`;
}

// ---------- overview ----------

export function overviewPage() {
  const pop = ind('SP.POP.TOTL');
  const gdp = ind('NY.GDP.MKTP.CD');
  const [popPeakYear, popPeakValue] = peak(pop);
  const life = ind('SP.DYN.LE00.IN');
  const lifeGain = latest(life)[1] - valueIn(life, 1960)[1];
  const poverty = ind('SI.POV.DDAY');
  const facts = [
    `<strong>A population turning point.</strong> After rising for six decades, China’s population peaked at ${fmtValue('people', popPeakValue)} in ${popPeakYear} and has fallen since — to ${fmtValue('people', latest(pop)[1])} in ${latest(pop)[0]}.`,
    `<strong>Life, lengthened.</strong> Life expectancy rose from ${fmtValue('years', valueIn(life, 1960)[1])} in 1960 to ${fmtValue('years', latest(life)[1])} in ${latest(life)[0]}, a gain of ${lifeGain.toFixed(0)} years.`,
    `<strong>Poverty, ended on the Bank’s line.</strong> The $3.00-a-day headcount fell from ${fmtValue('pct', earliest(poverty)[1])} in ${earliest(poverty)[0]} to ${fmtValue('pct', latest(poverty)[1])} in ${latest(poverty)[0]}.`,
    `<strong>A richer country.</strong> GDP per capita went from ${fmtValue('usd', valueIn(ind('NY.GDP.PCAP.CD'), 1960)[1])} in 1960 to ${fmtValue('usd', latest(ind('NY.GDP.PCAP.CD'))[1])} in ${latest(ind('NY.GDP.PCAP.CD'))[0]}.`,
    `<strong>From fields to cities.</strong> The urban share rose from ${fmtValue('pct', valueIn(ind('SP.URB.TOTL.IN.ZS'), 1960)[1])} in 1960 to ${fmtValue('pct', latest(ind('SP.URB.TOTL.IN.ZS'))[1])} in ${latest(ind('SP.URB.TOTL.IN.ZS'))[0]}.`,
    `<strong>Everyone online.</strong> Internet users went from ${fmtValue('pct', earliest(ind('IT.NET.USER.ZS'))[1])} in ${earliest(ind('IT.NET.USER.ZS'))[0]} to ${fmtValue('pct', latest(ind('IT.NET.USER.ZS'))[1])} of the population in ${latest(ind('IT.NET.USER.ZS'))[0]}.`,
  ];
  const sectionCards = SECTIONS.map((s) => {
    const list = indicatorsIn(s.id);
    return `<a class="section-card" href="#/${s.id}">
  <h3>${esc(s.title)}</h3>
  <p>${esc(s.intro)}</p>
  <span class="section-count">${list.length} indicators · ${esc(list.map((i) => i.name).slice(0, 3).join(' · '))}…</span>
</a>`;
  }).join('');
  return `<section class="hero">
  <p class="kicker">${esc(META.countryNote)}</p>
  <h1>China in Numbers</h1>
  <p class="lede">Six decades of national statistics — population, the economy and everyday life — drawn from the World Bank’s World Development Indicators and held in this site’s own files, so every page works offline. Pick a headline figure or a section and follow it to the full series, with the source and year on every number.</p>
</section>
<section class="stat-grid">${featuredIndicators().map(statCard).join('')}</section>
<section class="feature-charts">
  ${chartCard(pop, 240)}
  ${chartCard(gdp, 240)}
</section>
<section class="facts">
  <h2>Six decades in six facts</h2>
  <ol>${facts.map((f) => `<li>${f}</li>`).join('')}</ol>
</section>
<section class="section-grid">${sectionCards}</section>`;
}

// ---------- section pages ----------

export function sectionPage(section) {
  const list = indicatorsIn(section.id);
  let composites = '';
  if (section.id === 'population') {
    composites =
      compositeCard(
        'The changing age balance',
        [
          { data: ind('SP.POP.1564.TO.ZS').series, color: PALETTE[1], label: 'Ages 15–64' },
          { data: ind('SP.POP.0014.TO.ZS').series, color: PALETTE[0], label: 'Ages 0–14' },
          { data: ind('SP.POP.65UP.TO.ZS').series, color: PALETTE[2], label: 'Ages 65 and over' },
        ],
        'pct',
        `Shares of total population. Source: ${META.source} · series to 2024`,
      ) +
      compositeCard(
        'Town and country',
        [
          { data: ind('SP.URB.TOTL.IN.ZS').series, color: PALETTE[0], label: 'Urban' },
          { data: ind('SP.RUR.TOTL.ZS').series, color: PALETTE[1], label: 'Rural' },
        ],
        'pct',
        `Shares of total population; the two lines crossed in 2011. Source: ${META.source} · series to 2024`,
      );
  }
  if (section.id === 'economy') {
    composites = compositeCard(
      'Two ways to size the economy',
      [
        { data: gdpSeries('NY.GDP.MKTP.PP.CD'), color: PALETTE[1], label: 'GDP at PPP' },
        { data: gdpSeries('NY.GDP.MKTP.CD'), color: PALETTE[0], label: 'GDP at market exchange rates' },
      ],
      'usd',
      `Current values as published; the PPP series starts in 1990. Source: ${META.source} · series to 2024`,
    );
  }
  return `<section class="page-head">
  <p class="kicker"><a href="#/">Overview</a> / ${esc(section.title)}</p>
  <h1>${esc(section.title)}</h1>
  <p class="lede">${esc(section.intro)} Every chart is a link away from its full series, its data table and its definition.</p>
</section>
${composites}
<section class="card-grid">${list.map((i) => chartCard(i)).join('')}</section>`;
}

const gdpSeries = (code) => ind(code).series;

// ---------- indicator page ----------

const RANGES = [
  { from: null, label: 'Full range' },
  { from: 1990, label: 'Since 1990' },
  { from: 2000, label: 'Since 2000' },
  { from: 2010, label: 'Since 2010' },
];

export function indicatorPage(i, rangeFrom) {
  const section = sectionOf(i.section);
  const [lastYear, lastValue] = latest(i);
  const [firstYear, firstValue] = earliest(i);
  const [pkYear, pkValue] = peak(i);
  const tableValue = (v) => (i.unit === 'people' || i.unit === 'sqkm' ? commas(v) : fmtValue(i.unit, v));
  const rows = [...i.series]
    .reverse()
    .map(([y, v]) => `<tr><td>${y}</td><td>${esc(tableValue(v))}</td></tr>`)
    .join('');
  const buttons = RANGES.map(
    (r) => `<button type="button" class="range-btn${r.from === rangeFrom ? ' active' : ''}" data-range="${r.from ?? ''}" data-code="${i.code}">${r.label}</button>`,
  ).join('');
  return `<section class="page-head">
  <p class="kicker"><a href="#/">Overview</a> / <a href="#/${section.id}">${esc(section.title)}</a> / ${esc(i.name)}</p>
  <h1>${esc(i.name)}</h1>
  <p class="lede">${esc(i.blurb)}</p>
</section>
<section class="indicator-top">
  <div class="big-stat">
    <span class="stat-value">${esc(fmtValue(i.unit, lastValue))}</span>
    <span class="stat-meta">latest · ${lastYear}</span>
    <dl class="mini-dl">
      <div><dt>In ${firstYear}</dt><dd>${esc(fmtValue(i.unit, firstValue))}</dd></div>
      <div><dt>Peak</dt><dd>${esc(fmtValue(i.unit, pkValue))} · ${pkYear}</dd></div>
      <div><dt>Change</dt><dd>${esc(changeText(i))}</dd></div>
    </dl>
  </div>
  <div class="big-chart">
    <div class="range-row" role="group" aria-label="Chart range">${buttons}</div>
    ${lineChart([{ data: i.series, color: PALETTE[0] }], { unit: i.unit, height: 300, from: rangeFrom, area: true })}
    <p class="card-foot"><span>${esc(sourceLine(i))}</span></p>
  </div>
</section>
<section class="indicator-detail">
  <div class="about-indicator">
    <h2>About this indicator</h2>
    <dl class="def-dl">
      <div><dt>World Bank series</dt><dd>${esc(i.sourceName)} (${esc(i.code)})</dd></div>
      <div><dt>Definition</dt><dd>${esc(i.sourceNote)}</dd></div>
      <div><dt>Underlying source</dt><dd>${esc(i.sourceOrg)}</dd></div>
      <div><dt>Dataset</dt><dd>${esc(META.source)}, retrieved ${esc(META.retrieved)}</dd></div>
    </dl>
  </div>
  <div class="data-table">
    <h2>The figures, year by year</h2>
    <table>
      <thead><tr><th>Year</th><th>${esc(i.name)}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
</section>
<nav class="pager"><a href="#/${section.id}">← All of ${esc(section.title)}</a></nav>`;
}

// ---------- about & missing ----------

export function aboutPage() {
  return `<section class="page-head">
  <p class="kicker"><a href="#/">Overview</a> / About</p>
  <h1>About this site</h1>
  <p class="lede">China in Numbers is a small, self-contained reference: the headline statistics of one country, with the full series behind every figure and the source named on the page.</p>
</section>
<section class="prose">
  <h2>Where the figures come from</h2>
  <p>Every number here is from the <strong>World Bank’s World Development Indicators</strong>, retrieved on ${esc(META.retrieved)}. The Bank in turn republishes series from the United Nations Population Division, China’s National Bureau of Statistics, the IMF, UNESCO, the ILO and others; each indicator page names the underlying source and repeats the Bank’s own definition of the series. The data is published by the World Bank under CC BY 4.0; this site’s own code and text are under the MIT License.</p>
  <h2>How to read the figures</h2>
  <p>Money figures are in <strong>current US dollars</strong> as published — they are not adjusted for inflation, so a 1960 dollar and a 2024 dollar are not the same thing; the PPP series values output at international prices instead. Rates marked “crude”, such as the birth rate, are per 1,000 people in the population. The poverty line is $3.00 a day at 2021 purchasing power parity, the Bank’s international extreme-poverty line. Literacy is measured only in census years, which is why its series has five points. Where a series has no value for a year, the Bank publishes none, and the chart line simply starts later.</p>
  <h2>Why it works offline</h2>
  <p>The site is plain static files: the data sits in <em>data.js</em> beside the pages, the charts are drawn as SVG by the site’s own code, and nothing is fetched from anywhere. Save the folder and it works on a plane.</p>
  <h2>Coverage</h2>
  <p>${SECTIONS.map((s) => `<a href="#/${s.id}">${esc(s.title)}</a> (${indicatorsIn(s.id).length} indicators)`).join(' · ')} — most series run from 1960 to 2024.</p>
</section>`;
}

export function missingPage() {
  return `<section class="page-head">
  <h1>Not found</h1>
  <p class="lede">There is no page at this address. <a href="#/">Go to the overview</a> and pick a section.</p>
</section>`;
}
