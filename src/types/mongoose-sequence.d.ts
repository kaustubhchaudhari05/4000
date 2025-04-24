declare module 'mongoose-sequence' {
    import { Schema } from 'mongoose';
  
    interface AutoIncrementOptions {
      field: string;
      startAt?: number;
      incrementBy?: number;
      unique?: boolean;
    }
  
    export function AutoIncrementID<T extends Schema = Schema>(
      schema: T,
      options: AutoIncrementOptions
    ): void;
  
    export default AutoIncrementID;
  }
  