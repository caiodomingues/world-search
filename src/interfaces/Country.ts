export interface ILanguages {
  name: string;
}

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export default interface ICountry {
  name: string;
  nativeName: string;
  region: string;
  subregion: string;
  population: number;
  capital: string;
  currencies: Array<ICurrency>;
  languages: Array<ILanguages>;
  altSpellings: Array<string>;
  latlng: Array<number>;
  translations: {
    br: string;
  };
  flag: string;
  cioc?: string;
}
