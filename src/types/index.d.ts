import { CSSProperties } from "react";

export interface ICity {
  city: string;
  lat: string;
  lng: string;
  country: string;
  iso2: string;
  admin_name: string;
  capital: string;
  population: string;
  population_proper: string;
}

export type ICities = ICity[];

interface IRow {
  index: number;
  style: CSSProperties;
}
