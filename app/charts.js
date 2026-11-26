// Hand-rolled SVG charts: no library, so the first load stays small and every line of chart code is the
// site's own. lineChart takes one or more series of [year, value] pairs and draws axes, gridlines and an
// end dot for each series; views add legends and captions around it.

import { fmtAxis } from './format.js';

export const PALETTE = ['#b3352b', '#20506e', '#b98a2f', '#5b7553'];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);

// seriesList: [{ data: [[year, value], ...], color }] — opts: { unit, height, from, to, area }
export function lineChart(seriesList, opts = {}) {
  const { unit = '', height = 260, from = null, to = null, area = false } = opts;
  const W = 720;
  const H = height;
  const padL = 58;
  const padR = 14;
  const padT = 12;
  const padB = 26;

  const series = seriesList
    .map((s) => ({ ...s, data: s.data.filter(([y]) => (from === null || y >= from) && (to === null || y <= to)) }))
    .filter((s) => s.data.length > 1);
  if (!series.length) return '<p class="chart-empty">No data in this range.</p>';

  const years = series.flatMap((s) => s.data.map(([y]) => y));
  const values = series.flatMap((s) => s.data.map(([, v]) => v));
  const x0 = Math.min(...years);
  const x1 = Math.max(...years);
  let lo = Math.min(...values);
  let hi = Math.max(...values);
  if (lo < 0) lo = Math.min(lo * 1.1, 0 - (hi - lo) * 0.05);
  if (lo > 0 && hi > 0) lo = lo - (hi - lo) * 0.12;
  if (Math.min(...values) >= 0 && lo < 0) lo = 0; // an all-positive series never gets a negative axis
  hi = hi + (hi - lo) * 0.08;
  if (hi === lo) hi = lo + 1;

  const X = (y) => padL + ((y - x0) / (x1 - x0 || 1)) * (W - padL - padR);
  const Y = (v) => padT + (1 - (v - lo) / (hi - lo)) * (H - padT - padB);

  const parts = [];
  // Horizontal gridlines with value labels, four steps.
  for (let i = 0; i <= 4; i++) {
    const v = lo + ((hi - lo) * i) / 4;
    const y = Y(v);
    const isZero = lo < 0 && hi > 0 && Math.abs(v) < (hi - lo) / 1000;
    parts.push(`<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W - padR}" y2="${y.toFixed(1)}" class="${isZero ? 'grid-zero' : 'grid'}"/>`);
    parts.push(`<text x="${padL - 8}" y="${(y + 4).toFixed(1)}" class="tick" text-anchor="end">${esc(fmtAxis(unit, v))}</text>`);
  }
  // Year ticks: first, last and three between.
  const tickYears = [x0, ...[0.25, 0.5, 0.75].map((f) => Math.round(x0 + (x1 - x0) * f)), x1];
  for (const y of [...new Set(tickYears)]) {
    parts.push(`<text x="${X(y).toFixed(1)}" y="${H - 6}" class="tick" text-anchor="middle">${y}</text>`);
  }
  // Series paths, with an optional soft area under the first one.
  series.forEach((s, idx) => {
    const pts = s.data.map(([y, v]) => [X(y), Y(v)]);
    const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    if (area && idx === 0) {
      const base = Y(Math.max(lo, Math.min(0, hi)));
      parts.push(`<path d="${d} L${pts[pts.length - 1][0].toFixed(1)},${base.toFixed(1)} L${pts[0][0].toFixed(1)},${base.toFixed(1)} Z" class="area" fill="${s.color}"/>`);
    }
    parts.push(`<path d="${d}" class="line" stroke="${s.color}"/>`);
    const [lx, ly] = pts[pts.length - 1];
    parts.push(`<circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="3.5" fill="${s.color}"/>`);
  });

  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Line chart">${parts.join('')}</svg>`;
}
