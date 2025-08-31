import 'reflect-metadata';
import { ValidatorConstraintInterface, ValidationArguments, ValidationOptions } from 'class-validator';
export interface ConditionalEnumConfig {
    property: string;
    enumMap: Record<string | number, any> | Map<any, any>;
    messageMap?: Record<string | number, string> | Map<any, string>;
    allowNull?: boolean;
    allowUndefined?: boolean;
}
export declare class ConditionalEnumConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsConditionalEnum(conditionProperty: string, enumMap: Record<string | number, any> | Map<any, any>, validationOptions?: ValidationOptions & {
    allowNull?: boolean;
    allowUndefined?: boolean;
    messageMap?: Record<string | number, string> | Map<any, string>;
}): (object: Object, propertyName: string) => void;
//# sourceMappingURL=isConditionalEnum.d.ts.map