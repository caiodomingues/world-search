/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';
import ICountry from '../../interfaces/Country';
import { Header, CountryInfo } from './styles';

interface CountryParams {
  country: string;
}

const Country: React.FC = () => {
  const [country, setCountry] = useState<ICountry>();
  const { params } = useRouteMatch<CountryParams>();

  useEffect(() => {
    async function gatherData(): Promise<void> {
      const tmp = await api.get(`/name/${params.country}`);
      setCountry(tmp?.data[0]);
    }

    gatherData();
  }, [params.country]);

  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {country && (
        <CountryInfo>
          <header>
            <img src={country.flag} alt={country.name} />
            <div>
              <strong>
                {country.translations?.br}{' '}
                {country.cioc ? <span>{country.cioc}</span> : ''}
              </strong>
              <p>{country.nativeName}</p>
              <p>
                {country.region}/{country.subregion}
              </p>
            </div>
          </header>
          <ul>
            <li>
              <span>Capital</span>
              <strong>{country.capital}</strong>
            </li>
            <li>
              <span>Nomes secundários</span>
              <strong>
                {country.altSpellings.map(alt => (
                  <p>{alt}</p>
                ))}
              </strong>
            </li>
            <li>
              <span>Línguas</span>
              <strong>
                {country.languages.map(lang => (
                  <p>{lang.name}</p>
                ))}
              </strong>
            </li>
            <li>
              <span>Population</span>
              <strong>
                {String(country.population).replace(/(.)(?=(\d{3})+$)/g, '$1.')}
              </strong>
            </li>
          </ul>
          <ul>
            <li>
              <span>Moedas</span>
              {country.currencies.map(currency => (
                <strong id="ln">
                  {currency.symbol} - {currency.name}
                  <span> {currency.code}</span>
                </strong>
              ))}
            </li>
          </ul>
        </CountryInfo>
      )}
    </>
  );
};

export default Country;
