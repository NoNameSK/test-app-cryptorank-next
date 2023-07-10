'use client'

import React, { useEffect, useState } from 'react';
import { calculateATH } from '@/hooks/useCalculateATH';
import { useNumberFormat } from '@/hooks/useNumberFormat';
import { useFetcher } from '@/hooks/useFetcher';

import styled from 'styled-components';

const Wrapper = styled.div`
    clear: both;
    max-width: 1400px;
    min-width: 1056px;
    margin-top: 36px;
    margin-bottom: 36px;
    padding-bottom: 16px;
    margin-left: auto;
    margin-right: auto; 
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 16px;
    overflow-wrap: break-word;
`
const Header = styled.div`
  font-size: 18px;
  color: white;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #2563eb;
  border-radius: 16px;
`

const Body = styled.div`
  display: grid;
  background-color: rgb(238, 244, 250);
  grid-template-columns: repeat(7, 1fr);
`;

const Cell = styled.div`
    display: flex;
    height: 60px;
    white-space: nowrap;
    min-width: 60px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    padding-left: 24px;
    padding-right: 24px;
    background-color: inherit;
    border-bottom: 1px solid black;
    text-align: start;
    position: sticky;
    left: 0px;
    z-index: 1;
`;

const HeaderCell = styled(Cell)`
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: inherit;
    transition: box-shadow 0.2s ease 0s;
    text-align: start;
    padding-left: 24px;
    padding-right: 9px;
    white-space: nowrap;
    min-width: 60px;
    position: sticky;
    left: 0px;
    z-index: 1;
`;

interface CurrencyData {
  id: string;
  name: string;
  values: {
    USD: {
      price: number,
      marketCap: number
    }
  }
  circulatingSupply: number;
  category: string;
  from: number,
  to: number,
  image: string,
}

const Cryptocurrencies: React.FC = () => {
  const [currencies, setCurrencies] = useState<CurrencyData[]>([])
  const formatNumber = useNumberFormat(); // Use custom hook

  const { data: listOfCurrencies, isLoading: isLoadingCurrencies } = useFetcher(`https://api.cryptorank.io/v1/currencies?api_key=95d392740f14dbe77294ae764928975d15b2ae7c9fe7df3d727817bffe58`);  // replace with correct API endpoint

  useEffect(() => {
    if (listOfCurrencies) {
      Promise.all(
        listOfCurrencies.data.map((currency: CurrencyData) =>
          calculateATH(currency.name).then((athData: any) => ({ ...currency, ...athData[currency.name] }))
        )
      ).then(setCurrencies);

      console.log(listOfCurrencies)
    }
  }, [listOfCurrencies]);

  return (
    <Wrapper>
      <Header>
        <HeaderCell>Name</HeaderCell>
        <HeaderCell>Price USD</HeaderCell>
        <HeaderCell>Circulating Supply</HeaderCell>
        <HeaderCell>Market Cap</HeaderCell>
        <HeaderCell>Category</HeaderCell>
        <HeaderCell>From ATH</HeaderCell>
        <HeaderCell>To ATH</HeaderCell>
      </Header>
      {isLoadingCurrencies ? <div>Loading...</div> : currencies.map((currency: CurrencyData) => (
        <Body key={currency.id}>
          <Cell>{currency.name}</Cell>
          <Cell>{currency.values.USD.price.toFixed(2)}</Cell>
          <Cell>{formatNumber(currency.circulatingSupply)}</Cell> {/* Use custom hook */}
          <Cell>{formatNumber(currency.values.USD.marketCap)}</Cell> {/* Use custom hook */}
          <Cell>{currency.category}</Cell>
          <Cell>{currency.from.toFixed(2)}%</Cell>
          <Cell>{currency.to.toFixed(2)}%</Cell>
        </Body>
      ))}
    </Wrapper>
  );
};

export default Cryptocurrencies;