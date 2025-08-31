import { expect, it, describe } from 'vitest';

describe('Test the vitest', () => {
  it('should run without errors', () => {
    expect(1 + 1).toBe(2);
  });
});

import 'reflect-metadata';
import {
  IsString,
  IsDate,
  ValidateNested,
  validate,
  IsArray,
  ValidationOptions,
  registerDecorator,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

import { Type, plainToInstance } from 'class-transformer';

// class TestDto {
//   @IsString({ message: 'NAME_' })
//   name: string;

//   @IsArray({ message: 'should be array' })
//   @ValidateNested({ message: 'validate child', each: true })
//   @Type(() => LanguageSkillDto)
//   lang: LanguageSkillDto[];
// }

// class PartialTestDto extends PartialType(TestDto) {}
// export async function test() {
//   const testObject = {
//     lang: [
//       {
//         name: 'asdf',
//         fieldOfStudy: 'asdf',
//         to: new Date().toISOString(),
//         from: new Date().toISOString(),
//         certified: true,
//         level: certifiedLanguageLevels[0],
//       },
//     ],
//   };
//   console.log('run');
//   const toVa = plainToInstance(PartialTestDto, testObject);

//   console.log(toVa);
//   const errors = await validate(toVa);

//   console.log(extractErrors(errors));
//   while (true) {}
// }

// export function extractErrors(errors: any[]): string[] {
//   let result: string[] = [];

//   for (const err of errors) {
//     if (err.constraints && typeof err.constraints === 'object') {
//       result.push(...(Object.values(err.constraints) as string[]));
//     }

//     if (err.children && err.children.length > 0) {
//       result.push(...extractErrors(err.children));
//     }
//   }

//   return result;
// }
