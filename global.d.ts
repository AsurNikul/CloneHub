// global.d.ts
declare namespace NodeJS {
  interface Global {
    navigation: any; // or you can provide a specific type instead of 'any'
  }
}
