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
  Legend
);

function StockView() {
  const { getDailyStockData } = useStockApi();
  const [chartData, setChartData] = useState(null);

  const handleStockClick = async () => {
    try {
      const data = await getDailyStockData("NVDA");
      if (!data) return;

      // Process the stock data
      const labels = [];
      const prices = [];

      // Extract date and close price for the chart
      for (const date in data["Time Series (Daily)"]) {
        labels.push(date);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        prices.push(parseFloat(data["Time Series (Daily)"][date]["4. close"]));
      }

      // Create chart data object
      setChartData({
        labels: labels.reverse(), // Reverse so the most recent date is at the end
        datasets: [
          {
            label: "NVDA Closing Price",
            data: prices.reverse(), // Reverse the data to match the dates
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
