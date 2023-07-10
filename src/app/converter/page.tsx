'use client'

import { useEffect, useState } from 'react';
import { useFetcher } from '../../hooks/useFetcher';
import styled from 'styled-components';
import SwitchCurrenciesIcon from '@/svgs/switch-currencies-icon';

const Wrapper = styled.div`
  clear: both;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
`

const Title = styled.h1`
  padding: 0px;
    margin: 25px 0px 10px;
    font-size: 25px;
    line-height: 1;
    color: rgb(57, 76, 90);
`
const Container = styled.div`
    margin: 0px 0px 7px;
    padding-top: 28px;
    padding-bottom: 28px;
    position: relative;
    box-shadow: rgb(241, 242, 250) 0px 5px 10px;
    border-radius: 6px;
    overflow-wrap: break-word;
    border: 1px solid rgb(239, 242, 245);
`

const ContainerContent = styled.div`
      width: 100%;
    position: relative;
    padding: 0px 15px;
`

const AmountBox = styled.div`
      margin-bottom: 1rem;
    max-width: 270px;
`

const AmountWrapper = styled.div`
    max-width: 300px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 48px;
    padding: 0px 15px 0px 0px;
    border-radius: 10px;
    border: 1px solid rgb(212, 219, 224);
    color: rgb(57, 76, 90);
    background-color: transparent;
    transition: all 0.2s ease 0s, padding 0.05s ease 0s;

    &:hover {
      border-color: rgb(212, 219, 224);
    }
`

const AmountLabel = styled.div`
  display: block;
    width: fit-content;
    cursor: text;
    margin: 0px 0px 8px;
    font-size: 12px;
    line-height: normal;
    color: rgb(119, 136, 153);
`

const AmountInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 0px 0px 0px 15px;
    font-family: inherit;
    font-size: 16px;
    outline: none;
    border: none;
    background: none;
    color: inherit;
    border-radius: inherit;
`

const SelectWrapper = styled.div`
    flex-wrap: wrap;
    margin-bottom: 1rem;
    display: flex;
    gap: 20px;
`

const SelectContainer = styled.select`
    max-width: 270px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    position: relative;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    min-height: 36px;
    padding: 0px 12px;
    border-radius: 10px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    user-select: none;
    color: rgb(57, 76, 90);
    background-color: rgb(239, 242, 245);
`

const SwitchCurrencuesButton = styled.button`
  position: relative;
    display: inline-flex;
    line-height: 1;
    border-radius: 10px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 12px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    user-select: none;
    font-family: "Noto Sans";
    gap: 2px;
    font-size: 14px;
    height: 36px;
    background-color: transparent;
    color: rgb(5, 135, 255);
    border: 1px solid rgb(5, 135, 255);

    &:hover {
      background-color: rgb(19, 140, 231);
      color: white;
      border-color: rgb(19, 140, 231);
    }

    &:active {
      background-color: rgb(19, 140, 231);
      color: white;
      border-color: rgb(19, 140, 231);
    }
`

interface Currencies {
  id: number,
  name: string,
  values: {
    USD: number
  }
  symbol: string,
}

const Converter: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currencies[]>([])
  const [firstCurrency, setFirtsCurrency] = useState<string>('1'); // Crypto ID for Bitcoin
  const [secondCurrency, setSecondCurrency] = useState<string>('3'); // Crypto ID for Ethereum
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const { data: listOfCurrencies, isLoading: isLoadingCurrencies, isError: isErrorCurrencies } = useFetcher(`https://api.cryptorank.io/v1/currencies?api_key=95d392740f14dbe77294ae764928975d15b2ae7c9fe7df3d727817bffe58`);
  const { data: dataFirstCurrency, isLoading: isLoadingFirstCurrency, isError: isErrorFirstCurrency } = useFetcher(`https://api.cryptorank.io/v1/currencies/${firstCurrency}?api_key=95d392740f14dbe77294ae764928975d15b2ae7c9fe7df3d727817bffe58`);
  const { data: dataSecondCurrency, isLoading: isLoadingSecondCurrency, isError: isErrorSecondCurrency } = useFetcher(`https://api.cryptorank.io/v1/currencies/${secondCurrency}?api_key=95d392740f14dbe77294ae764928975d15b2ae7c9fe7df3d727817bffe58`);

  useEffect(() => {
    if (dataFirstCurrency && dataSecondCurrency && listOfCurrencies) {
      setCurrencies(listOfCurrencies.data)

      const rate = dataFirstCurrency.data.values.USD.price / dataSecondCurrency.data.values.USD.price;

      setConvertedAmount(amount * rate);

      console.log(dataFirstCurrency)
    }
  }, [dataFirstCurrency, dataSecondCurrency, amount]);

  const switchCurrencies = (firstValue: string, secondValue: string) => {
    setFirtsCurrency(secondValue);
    setSecondCurrency(firstValue)
  }

  if (isErrorFirstCurrency || isErrorSecondCurrency || isErrorCurrencies) return <div>Error occurred while fetching data</div>

  return (
    <Wrapper>
      <Title>Cryptocurrency Converter Calculator</Title>
      <Container>
        <ContainerContent>
          {isLoadingFirstCurrency || isLoadingSecondCurrency || isLoadingCurrencies ? <div>Loading...</div> : 
          <>
            <AmountBox>
              <AmountLabel>Amount</AmountLabel>
              <AmountWrapper>
                <AmountInput type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
              </AmountWrapper>
            </AmountBox>

            <SelectWrapper>
              <SelectContainer value={firstCurrency} onChange={(e) => setFirtsCurrency(e.target.value)}>
                {currencies.map((cryptocurrency: Currencies) => {
                  return <option key={cryptocurrency.id} value={cryptocurrency.id}>{cryptocurrency.name}</option>
                })}
              </SelectContainer>
              <SwitchCurrencuesButton onClick={() => switchCurrencies(firstCurrency, secondCurrency)}><SwitchCurrenciesIcon /></SwitchCurrencuesButton>
              <SelectContainer value={secondCurrency} onChange={(e) => setSecondCurrency(e.target.value)}>
                {currencies.map((cryptocurrency: Currencies) => {
                  return <option key={cryptocurrency.id} value={cryptocurrency.id}>{cryptocurrency.name}</option>
                })}
              </SelectContainer>
            </SelectWrapper>

            <div>{amount + " " + dataFirstCurrency.data.symbol} = {dataSecondCurrency.data.symbol + " " + convertedAmount?.toFixed(2)}</div>
          </>
          }
        </ContainerContent>
      </Container>
    </Wrapper>
  )
}

export default Converter;