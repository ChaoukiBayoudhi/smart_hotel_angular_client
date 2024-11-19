export class Guest {
  id: number;
  name: string;
  email: string;
  phone: string;

  constructor(name: string, email: string, phone: string, id: number) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
  }

  toString(): string {
      return `Guest { id: ${this.id}, name: "${this.name}", email: "${this.email}", phone: "${this.phone}" }`;
  }
}
