// Number formatting and small series helpers, shared by every page. Values are rendered from the unit each
// indicator declares in data.js, so a figure always carries the right scale and suffix.

const trim = (s) => s.replace(/\.0+$|(\.\d*?)0+$/, '$1');

export function commas(v) {
  return Math.round(v).toLocaleString('en-US');
}

// Compact scale for the big money and population series: $18.73 trillion, 1.409 billion.
function scaled(v, prefix) {
  const a = Math.abs(v);
  if (a >= 1e12) return `${prefix}${trim((v / 1e12).toFixed(2))} trillion`;
  if (a >= 1e9) return `${prefix}${trim((v / 1e9).toFixed(2))} billion`;
  if (a >= 1e6) return `${prefix}${trim((v / 1e6).toFixed(1))} million`;
  return `${prefix}${commas(v)}`;
}

export function fmtValue(unit, v) {
  switch (unit) {
    case 'people': return scaled(v, '');
    case 'usd': return scaled(v, '$');
    case 'intl': return scaled(v, 'int$');
    case 'pct': return `${trim(v.toFixed(2))}%`;
    case 'years': return `${trim(v.toFixed(1))} years`;
    case 'per1000': return `${trim(v.toFixed(1))} per 1,000`;
    case 'births': return trim(v.toFixed(2));
    case 'density': return `${commas(v)} per km²`;
    case 'sqkm': return `${commas(v)} km²`;
    default: return String(v);
  }
}

// Shorter labels for chart axes: $18.7T, 1.4B, 66%, 78.
export function fmtAxis(unit, v) {
  const a = Math.abs(v);
  switch (unit) {
    case 'people':
      if (a >= 1e9) return `${trim((v / 1e9).toFixed(2))}B`;
      if (a >= 1e6) return `${trim((v / 1e6).toFixed(0))}M`;
      return commas(v);
    case 'usd':
    case 'intl': {
      const p = unit === 'usd' ? '$' : 'int$';
      if (a >= 1e12) return `${p}${trim((v / 1e12).toFixed(1))}T`;
      if (a >= 1e9) return `${p}${trim((v / 1e9).toFixed(0))}B`;
      if (a >= 1e6) return `${p}${trim((v / 1e6).toFixed(0))}M`;
      if (a >= 1e3) return `${p}${trim((v / 1e3).toFixed(0))}k`;
      return `${p}${commas(v)}`;
    }
    case 'pct': return `${trim(v.toFixed(1))}%`;
    case 'per1000': return trim(v.toFixed(0));
    case 'density': return commas(v);
    case 'sqkm': return `${trim((v / 1e6).toFixed(1))}M`;
    default: return trim(v.toFixed(1));
  }
}

export const latest = (ind) => ind.series[ind.series.length - 1];
export const earliest = (ind) => ind.series[0];
export const peak = (ind) => ind.series.reduce((a, b) => (b[1] > a[1] ? b : a));
export const valueIn = (ind, year) => ind.series.find(([y]) => y === year);

// "from X in YEAR" change line used on cards: +118% since 1960, or a plain difference for percentages.
export function changeText(ind) {
  const [y0, v0] = earliest(ind);
  const [, v1] = latest(ind);
  if (ind.unit === 'pct' || ind.unit === 'years' || ind.unit === 'per1000' || ind.unit === 'births') {
    const d = v1 - v0;
    const unitWord = ind.unit === 'pct' ? ' points' : ind.unit === 'years' ? ' years' : '';
    return `${d >= 0 ? '+' : ''}${trim(d.toFixed(1))}${unitWord} since ${y0}`;
  }
  if (v0 === 0) return `since ${y0}`;
  const ratio = v1 / v0;
  if (ratio >= 2) return `${trim(ratio.toFixed(1))}× the ${y0} figure`;
  const pctChange = ((v1 - v0) / Math.abs(v0)) * 100;
  return `${pctChange >= 0 ? '+' : ''}${trim(pctChange.toFixed(0))}% since ${y0}`;
}
