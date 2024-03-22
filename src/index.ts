type LogLevel = 'info' | 'warn' | 'error';

export const Log = (logLevel: LogLevel = 'info') => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`(${logLevel}) Calling: ${propertyKey} with`, args);
      return originalMethod.apply(this, args);
    };
  };
};

export class MyClass {
  @Log('info')
  myMethod(props: number[], props2: { name: string; password: string }) {
    console.log(props, props2);
    console.log('myMethod called');
  }
}

const myClass = new MyClass();

myClass.myMethod([1, 2, 3], { name: 'John', password: '123' });

