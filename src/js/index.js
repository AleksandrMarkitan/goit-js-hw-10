import '../css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries';
import { renderCountriesList } from './markup';
import { renderCountryInfo } from './markup';

const DEBOUNCE_DELAY = 300;

const refs = {
  countriesList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
  input: document.querySelector('#search-box'),
};

refs.input.addEventListener('input', debounce(onInputHandler, DEBOUNCE_DELAY));

function onInputHandler(e) {
  refs.countriesList.innerHTML = ``;
  refs.countryInfo.innerHTML = ``;
  const name = e.target.value.trim();

  if (name) {
    fetchCountries(`${name}`).then(countries => {
      if (countries) {
        if (countries.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (countries.length >= 2 && countries.length <= 10) {
          refs.countriesList.innerHTML = renderCountriesList(countries);
        } else if (countries.length === 1) {
          refs.countryInfo.innerHTML = renderCountryInfo(countries);
        }
      }
    });
  }
}
