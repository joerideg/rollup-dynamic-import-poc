export interface Human {
  name: string;
}

export class Person implements Human {
  constructor(
    public name: string,
  ) {}

  sayHello(): void {
    console.log(`hi, my name is ${this.name}`);
  }
}
