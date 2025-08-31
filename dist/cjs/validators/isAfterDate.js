"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAfterDate = IsAfterDate;
const class_validator_1 = require("class-validator");
function IsAfterDate(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isAfter',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    if (!value || !relatedValue) {
                        return false;
                    }
                    return new Date(value) > new Date(relatedValue);
                },
                defaultMessage(args) {
                    const [relatedPropertyName] = args.constraints;
                    return `${args.property} must be after ${relatedPropertyName}`;
                },
            },
        });
    };
}
//# sourceMappingURL=isAfterDate.js.map