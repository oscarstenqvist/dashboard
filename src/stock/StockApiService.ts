import axios from "axios";

interface TimeSeriesData {
  [key: string]: unknown;
}

const stockApiKey = "274YZT1J6EB5534B";
const useStockApi = () => {
  const getDailyStockData = async (symbol: string): Promise<TimeSeriesData | null> => {
    const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + symbol + "&apikey=" + stockApiKey;
    try {
      const response = await axios.get<TimeSeriesData>(url);
      return response.data;
    } catch (err) {
      console.error("Error fetching stock data:", err);
      return null;
    }
  }
  return { getDailyStockData }
}
export default useStockApi;
