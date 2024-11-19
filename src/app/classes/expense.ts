export class Expense {
  id: number;
  description: string;
  date: Date;
  amount: number;

  constructor(description: string, date: Date, amount: number, id: number) {
      this.id = id;
      this.description = description;
      this.date = date;
      this.amount = amount;
  }


  toString(): string {
      return `Expense { id: ${this.id}, description: "${this.description}", date: ${this.date.toISOString()}, amount: ${this.amount.toFixed(2)} }`;
  }
}
