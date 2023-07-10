import axios from 'axios';

export type ATHData = {
    from: number;
    to: number;
};

type ApiResponse = {
    data: {
        athPrice: {
            USD: number;
        };
        price: {
            USD: number;
        };
    };
};

export async function calculateATH(name: string): Promise<{ [key: string]: ATHData }> {
    try {
        const response = await axios.get<ApiResponse>(`https://tstapi.cryptorank.io/v0/coins/${name.toLowerCase()}`);

        const data = response.data;

        const ath = data.data.athPrice.USD;
        const currentPrice = data.data.price.USD;

        const from = ((ath - currentPrice) / ath) * 100;
        const to = ((ath / currentPrice) - 1) * 100;

        return { [name]: { from, to } };

    } catch (error) {
        return { [name]: { from: 0, to: 0 } };
    }
}
