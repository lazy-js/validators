import { IsBoolean, validateSync } from 'class-validator';
import { expect, it, describe } from 'vitest';
import { flatErrors, IsConditionalEnum, plainToInstance } from '../src';

const emumMap = new Map();
emumMap.set(true, ['ok', 'yes']);
emumMap.set(false, ['notok', 'no']);

const emumMapMessages = new Map();
emumMapMessages.set(true, 'should be ok or yes');
emumMapMessages.set(false, 'should be notok or no');

class TestConditionalEnumDTO {
  // @ts-ignore
  @IsBoolean()
  isOk!: boolean;

  // @ts-ignore
  @IsConditionalEnum('isOk', emumMap, { messageMap: emumMapMessages })
  value: string;
}
describe('Test the vitest', () => {
  it('should run without errors', () => {
    expect(1 + 1).toBe(2);
  });

  it('shoud throw error if isOk = true and value = no', () => {
    const testPlain = {
      isOk: true,
      value: 'no',
    };

    const testInstance = plainToInstance(TestConditionalEnumDTO, testPlain);

    const errors = validateSync(testInstance);
    expect(flatErrors(errors)).includes(emumMapMessages.get(testPlain.isOk));
  });

  it('shoud success if true and yes', () => {
    const testPlain = {
      isOk: true,
      value: 'yes',
    };

    const testInstance = plainToInstance(TestConditionalEnumDTO, testPlain);

    const errors = validateSync(testInstance);
    expect(
      flatErrors(errors).includes(emumMapMessages.get(testPlain.isOk)),
    ).toBeFalsy();
  });
});
