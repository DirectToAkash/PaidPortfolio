import { useState, useEffect } from "react";

export type Currency = "USD" | "INR";

interface UseCurrencyReturn {
    currency: Currency;
    symbol: string;
    formatPrice: (priceUsd: number, priceInr: number) => string;
}

export function useCurrency(): UseCurrencyReturn {
    const [currency, setCurrency] = useState<Currency>("USD");
    const [symbol, setSymbol] = useState("$");

    useEffect(() => {
        try {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (timeZone === "Asia/Kolkata" || timeZone === "IST") {
                setCurrency("INR");
                setSymbol("₹");
            } else {
                setCurrency("USD");
                setSymbol("$");
            }
        } catch (e) {
            console.error("Failed to detect timezone", e);
            // Default to USD
            setCurrency("USD");
            setSymbol("$");
        }
    }, []);

    const formatPrice = (priceUsd: number, priceInr: number) => {
        if (currency === "INR") {
            return `${symbol}${priceInr}`;
        }
        return `${symbol}${priceUsd}`;
    };

    return { currency, symbol, formatPrice };
}
