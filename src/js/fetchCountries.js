import Notiflix from 'notiflix';

export function fetchCountries(name) {
  const searchParams = new URLSearchParams({
    fields: `name,capital,population,flags,languages`,
  });
  return fetch(`https://restcountries.com/v3.1/name/${name}?${searchParams}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Oops, there is no country with that name');
      }
      return res.json();
    })
    .catch(err => Notiflix.Notify.failure(`${err}`));
}
