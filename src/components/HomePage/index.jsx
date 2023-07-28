import { DefautTemplate } from "../DefautTemplate";
import { TodoForm } from "../forms/TodoForm";

import { FinancialSummary } from "../sectionsCards/FinancialSummary";


export const HomePage = () => {
  return (
    <DefautTemplate>
      <FinancialSummary/>
      
    </DefautTemplate>
  );
};
