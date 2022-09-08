export const renderCountriesList = countries =>
  countries
    .map(({ flags, name }) => {
      return `<li><img src="${flags.svg}" alt="flag" width="60"> <h3>${name.official}</h3></li>`;
    })
    .join('');

export const renderCountryInfo = countries => {
  const { flags, name, capital, population, languages } = countries[0];

  return `<ul class="list"><li><img src="${
    flags.svg
  }" alt="flag" width="60"> <h1>${name.official}</h1></li>
<li>
  <ul class="list">
    <li><h2>Capital:</h2><h3>${capital}</h3></li>
    <li><h2>Population:</h2><h3>${population}</h3></li>
    <li><h2>Languages:</h2><h3>${Object.values(languages)}</h3></li>
  </ul>
</li>
            </ul>`;
};
