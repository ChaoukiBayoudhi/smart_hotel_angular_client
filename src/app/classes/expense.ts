export class Expense {
  id: number;
  description: string;
  date: Date;
  amount: number;

  constructor();
  constructor(description: string, date: Date, amount: number, id: number);
  constructor(description?: string, date?: Date, amount?: number, id?: number) {
      this.id = id || 0;
      this.description = description || '';
      this.date = date || new Date();
      this.amount = amount || 0;
  }


  toString(): string {
      return `Expense { id: ${this.id}, description: "${this.description}", date: ${this.date.toISOString()}, amount: ${this.amount.toFixed(2)} }`;
  }
}
