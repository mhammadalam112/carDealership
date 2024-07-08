import { PipeTransform, Injectable, BadRequestException, ArgumentMetadata } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}  
  
  transform(value: unknown, metadata: ArgumentMetadata) {
    console.log("value here "+value);
      const parsedValue = this.schema.safeParse(value);
      console.log("parsed value: ",parsedValue);
      if(parsedValue.success) return parsedValue.data;

      throw new BadRequestException(parsedValue.error.format());
    
  }
}