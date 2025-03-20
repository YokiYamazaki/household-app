export type TransactionType = "income" | "expense";
export type IncomeCategory = "給与" | "副収入" | "お小遣い";
export type ExpenseCategory = "給与" | "副収入" | "お小遣い";

export interface Transaction {
  id: string,
  date: string,
  amount: number,
  content: string,
  type: TransactionType,
  category: IncomeCategory | ExpenseCategory;
}