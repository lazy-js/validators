var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'reflect-metadata';
import { ValidatorConstraint, registerDecorator, } from 'class-validator';
// Method 1: Validator Constraint Class - updated with custom messages per key
let ConditionalEnumConstraint = class ConditionalEnumConstraint {
    validate(value, args) {
        const [config] = args.constraints;
        const { property, enumMap, allowNull = false, allowUndefined = false, } = config;
        const conditionValue = args.object[property];
        // Handle null/undefined cases
        if (value === null && allowNull)
            return true;
        if (value === undefined && allowUndefined)
            return true;
        if (value === null || value === undefined)
            return false;
        // Get the enum/array based on condition property value
        let targetValues;
        if (enumMap instanceof Map) {
            targetValues = enumMap.get(conditionValue);
        }
        else {
            targetValues = enumMap[conditionValue];
        }
        // If no values are defined for this condition, validation passes
        if (!targetValues)
            return true;
        // Handle arrays directly
        if (Array.isArray(targetValues)) {
            return targetValues.includes(value);
        }
        // Handle enum objects
        return Object.values(targetValues).includes(value);
    }
    defaultMessage(args) {
        const [config] = args.constraints;
        const { property, enumMap, messageMap } = config;
        const conditionValue = args.object[property];
        // Check for custom message first
        if (messageMap) {
            let customMessage;
            if (messageMap instanceof Map) {
                customMessage = messageMap.get(conditionValue);
            }
            else {
                customMessage = messageMap[conditionValue];
            }
            if (customMessage) {
                return customMessage;
            }
        }
        // Fallback to default message
        let targetValues;
        if (enumMap instanceof Map) {
            targetValues = enumMap.get(conditionValue);
        }
        else {
            targetValues = enumMap[conditionValue];
        }
        if (!targetValues) {
            return `No valid values defined for ${property} = ${conditionValue}`;
        }
        let validValues;
        if (Array.isArray(targetValues)) {
            validValues = targetValues.join(', ');
        }
        else {
            validValues = Object.values(targetValues).join(', ');
        }
        return `${args.property} must be one of: ${validValues} when ${property} is ${conditionValue}`;
    }
};
ConditionalEnumConstraint = __decorate([
    ValidatorConstraint({ name: 'conditionalEnum', async: false })
], ConditionalEnumConstraint);
export { ConditionalEnumConstraint };
// Method 2: Custom Decorator Function - updated with custom messages per key
export function IsConditionalEnum(conditionProperty, enumMap, validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            name: 'isConditionalEnum',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [
                {
                    property: conditionProperty,
                    enumMap,
                    messageMap: validationOptions?.messageMap,
                    allowNull: validationOptions?.allowNull,
                    allowUndefined: validationOptions?.allowUndefined,
                },
            ],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [config] = args.constraints;
                    const { property, enumMap, allowNull = false, allowUndefined = false, } = config;
                    const conditionValue = args.object[property];
                    // Handle null/undefined cases
                    if (value === null && allowNull)
                        return true;
                    if (value === undefined && allowUndefined)
                        return true;
                    if (value === null || value === undefined)
                        return false;
                    // Get the enum/array based on condition property value
                    let targetValues;
                    if (enumMap instanceof Map) {
                        targetValues = enumMap.get(conditionValue);
                    }
                    else {
                        targetValues = enumMap[conditionValue];
                    }
                    // If no values are defined for this condition, validation passes
                    if (!targetValues)
                        return true;
                    // Handle arrays directly
                    if (Array.isArray(targetValues)) {
                        return targetValues.includes(value);
                    }
                    // Handle enum objects
                    return Object.values(targetValues).includes(value);
                },
                defaultMessage(args) {
                    const [config] = args.constraints;
                    const { property, enumMap, messageMap } = config;
                    const conditionValue = args.object[property];
                    // Check for custom message first
                    if (messageMap) {
                        let customMessage;
                        if (messageMap instanceof Map) {
                            customMessage = messageMap.get(conditionValue);
                        }
                        else {
                            customMessage = messageMap[conditionValue];
                        }
                        if (customMessage) {
                            return customMessage;
                        }
                    }
                    // Fallback to default message
                    let targetValues;
                    if (enumMap instanceof Map) {
                        targetValues = enumMap.get(conditionValue);
                    }
                    else {
                        targetValues = enumMap[conditionValue];
                    }
                    if (!targetValues) {
                        return `No valid values defined for ${property} = ${conditionValue}`;
                    }
                    let validValues;
                    if (Array.isArray(targetValues)) {
                        validValues = targetValues.join(', ');
                    }
                    else {
                        validValues = Object.values(targetValues).join(', ');
                    }
                    return `${args.property} must be one of: ${validValues} when ${property} is ${conditionValue}`;
                },
            },
        });
    };
}
//# sourceMappingURL=isConditionalEnum.js.map