import { useState } from "react";
import useStockApi from "./StockApiService";
import { Button } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  Filler
} from "chart.js";
import { colors } from "../styling/theme";

// Register the required chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

// Define the API response interface based on your sample data
interface StockApiResponse {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
  };
  "Time Series (Daily)": {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. volume": string;
    };
  };
}

function StockView() {
  // Specify the type of chartData so TypeScript knows its shape
  const [chartData, setChartData] = useState<ChartData<"line", number[], string> | null>(null);
  const { getDailyStockData } = useStockApi();

  const handleStockClick = async () => {
    try {
      // Assert that the response matches our interface
      const data = (await getDailyStockData("NVDA")) as unknown as StockApiResponse;
      if (!data || !data["Time Series (Daily)"]) return;

      const labels: string[] = [];
      const prices: number[] = [];

      const dailyData = data["Time Series (Daily)"];

      // Iterate over each date in the time series
      for (const date in dailyData) {
        if (Object.prototype.hasOwnProperty.call(dailyData, date)) {
          labels.push(date);
          prices.push(parseFloat(dailyData[date]["4. close"]));
        }
      }

      // Reverse the arrays so that the most recent date is last
      setChartData({
        labels: labels.reverse(),
        datasets: [
          {
            label: "NVDA Closing Price",
            data: prices.reverse(),
            borderColor: colors.primary,
            fill: true,
            tension: 0.1,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching stock data: ", error);
    }
  };

  return (
    <>
      <Button onClick={() => void handleStockClick()}>Fetch stock</Button>
      {chartData && (
        <div style={{ width: "80%", margin: "0 auto", paddingTop: "20px" }}>
          <Line data={chartData} />
        </div>
      )}
    </>
  );
}

export default StockView;
