// The site's dataset: China in the World Bank's World Development Indicators, fetched 26 November 2026
// and held in this file so the site needs no network. Every series is [year, value] pairs in year order.
// Each indicator keeps the Bank's own definition note as sourceNote; the About page explains the source.

export const META = {
  "country": "China",
  "countryNote": "People’s Republic of China · land area 9,388,210 km² (2024)",
  "source": "World Bank, World Development Indicators",
  "retrieved": "26 November 2026",
  "dataLicense": "World Bank data is published under CC BY 4.0."
};

export const SECTIONS = [
  {
    "id": "population",
    "title": "Population",
    "intro": "How many people, where they live, and how the age balance is shifting."
  },
  {
    "id": "economy",
    "title": "Economy",
    "intro": "The size of the economy, income per person, prices and work."
  },
  {
    "id": "society",
    "title": "Society",
    "intro": "Health, learning, connectivity and the end of extreme poverty."
  }
];

export const INDICATORS = [
{
  "code": "SP.POP.TOTL",
  "name": "Population",
  "unit": "people",
  "section": "population",
  "featured": true,
  "blurb": "The total population of China grew from 667 million in 1960 to a peak of 1.412 billion in 2021. It has edged down since, to 1.409 billion in 2024 — the first sustained decline in six decades.",
  "sourceName": "Population, total",
  "sourceNote": "Total population is based on the de facto definition of population, which counts all residents regardless of legal status or citizenship. The values shown are midyear estimates.",
  "sourceOrg": "World Population Prospects, United Nations (UN)",
  "series": [[1960,667070000],[1961,660330000],[1962,665770000],[1963,682335000],[1964,698355000],[1965,715185000],[1966,735400000],[1967,754550000],[1968,774510000],[1969,796025000],[1970,818315000],[1971,841105000],[1972,862030000],[1973,881940000],[1974,900350000],[1975,916395000],[1976,930685000],[1977,943455000],[1978,956165000],[1979,969005000],[1980,981235000],[1981,993885000],[1982,1008630000],[1983,1023310000],[1984,1036825000],[1985,1051040000],[1986,1066790000],[1987,1084035000],[1988,1101630000],[1989,1118650000],[1990,1135185000],[1991,1150780000],[1992,1164970000],[1993,1178440000],[1994,1191835000],[1995,1204855000],[1996,1217550000],[1997,1230075000],[1998,1241935000],[1999,1252735000],[2000,1262645000],[2001,1271850000],[2002,1280400000],[2003,1288400000],[2004,1296075000],[2005,1303720000],[2006,1311020000],[2007,1317885000],[2008,1324655000],[2009,1331260000],[2010,1337705000],[2011,1345035000],[2012,1354190000],[2013,1363240000],[2014,1371860000],[2015,1379860000],[2016,1387790000],[2017,1396215000],[2018,1402760000],[2019,1407745000],[2020,1411100000],[2021,1412360000],[2022,1412175000],[2023,1410710000],[2024,1408975000]]
},
{
  "code": "SP.POP.GROW",
  "name": "Population growth",
  "unit": "pct",
  "section": "population",
  "blurb": "Annual population growth swung from nearly 2.8% in the mid-1960s to below zero in 2022, as births fell under deaths for the first time since 1961.",
  "sourceName": "Population growth (annual %)",
  "sourceNote": "Annual population growth rate for year t is the exponential rate of growth of midyear population from year t-1 to t, expressed as a percentage. Population is based on the de facto definition of population, which counts all residents regardless of legal status or citizenship.",
  "sourceOrg": "World Population Prospects, United Nations (UN), note: Derived from total population",
  "series": [[1961,-1.016],[1962,0.82],[1963,2.458],[1964,2.321],[1965,2.381],[1966,2.787],[1967,2.571],[1968,2.611],[1969,2.74],[1970,2.762],[1971,2.747],[1972,2.457],[1973,2.283],[1974,2.066],[1975,1.766],[1976,1.547],[1977,1.363],[1978,1.338],[1979,1.334],[1980,1.254],[1981,1.281],[1982,1.473],[1983,1.445],[1984,1.312],[1985,1.362],[1986,1.487],[1987,1.604],[1988,1.61],[1989,1.533],[1990,1.467],[1991,1.364],[1992,1.226],[1993,1.15],[1994,1.13],[1995,1.087],[1996,1.048],[1997,1.023],[1998,0.96],[1999,0.866],[2000,0.788],[2001,0.726],[2002,0.67],[2003,0.623],[2004,0.594],[2005,0.588],[2006,0.558],[2007,0.522],[2008,0.512],[2009,0.497],[2010,0.483],[2011,0.546],[2012,0.678],[2013,0.666],[2014,0.63],[2015,0.581],[2016,0.573],[2017,0.605],[2018,0.468],[2019,0.355],[2020,0.238],[2021,0.089],[2022,-0.013],[2023,-0.104],[2024,-0.123]]
},
{
  "code": "SP.DYN.CBRT.IN",
  "name": "Birth rate",
  "unit": "per1000",
  "section": "population",
  "blurb": "The crude birth rate — births per 1,000 people — fell from 20.9 in 1960, and from a rebound peak of 43.4 in 1963, to 6.8 in 2024.",
  "sourceName": "Birth rate, crude (per 1,000 people)",
  "sourceNote": "Crude birth rate indicates the number of live births occurring during the year, per 1,000 population estimated at midyear. Subtracting the crude death rate from the crude birth rate provides the rate of natural increase, which is equal to the rate of population change in the absence of migration.",
  "sourceOrg": "World Population Prospects, United Nations (UN)",
  "series": [[1960,20.86],[1961,18.02],[1962,37.01],[1963,43.37],[1964,39.14],[1965,37.88],[1966,35.05],[1967,33.96],[1968,35.59],[1969,34.11],[1970,33.43],[1971,30.65],[1972,29.77],[1973,27.93],[1974,24.82],[1975,23.01],[1976,19.91],[1977,18.93],[1978,18.25],[1979,17.82],[1980,18.21],[1981,20.91],[1982,22.28],[1983,20.19],[1984,19.9],[1985,21.04],[1986,22.43],[1987,23.33],[1988,22.37],[1989,21.58],[1990,21.06],[1991,19.68],[1992,18.27],[1993,18.09],[1994,17.7],[1995,17.12],[1996,16.98],[1997,16.57],[1998,15.64],[1999,14.64],[2000,14.03],[2001,13.38],[2002,12.86],[2003,12.41],[2004,12.29],[2005,12.4],[2006,12.09],[2007,12.1],[2008,12.14],[2009,11.95],[2010,11.9],[2011,13.27],[2012,14.57],[2013,13.03],[2014,13.83],[2015,11.99],[2016,13.57],[2017,12.64],[2018,10.86],[2019,10.41],[2020,8.52],[2021,7.52],[2022,6.77],[2023,6.39],[2024,6.77]]
},
{
  "code": "SP.DYN.CDRT.IN",
  "name": "Death rate",
  "unit": "per1000",
  "section": "population",
  "blurb": "The crude death rate dropped from 25.4 per 1,000 people in 1960 to around 7 in the 2000s, and has risen slightly since, to 7.8 in 2024, as the population ages.",
  "sourceName": "Death rate, crude (per 1,000 people)",
  "sourceNote": "Crude death rate indicates the number of deaths occurring during the year, per 1,000 population estimated at midyear. Subtracting the crude death rate from the crude birth rate provides the rate of natural increase, which is equal to the rate of population change in the absence of migration.",
  "sourceOrg": "World Population Prospects, United Nations (UN)",
  "series": [[1960,25.43],[1961,14.24],[1962,10.02],[1963,10.04],[1964,11.5],[1965,9.5],[1966,8.83],[1967,8.43],[1968,8.21],[1969,8.03],[1970,7.6],[1971,7.32],[1972,7.61],[1973,7.04],[1974,7.34],[1975,7.32],[1976,7.25],[1977,6.87],[1978,6.25],[1979,6.21],[1980,6.34],[1981,6.36],[1982,6.6],[1983,6.9],[1984,6.82],[1985,6.78],[1986,6.86],[1987,6.72],[1988,6.64],[1989,6.54],[1990,6.67],[1991,6.7],[1992,6.64],[1993,6.64],[1994,6.49],[1995,6.57],[1996,6.56],[1997,6.51],[1998,6.5],[1999,6.46],[2000,6.45],[2001,6.43],[2002,6.41],[2003,6.4],[2004,6.42],[2005,6.51],[2006,6.81],[2007,6.93],[2008,7.06],[2009,7.08],[2010,7.11],[2011,7.14],[2012,7.13],[2013,7.13],[2014,7.12],[2015,7.07],[2016,7.04],[2017,7.06],[2018,7.08],[2019,7.09],[2020,7.07],[2021,7.18],[2022,7.37],[2023,7.87],[2024,7.76]]
},
{
  "code": "SP.DYN.TFRT.IN",
  "name": "Fertility rate",
  "unit": "births",
  "section": "population",
  "blurb": "Births per woman fell from 4.5 in 1960 to about 1.0 in 2024 — well under the replacement level of 2.1 — after peaking at 7.5 in 1963.",
  "sourceName": "Fertility rate, total (births per woman)",
  "sourceNote": "Total fertility rate represents the number of children that would be born to a woman if she were to live to the end of her childbearing years and bear children in accordance with age-specific fertility rates of the specified year.",
  "sourceOrg": "World Population Prospects, United Nations (UN)",
  "series": [[1960,4.451],[1961,3.863],[1962,6.085],[1963,7.513],[1964,6.672],[1965,6.605],[1966,6.307],[1967,5.806],[1968,6.508],[1969,6.175],[1970,6.085],[1971,5.523],[1972,5.112],[1973,4.726],[1974,4.17],[1975,3.571],[1976,3.235],[1977,2.844],[1978,2.716],[1979,2.745],[1980,2.739],[1981,2.792],[1982,2.972],[1983,2.559],[1984,2.607],[1985,2.633],[1986,2.721],[1987,2.76],[1988,2.539],[1989,2.52],[1990,2.514],[1991,1.934],[1992,1.776],[1993,1.691],[1994,1.628],[1995,1.588],[1996,1.554],[1997,1.527],[1998,1.522],[1999,1.53],[2000,1.628],[2001,1.563],[2002,1.566],[2003,1.57],[2004,1.605],[2005,1.624],[2006,1.644],[2007,1.666],[2008,1.701],[2009,1.714],[2010,1.687],[2011,1.668],[2012,1.798],[2013,1.714],[2014,1.769],[2015,1.67],[2016,1.772],[2017,1.795],[2018,1.539],[2019,1.496],[2020,1.236],[2021,1.117],[2022,1.034],[2023,0.999],[2024,1.013]]
},
{
  "code": "SP.URB.TOTL.IN.ZS",
  "name": "Urban population",
  "unit": "pct",
  "section": "population",
  "featured": true,
  "blurb": "One in five Chinese lived in a town or city in 1960. Urbanisation passed 50% in 2011 and reached 65.9% in 2024, one of the largest rural-to-urban shifts in history.",
  "sourceName": "Urban population (% of total population)",
  "sourceNote": "Urban population refers to people living in urban areas as defined by national statistical offices. The data are collected and smoothed by United Nations Population Division.",
  "sourceOrg": "World Urbanization Prospects, United Nations (UN)",
  "series": [[1960,19.746],[1961,19.294],[1962,17.325],[1963,16.836],[1964,18.3],[1965,17.984],[1966,17.86],[1967,17.74],[1968,17.62],[1969,17.499],[1970,17.38],[1971,17.261],[1972,17.132],[1973,17.201],[1974,17.164],[1975,17.345],[1976,17.437],[1977,17.551],[1978,17.915],[1979,18.961],[1980,19.391],[1981,20.156],[1982,20.566],[1983,21.624],[1984,23.014],[1985,23.707],[1986,24.525],[1987,25.319],[1988,25.815],[1989,26.21],[1990,26.196],[1991,26.94],[1992,27.46],[1993,27.99],[1994,28.51],[1995,29.04],[1996,30.48],[1997,31.91],[1998,33.35],[1999,34.78],[2000,36.432],[2001,37.66],[2002,39.09],[2003,40.53],[2004,41.76],[2005,42.99],[2006,44.343],[2007,45.889],[2008,46.99],[2009,48.342],[2010,49.234],[2011,51.83],[2012,53.1],[2013,54.49],[2014,55.75],[2015,57.33],[2016,58.84],[2017,60.24],[2018,61.5],[2019,62.71],[2020,63.523],[2021,64.721],[2022,65.218],[2023,65.53],[2024,65.895]]
},
{
  "code": "SP.RUR.TOTL.ZS",
  "name": "Rural population",
  "unit": "pct",
  "section": "population",
  "blurb": "The rural share is the mirror of urbanisation: 80.3% of the population in 1960, down to 34.1% in 2024.",
  "sourceName": "Rural population (% of total population)",
  "sourceNote": "Rural population refers to people living in rural areas as defined by national statistical offices. It is calculated as the difference between total population and urban population.",
  "sourceOrg": "World Urbanization Prospects, United Nations (UN)",
  "series": [[1960,80.254],[1961,80.706],[1962,82.675],[1963,83.164],[1964,81.7],[1965,82.016],[1966,82.14],[1967,82.26],[1968,82.38],[1969,82.501],[1970,82.62],[1971,82.739],[1972,82.868],[1973,82.799],[1974,82.836],[1975,82.655],[1976,82.563],[1977,82.449],[1978,82.085],[1979,81.039],[1980,80.609],[1981,79.844],[1982,79.434],[1983,78.376],[1984,76.986],[1985,76.293],[1986,75.475],[1987,74.681],[1988,74.185],[1989,73.79],[1990,73.804],[1991,73.06],[1992,72.54],[1993,72.01],[1994,71.49],[1995,70.96],[1996,69.52],[1997,68.09],[1998,66.65],[1999,65.22],[2000,63.568],[2001,62.34],[2002,60.91],[2003,59.47],[2004,58.24],[2005,57.01],[2006,55.657],[2007,54.111],[2008,53.01],[2009,51.658],[2010,50.766],[2011,48.17],[2012,46.9],[2013,45.51],[2014,44.25],[2015,42.67],[2016,41.16],[2017,39.76],[2018,38.5],[2019,37.29],[2020,36.477],[2021,35.279],[2022,34.782],[2023,34.47],[2024,34.105]]
},
{
  "code": "SP.POP.0014.TO.ZS",
  "name": "Population ages 0–14",
  "unit": "pct",
  "section": "population",
  "blurb": "Children were 40.3% of the population in 1960. Their share fell almost every year since, to 16.0% in 2024.",
  "sourceName": "Population ages 0-14 (% of total population)",
  "sourceNote": "Population between the ages 0 to 14 as a percentage of the total population. Population is based on the de facto definition of population.",
  "sourceOrg": "United Nations Population Division. World Population Prospects., United Nations Population Division",
  "series": [[1960,40.334],[1961,39.954],[1962,39.961],[1963,40.595],[1964,41.202],[1965,41.458],[1966,41.513],[1967,41.276],[1968,41.039],[1969,40.955],[1970,40.793],[1971,40.654],[1972,40.398],[1973,40.15],[1974,40.163],[1975,40.245],[1976,40.286],[1977,39.822],[1978,38.566],[1979,37.223],[1980,36.097],[1981,35.071],[1982,34.258],[1983,33.332],[1984,32.236],[1985,31.242],[1986,30.413],[1987,29.819],[1988,29.326],[1989,28.948],[1990,28.798],[1991,28.649],[1992,28.402],[1993,28.152],[1994,27.835],[1995,27.434],[1996,26.951],[1997,26.338],[1998,25.735],[1999,25.173],[2000,24.544],[2001,23.806],[2002,22.928],[2003,22.043],[2004,21.186],[2005,20.294],[2006,19.592],[2007,19.17],[2008,18.867],[2009,18.646],[2010,18.474],[2011,18.342],[2012,18.297],[2013,18.305],[2014,18.329],[2015,18.318],[2016,18.305],[2017,18.353],[2018,18.328],[2019,18.197],[2020,17.955],[2021,17.582],[2022,17.122],[2023,16.59],[2024,16.008]]
},
{
  "code": "SP.POP.1564.TO.ZS",
  "name": "Population ages 15–64",
  "unit": "pct",
  "section": "population",
  "blurb": "The working-age share rose from 55.7% in 1960 to a peak of 72.9% in 2010 — the demographic dividend years — and has since eased to 69.3%.",
  "sourceName": "Population ages 15-64 (% of total population)",
  "sourceNote": "Total population between the ages 15 to 64 as a percentage of the total population. Population is based on the de facto definition of population, which counts all residents regardless of legal status or citizenship.",
  "sourceOrg": "World Population Prospects, United Nations (UN), publisher: UN Population Division",
  "series": [[1960,55.7],[1961,56.164],[1962,56.216],[1963,55.65],[1964,55.111],[1965,54.897],[1966,54.855],[1967,55.082],[1968,55.3],[1969,55.362],[1970,55.499],[1971,55.606],[1972,55.828],[1973,56.032],[1974,55.956],[1975,55.803],[1976,55.697],[1977,56.091],[1978,57.255],[1979,58.488],[1980,59.508],[1981,60.438],[1982,61.164],[1983,62.007],[1984,63.015],[1985,63.911],[1986,64.643],[1987,65.15],[1988,65.552],[1989,65.82],[1990,65.857],[1991,65.898],[1992,66.021],[1993,66.121],[1994,66.28],[1995,66.513],[1996,66.824],[1997,67.26],[1998,67.662],[1999,68.012],[2000,68.438],[2001,68.98],[2002,69.67],[2003,70.377],[2004,71.076],[2005,71.816],[2006,72.354],[2007,72.617],[2008,72.778],[2009,72.856],[2010,72.864],[2011,72.799],[2012,72.613],[2013,72.338],[2014,72.005],[2015,71.628],[2016,71.204],[2017,70.666],[2018,70.155],[2019,69.741],[2020,69.4],[2021,69.212],[2022,69.096],[2023,69.094],[2024,69.327]]
},
{
  "code": "SP.POP.65UP.TO.ZS",
  "name": "Population ages 65 and over",
  "unit": "pct",
  "section": "population",
  "blurb": "People aged 65 and over were 4.0% of the population in 1960 and 14.7% in 2024. China crossed the 14% line that demographers call an aged society in 2021.",
  "sourceName": "Population ages 65 and above (% of total population)",
  "sourceNote": "Population ages 65 and above as a percentage of the total population. Population is based on the de facto definition of population, which counts all residents regardless of legal status or citizenship.",
  "sourceOrg": "World Population Prospects, United Nations (UN), publisher: UN Population Division",
  "series": [[1960,3.966],[1961,3.882],[1962,3.824],[1963,3.755],[1964,3.687],[1965,3.645],[1966,3.632],[1967,3.642],[1968,3.661],[1969,3.683],[1970,3.708],[1971,3.739],[1972,3.774],[1973,3.818],[1974,3.881],[1975,3.952],[1976,4.017],[1977,4.086],[1978,4.179],[1979,4.289],[1980,4.395],[1981,4.491],[1982,4.578],[1983,4.66],[1984,4.749],[1985,4.847],[1986,4.944],[1987,5.031],[1988,5.122],[1989,5.233],[1990,5.345],[1991,5.453],[1992,5.577],[1993,5.727],[1994,5.885],[1995,6.053],[1996,6.225],[1997,6.401],[1998,6.603],[1999,6.815],[2000,7.017],[2001,7.214],[2002,7.402],[2003,7.58],[2004,7.737],[2005,7.89],[2006,8.054],[2007,8.213],[2008,8.355],[2009,8.498],[2010,8.661],[2011,8.859],[2012,9.089],[2013,9.356],[2014,9.666],[2015,10.053],[2016,10.491],[2017,10.981],[2018,11.516],[2019,12.061],[2020,12.645],[2021,13.206],[2022,13.782],[2023,14.316],[2024,14.665]]
},
{
  "code": "EN.POP.DNST",
  "name": "Population density",
  "unit": "density",
  "section": "population",
  "blurb": "People per square kilometre of land area doubled from 70 in 1961 to 150 in 2024, tracking the rise in total population.",
  "sourceName": "Population density (people per sq. km of land area)",
  "sourceNote": "Population density is midyear population divided by land area in square kilometers. Population is based on the de facto definition of population, which counts all residents regardless of legal status or citizenship--except for refugees not permanently settled in the country of asylum, who are generally considered part of the population of",
  "sourceOrg": "FAO population estimates, Food and Agriculture Organization of the United Nations (FAO)",
  "series": [[1961,70.3],[1962,70.9],[1963,72.7],[1964,74.4],[1965,76.2],[1966,78.3],[1967,80.4],[1968,82.5],[1969,84.8],[1970,87.2],[1971,89.6],[1972,91.8],[1973,93.9],[1974,95.9],[1975,97.6],[1976,99.1],[1977,100.5],[1978,101.8],[1979,103.2],[1980,104.5],[1981,105.9],[1982,107.4],[1983,109],[1984,110.4],[1985,112],[1986,113.6],[1987,115.5],[1988,117.3],[1989,119.2],[1990,120.9],[1991,122.6],[1992,124.1],[1993,125.5],[1994,126.9],[1995,128.3],[1996,129.7],[1997,131],[1998,132.3],[1999,133.4],[2000,134.5],[2001,135.5],[2002,136.4],[2003,137.2],[2004,138.1],[2005,138.9],[2006,139.6],[2007,140.4],[2008,141.1],[2009,141.8],[2010,142.5],[2011,143.3],[2012,144.2],[2013,145.2],[2014,146.1],[2015,147],[2016,147.8],[2017,148.7],[2018,149.4],[2019,149.9],[2020,150.3],[2021,150.4],[2022,150.4],[2023,150.3],[2024,150.1]]
},
{
  "code": "AG.LND.TOTL.K2",
  "name": "Land area",
  "unit": "sqkm",
  "section": "population",
  "blurb": "China’s land area is 9.39 million square kilometres, the third largest of any country. The series is near constant; small steps reflect survey revisions.",
  "sourceName": "Land area (sq. km)",
  "sourceNote": "Land area is a country's total area, excluding area under inland water bodies, national claims to continental shelf, and exclusive economic zones. In most cases the definition of inland water bodies includes major rivers and lakes.",
  "sourceOrg": "FAOSTAT, Food and Agriculture Organization of the United Nations (FAO)",
  "series": [[1961,9388250],[1962,9388250],[1963,9388250],[1964,9388250],[1965,9388250],[1966,9388250],[1967,9388250],[1968,9388250],[1969,9388250],[1970,9388250],[1971,9388250],[1972,9388250],[1973,9388250],[1974,9388250],[1975,9388250],[1976,9388250],[1977,9388250],[1978,9388250],[1979,9388250],[1980,9388250],[1981,9388250],[1982,9388250],[1983,9388250],[1984,9388250],[1985,9388250],[1986,9388250],[1987,9388250],[1988,9388250],[1989,9388250],[1990,9388250],[1991,9388250],[1992,9388250],[1993,9388250],[1994,9388250],[1995,9388240],[1996,9388230],[1997,9388230],[1998,9388230],[1999,9388230],[2000,9388220],[2001,9388214],[2002,9388213],[2003,9388213],[2004,9388213],[2005,9388212],[2006,9388211],[2007,9388211],[2008,9388211],[2009,9388211],[2010,9388211],[2011,9388211],[2012,9388211],[2013,9388211],[2014,9388211],[2015,9388211],[2016,9388210],[2017,9388210],[2018,9388210],[2019,9388210],[2020,9388210],[2021,9388210],[2022,9388210],[2023,9388210],[2024,9388210]]
},
{
  "code": "NY.GDP.MKTP.CD",
  "name": "GDP",
  "unit": "usd",
  "section": "economy",
  "featured": true,
  "blurb": "Gross domestic product in current US dollars grew from $59.8 billion in 1960 to $18.73 trillion in 2024 — roughly a 300-fold increase, and the world’s second-largest economy since 2010.",
  "sourceName": "GDP (current US$)",
  "sourceNote": "Gross domestic product is the total income earned through the production of goods and services in an economic territory during an accounting period. It can be measured in three different ways: using either the expenditure approach, the income approach, or the production approach.",
  "sourceOrg": "Country official statistics, National Statistical Organizations and/or Central Banks; National Accounts data f",
  "series": [[1960,59846235025],[1961,50162299350],[1962,47310737754],[1963,50812227919],[1964,59821862703],[1965,70565994356],[1966,76854053259],[1967,73011350596],[1968,70980323819],[1969,79847786729],[1970,92752930873],[1971,99959013880],[1972,113871930714],[1973,138764340892],[1974,144418433058],[1975,163687619736],[1976,154196810059],[1977,175226595860],[1978,149788617886],[1979,178573913043],[1980,191487500000],[1981,196218253968],[1982,205480916031],[1983,231130268199],[1984,260442857143],[1985,310064625850],[1986,301310144928],[1987,273455156951],[1988,312888888889],[1989,348380566802],[1990,361560229446],[1991,384510452962],[1992,428502354788],[1993,446557291212],[1994,566929539493],[1995,738190896228],[1996,868523936530],[1997,967753570435],[1998,1037134141760],[1999,1103843203576],[2000,1223754919971],[2001,1355036590252],[2002,1489821682051],[2003,1683903309844],[2004,1984196551300],[2005,2317551298052],[2006,2791498472804],[2007,3604055822572],[2008,4667346414522],[2009,5189577094998],[2010,6192564874453],[2011,7671757207851],[2012,8673664713189],[2013,9743124247267],[2014,10674533168257],[2015,11280814787469],[2016,11456024084962],[2017,12537559062283],[2018,14147765772964],[2019,14560167101283],[2020,14996414166715],[2021,18201698719564],[2022,18316765021690],[2023,18270356654533],[2024,18729668435848]]
},
{
  "code": "NY.GDP.MKTP.PP.CD",
  "name": "GDP at purchasing power parity",
  "unit": "intl",
  "section": "economy",
  "blurb": "Measured at purchasing power parity, GDP reached 38.24 trillion international dollars in 2024 — the largest of any economy on this measure since the mid-2010s.",
  "sourceName": "GDP, PPP (current international $)",
  "sourceNote": "This indicator provides values for gross domestic product (GDP) expressed in current international dollars, converted by purchasing power parities (PPPs).",
  "sourceOrg": "International Comparison Program (ICP), World Bank (WB)",
  "series": [[1990,1124647401359],[1991,1271689537150],[1992,1486634304671],[1993,1733809877563],[1994,2002502773648],[1995,2269697941422],[1996,2541758457875],[1997,2825987413807],[1998,3084182650856],[1999,3369959391879],[2000,3741766224111],[2001,4144498831616],[2002,4597640556421],[2003,5162589666511],[2004,5839002583444],[2005,6711821784503],[2006,7795781407811],[2007,9140039997352],[2008,10216898947311],[2009,11246853891632],[2010,12589244234555],[2011,14064750800821],[2012,15465192010739],[2013,16670208037942],[2014,17754058548308],[2015,18577514881891],[2016,19647292057520],[2017,20974552138880],[2018,22862470132646],[2019,24777565958501],[2020,25777238693452],[2021,29438240129870],[2022,32520203910365],[2023,35549988086663],[2024,38238902604244]]
},
{
  "code": "NY.GDP.PCAP.CD",
  "name": "GDP per capita",
  "unit": "usd",
  "section": "economy",
  "featured": true,
  "blurb": "GDP per person rose from $90 in 1960 to $13,293 in 2024. China moved from low-income to upper-middle-income status over this span.",
  "sourceName": "GDP per capita (current US$)",
  "sourceNote": "Gross domestic product is the total income earned through the production of goods and services in an economic territory during an accounting period. It can be measured in three different ways: using either the expenditure approach, the income approach, or the production approach.",
  "sourceOrg": "Country official statistics, National Statistical Organizations and/or Central Banks; National Accounts data f",
  "series": [[1960,90],[1961,76],[1962,71],[1963,74],[1964,86],[1965,99],[1966,105],[1967,97],[1968,92],[1969,100],[1970,113],[1971,119],[1972,132],[1973,157],[1974,160],[1975,179],[1976,166],[1977,186],[1978,157],[1979,184],[1980,195],[1981,197],[1982,204],[1983,226],[1984,251],[1985,295],[1986,282],[1987,252],[1988,284],[1989,311],[1990,319],[1991,334],[1992,368],[1993,379],[1994,476],[1995,613],[1996,713],[1997,787],[1998,835],[1999,881],[2000,969],[2001,1065],[2002,1164],[2003,1307],[2004,1531],[2005,1778],[2006,2129],[2007,2735],[2008,3523],[2009,3898],[2010,4629],[2011,5704],[2012,6405],[2013,7147],[2014,7781],[2015,8175],[2016,8255],[2017,8980],[2018,10086],[2019,10343],[2020,10627],[2021,12887],[2022,12971],[2023,12951],[2024,13293]]
},
{
  "code": "NY.GNP.PCAP.CD",
  "name": "GNI per capita (Atlas method)",
  "unit": "usd",
  "section": "economy",
  "blurb": "Gross national income per person on the World Bank’s Atlas method was $13,660 in 2024, just under the high-income threshold the Bank sets each year.",
  "sourceName": "GNI per capita, Atlas method (current US$)",
  "sourceNote": "Gross national income is the total income earned by all residents within an economic territory during an accounting period. It is equal to gross domestic product plus earned income receivable from abroad minus earned income payable abroad. This figure is converted to U.S.",
  "sourceOrg": "Country official statistics, National Statistical Organizations and/or Central Banks; National Accounts data f",
  "series": [[1962,70],[1963,80],[1964,90],[1965,100],[1966,110],[1967,100],[1968,90],[1969,110],[1970,120],[1971,130],[1972,130],[1973,160],[1974,180],[1975,200],[1976,190],[1977,200],[1978,200],[1979,210],[1980,220],[1981,220],[1982,220],[1983,220],[1984,250],[1985,290],[1986,310],[1987,320],[1988,330],[1989,320],[1990,330],[1991,360],[1992,400],[1993,420],[1994,470],[1995,540],[1996,660],[1997,760],[1998,800],[1999,860],[2000,950],[2001,1020],[2002,1130],[2003,1300],[2004,1530],[2005,1790],[2006,2090],[2007,2550],[2008,3140],[2009,3740],[2010,4410],[2011,5130],[2012,6010],[2013,6860],[2014,7600],[2015,8040],[2016,8360],[2017,8830],[2018,9720],[2019,10510],[2020,10740],[2021,12220],[2022,13170],[2023,13750],[2024,13660]]
},
{
  "code": "NY.GDP.MKTP.KD.ZG",
  "name": "GDP growth",
  "unit": "pct",
  "section": "economy",
  "blurb": "Annual real GDP growth averaged near double digits from the 1980s to the 2000s, peaked at 19.3% in 1970, and has moderated to about 5% in 2024.",
  "sourceName": "GDP growth (annual %)",
  "sourceNote": "Gross domestic product is the total income earned through the production of goods and services in an economic territory during an accounting period. It can be measured in three different ways: using either the expenditure approach, the income approach, or the production approach.",
  "sourceOrg": "Country official statistics, National Statistical Organizations and/or Central Banks; National Accounts data f",
  "series": [[1961,-27.27],[1962,-5.58],[1963,10.3],[1964,18.18],[1965,16.95],[1966,10.65],[1967,-5.77],[1968,-4.1],[1969,16.94],[1970,19.3],[1971,7.06],[1972,3.81],[1973,7.76],[1974,2.31],[1975,8.72],[1976,-1.57],[1977,7.57],[1978,11.327],[1979,7.595],[1980,7.841],[1981,5.115],[1982,9.024],[1983,10.772],[1984,15.192],[1985,13.428],[1986,8.944],[1987,11.655],[1988,11.221],[1989,4.208],[1990,3.923],[1991,9.376],[1992,14.298],[1993,13.926],[1994,13.083],[1995,11.015],[1996,9.973],[1997,9.298],[1998,7.924],[1999,7.741],[2000,8.574],[2001,8.324],[2002,9.236],[2003,10.114],[2004,10.14],[2005,11.454],[2006,12.675],[2007,14.151],[2008,9.669],[2009,9.406],[2010,10.592],[2011,9.462],[2012,7.858],[2013,7.778],[2014,7.461],[2015,6.982],[2016,6.774],[2017,6.891],[2018,6.758],[2019,6.067],[2020,2.34],[2021,8.57],[2022,3.134],[2023,5.416],[2024,4.958]]
},
{
  "code": "FP.CPI.TOTL.ZG",
  "name": "Inflation",
  "unit": "pct",
  "section": "economy",
  "blurb": "Consumer-price inflation spiked to 24.3% in 1994 during the price-reform years and has been low since the late 1990s: 0.2% in 2024.",
  "sourceName": "Inflation, consumer prices (annual %)",
  "sourceNote": "Inflation as measured by the consumer price index reflects the annual percentage change in the cost to the average consumer of acquiring a basket of goods and services that may be fixed or changed at specified intervals, such as yearly.",
  "sourceOrg": "International Financial Statistics database, International Monetary Fund (IMF)",
  "series": [[1987,7.234],[1988,18.812],[1989,18.246],[1990,3.052],[1991,3.557],[1992,6.354],[1993,14.61],[1994,24.257],[1995,16.791],[1996,8.313],[1997,2.786],[1998,-0.773],[1999,-1.401],[2000,0.348],[2001,0.719],[2002,-0.732],[2003,1.128],[2004,3.825],[2005,1.776],[2006,1.649],[2007,4.817],[2008,5.925],[2009,-0.728],[2010,3.175],[2011,5.554],[2012,2.62],[2013,2.621],[2014,1.922],[2015,1.437],[2016,2],[2017,1.593],[2018,2.075],[2019,2.899],[2020,2.419],[2021,0.981],[2022,1.974],[2023,0.235],[2024,0.218]]
},
{
  "code": "SL.UEM.TOTL.ZS",
  "name": "Unemployment (ILO estimate)",
  "unit": "pct",
  "section": "economy",
  "blurb": "The modelled ILO unemployment rate has stayed in a narrow band, between 2.4% and 5.0%, across the whole 1991–2024 series.",
  "sourceName": "Unemployment, total (% of total labor force) (modeled ILO estimate)",
  "sourceNote": "Unemployment refers to the share of the labor force that is without work but available for and seeking employment.",
  "sourceOrg": "ILO Modelled Estimates database (ILOEST), International Labour Organization (ILO), uri: publisher: ILOSTAT",
  "series": [[1991,2.37],[1992,2.37],[1993,2.69],[1994,2.9],[1995,3],[1996,3.12],[1997,3.23],[1998,3.24],[1999,3.25],[2000,3.26],[2001,3.8],[2002,4.24],[2003,4.58],[2004,4.49],[2005,4.52],[2006,4.43],[2007,4.35],[2008,4.59],[2009,4.72],[2010,4.53],[2011,4.55],[2012,4.58],[2013,4.6],[2014,4.63],[2015,4.65],[2016,4.56],[2017,4.47],[2018,4.31],[2019,4.56],[2020,5],[2021,4.55],[2022,4.98],[2023,4.67],[2024,4.59]]
},
{
  "code": "SP.DYN.LE00.IN",
  "name": "Life expectancy at birth",
  "unit": "years",
  "section": "society",
  "featured": true,
  "blurb": "A child born in China in 1960 could expect to live 33.4 years. By 2024 life expectancy had reached 78.0 years — a gain of almost 45 years in one lifetime.",
  "sourceName": "Life expectancy at birth, total (years)",
  "sourceNote": "Life expectancy at birth indicates the number of years a newborn infant would live if prevailing patterns of mortality at the time of its birth were to stay the same throughout its life.",
  "sourceOrg": "World Population Prospects, United Nations (UN)",
  "series": [[1960,33.419],[1961,40.158],[1962,50.959],[1963,51.67],[1964,52.343],[1965,53.001],[1966,53.662],[1967,54.401],[1968,55.191],[1969,55.988],[1970,56.824],[1971,57.731],[1972,58.579],[1973,59.496],[1974,60.241],[1975,60.952],[1976,61.225],[1977,62.458],[1978,63.102],[1979,63.704],[1980,64.243],[1981,64.778],[1982,65.249],[1983,65.728],[1984,66.148],[1985,66.532],[1986,66.887],[1987,67.263],[1988,67.607],[1989,67.93],[1990,68.155],[1991,68.61],[1992,69.059],[1993,69.492],[1994,69.835],[1995,70.363],[1996,70.823],[1997,71.227],[1998,71.601],[1999,71.952],[2000,72.288],[2001,72.675],[2002,73.034],[2003,73.385],[2004,73.727],[2005,74.085],[2006,74.404],[2007,74.789],[2008,74.833],[2009,75.317],[2010,75.668],[2011,75.889],[2012,76.2],[2013,76.452],[2014,76.714],[2015,76.975],[2016,77.214],[2017,77.235],[2018,77.709],[2019,77.94],[2020,78.019],[2021,78.117],[2022,78.202],[2023,77.953],[2024,78.017]]
},
{
  "code": "SH.DYN.MORT",
  "name": "Under-5 mortality",
  "unit": "per1000",
  "section": "society",
  "blurb": "Deaths before the fifth birthday fell from 118 per 1,000 live births in 1969 to 5.7 in 2024, a decline of about 95%.",
  "sourceName": "Mortality rate, under-5 (per 1,000 live births)",
  "sourceNote": "Under-five mortality rate is the probability per 1,000 that a newborn baby will die before reaching age five, if subject to age-specific mortality rates of the specified year.",
  "sourceOrg": "UN Inter-agency Group for Child Mortality Estimation, UN Children's Fund (UNICEF), uri: www.childmortality.org",
  "series": [[1969,118],[1970,112.1],[1971,106.3],[1972,100.8],[1973,95.2],[1974,89.7],[1975,84.3],[1976,79.1],[1977,74.2],[1978,69.8],[1979,65.9],[1980,62.6],[1981,59.9],[1982,57.7],[1983,56.1],[1984,54.9],[1985,54.2],[1986,53.9],[1987,53.8],[1988,53.9],[1989,53.8],[1990,53.6],[1991,53],[1992,52.1],[1993,50.8],[1994,49.2],[1995,47.4],[1996,45.5],[1997,43.5],[1998,41.4],[1999,39.1],[2000,36.6],[2001,34.1],[2002,31.4],[2003,28.8],[2004,26.3],[2005,24],[2006,21.9],[2007,20.1],[2008,18.5],[2009,17.1],[2010,15.7],[2011,14.6],[2012,13.5],[2013,12.5],[2014,11.6],[2015,10.7],[2016,10],[2017,9.3],[2018,8.6],[2019,8],[2020,7.5],[2021,7],[2022,6.6],[2023,6.1],[2024,5.7]]
},
{
  "code": "SE.ADT.LITR.ZS",
  "name": "Adult literacy rate",
  "unit": "pct",
  "section": "society",
  "blurb": "Adult literacy is measured in census years only: 65.5% in 1982, 78.5% in 1990, 90.9% in 2000, 95.1% in 2010 and 96.7% in 2020.",
  "sourceName": "Literacy rate, adult total (% of people ages 15 and above)",
  "sourceNote": "Adult literacy rate is the percentage of people ages 15 and above who can both read and write with understanding a short simple statement about their everyday life.",
  "sourceOrg": "Data API, UN Educational, Scientific and Cultural Organization (UNESCO)",
  "series": [[1982,65.51],[1990,77.79],[2000,90.92],[2010,95.12],[2020,96.74]]
},
{
  "code": "IT.NET.USER.ZS",
  "name": "Internet users",
  "unit": "pct",
  "section": "society",
  "featured": true,
  "blurb": "Internet use was effectively zero in 1990. It passed 50% of the population in 2017 and reached 92.0% in 2024.",
  "sourceName": "Individuals using the Internet (% of population)",
  "sourceNote": "Internet users are individuals who have used the Internet (from any location) in the last 3 months. The Internet can be used via a computer, mobile phone, personal digital assistant, games machine, digital TV etc.",
  "sourceOrg": "World Telecommunication/ICT Indicators Database, International Telecommunication Union (ITU), uri:",
  "series": [[1990,0],[1993,0],[1994,0.001],[1995,0.005],[1996,0.013],[1997,0.032],[1998,0.169],[1999,0.708],[2000,1.776],[2001,2.64],[2002,4.596],[2003,6.2],[2004,7.3],[2005,8.523],[2006,10.523],[2007,16],[2008,22.6],[2009,28.9],[2010,34.3],[2011,38.3],[2012,42.3],[2013,45.8],[2014,47.9],[2015,50.3],[2016,53.2],[2017,54.3],[2018,65.358],[2019,64.081],[2020,70.053],[2021,73.053],[2022,75.611],[2023,90.6],[2024,92]]
},
{
  "code": "SH.XPD.CHEX.GD.ZS",
  "name": "Health expenditure",
  "unit": "pct",
  "section": "society",
  "blurb": "Current health spending — public and private together — rose from 4.5% of GDP in 2000 to 5.9% in 2023.",
  "sourceName": "Current health expenditure (% of GDP)",
  "sourceNote": "Level of current health expenditure expressed as a percentage of GDP. Estimates of current health expenditures include healthcare goods and services consumed during each year. This indicator does not include capital health expenditures such as buildings, machinery, IT and stocks of vaccines for emergency or outbreaks.",
  "sourceOrg": "Global Health Expenditure Database, updated December 12th, 2025, World Health Organization (WHO), uri:",
  "series": [[2000,4.454],[2001,4.198],[2002,4.322],[2003,4.355],[2004,4.229],[2005,4.112],[2006,3.887],[2007,3.617],[2008,3.836],[2009,4.276],[2010,4.158],[2011,4.267],[2012,4.49],[2013,4.639],[2014,4.699],[2015,4.854],[2016,4.883],[2017,4.97],[2018,5.069],[2019,5.265],[2020,5.504],[2021,5.256],[2022,5.881],[2023,5.944]]
},
{
  "code": "SE.XPD.TOTL.GD.ZS",
  "name": "Education expenditure",
  "unit": "pct",
  "section": "society",
  "blurb": "Government spending on education was 3.9% of GDP in 2023, up from under 2% in the 1970s and around a 4% target since 2012.",
  "sourceName": "Government expenditure on education, total (% of GDP)",
  "sourceNote": "General government expenditure on education (current, capital, and transfers) is expressed as a percentage of GDP. It includes expenditure funded by transfers from international sources to government. General government usually refers to local, regional and central governments.",
  "sourceOrg": "Data API, UN Educational, Scientific and Cultural Organization (UNESCO)",
  "series": [[1971,1.387],[1972,1.602],[1973,1.648],[1974,1.758],[1975,1.706],[1976,1.814],[1977,1.747],[1978,1.956],[1979,2.145],[1980,1.909],[1981,1.945],[1982,2.031],[1983,2.073],[1984,1.995],[1985,2.004],[1986,2.058],[1987,1.801],[1988,1.761],[1992,1.648],[1993,1.651],[1994,1.977],[1995,1.833],[1996,1.843],[1998,1.83],[1999,1.871],[2023,3.897]]
},
{
  "code": "SI.POV.DDAY",
  "name": "Poverty headcount at $3.00 a day",
  "unit": "pct",
  "section": "society",
  "blurb": "On the World Bank’s $3.00-a-day line (2021 PPP), 97.0% of China’s population was poor in 1981. The share fell through the reform decades to 0.0% as published in 2022 — the largest poverty reduction ever recorded.",
  "sourceName": "Poverty headcount ratio at $3.00 a day (2021 PPP) (% of population)",
  "sourceNote": "Poverty headcount ratio at $3.00 a day is the percentage of the population living on less than $3.00 a day at 2021 purchasing power adjusted prices. As a result of revisions in PPP exchange rates, poverty rates for individual countries cannot be compared with poverty rates reported in earlier editions.",
  "sourceOrg": "World Bank, Poverty and Inequality Platform. Data are based on primary household survey data obtained from gov",
  "series": [[1981,97],[1984,91.3],[1987,81.1],[1990,83.1],[1993,77.3],[1996,62.6],[1999,58.5],[2002,47.8],[2005,32.9],[2008,26.1],[2010,20.6],[2011,15.3],[2012,12.9],[2013,6],[2014,4.6],[2015,2.9],[2016,2.1],[2017,1.6],[2018,0.7],[2019,0],[2020,0],[2021,0],[2022,0]]
}
];

export const indicatorByCode = (code) => INDICATORS.find((i) => i.code === code);
export const indicatorsIn = (sectionId) => INDICATORS.filter((i) => i.section === sectionId);
export const featuredIndicators = () => INDICATORS.filter((i) => i.featured);
