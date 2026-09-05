import { useState, useEffect } from "react";

export type Currency = "USD" | "INR";

interface UseCurrencyReturn {
    currency: Currency;
    symbol: string;
    formatPrice: (priceUsd: number, priceInr: number) => string;
}

export function useCurrency(): UseCurrencyReturn {
    const [currency, setCurrency] = useState<Currency>("INR");
    const [symbol, setSymbol] = useState("₹");

    // Removed specific timezone detection to enforce INR as requested
    useEffect(() => {
        setCurrency("INR");
        setSymbol("₹");
    }, []);

    const formatPrice = (priceUsd: number, priceInr: number) => {
        return `${symbol}${priceInr}`;
    };

    return { currency, symbol, formatPrice };
}
