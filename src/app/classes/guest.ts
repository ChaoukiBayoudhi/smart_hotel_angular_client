export class Guest {
  id: number;
  name: string;
  email: string;
  phone: string;

  constructor();
  constructor(name: string, email: string, phone: string, id: number);
  constructor(name?: string, email?: string, phone?: string, id?: number) {
      this.id = id || 0;
      this.name = name || '';
      this.email = email || '';
      this.phone = phone || '';
  }

  toString(): string {
      return `Guest { id: ${this.id}, name: "${this.name}", email: "${this.email}", phone: "${this.phone}" }`;
  }
}
