import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

export default function Table({ userInput }) {
  let data = calculateInvestmentResults(userInput);
  const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result) => {
          const totalInvestments = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
          const totalAmount = result.valueEndOfYear - totalInvestments
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInvestments)}</td>
              <td>{formatter.format(totalAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
