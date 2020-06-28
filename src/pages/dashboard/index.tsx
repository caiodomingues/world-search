/* eslint-disable camelcase */
import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import ICountry from '../../interfaces/Country';

import { Title, Subtitle, Form, Countries, Error } from './styles';

const Dashboard: React.FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [tip, setTip] = useState('');

  async function handleFormSubmit(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    try {
      const response = await api.get<ICountry[]>(`/name/${search}`);
      const ctr = response.data;
      setCountries(ctr);
      setSearch('');
    } catch (err) {
      setTip(
        'Não foi possível realizar a pesquisa com estes parâmetros, tente novamente',
      );
    }
  }

  useEffect(() => {
    async function gatherData(): Promise<void> {
      const tmp = await api.get('all');
      setCountries(tmp?.data);
      setLoading(false);
    }

    gatherData();
  }, []);

  return (
    <>
      <Title>
        <FiSearch /> World Search
      </Title>
      <Subtitle>&quot;Não, não é plana.&quot;</Subtitle>
      {loading && (
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
      {!loading && (
        <>
          <Form tip={!!tip} onSubmit={handleFormSubmit}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="text"
              placeholder="Procure por nomes (incluindo nomes secundários)"
            />
            <button type="submit">
              <FiSearch />
            </button>
          </Form>
          {tip && <Error>{tip}</Error>}
          <Countries>
            {countries.map(country => (
              <Link key={country.name} to={`/country/${country.name}`}>
                <img src={country.flag} alt={country.name} />
                <div>
                  <strong>
                    {country.translations.br}
                    {country.cioc ? <span>{country.cioc}</span> : ''}
                  </strong>
                  <p>{country.subregion}</p>
                </div>
                <FiChevronRight size={20} />
              </Link>
            ))}
          </Countries>
        </>
      )}
    </>
  );
};

export default Dashboard;
