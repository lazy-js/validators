import { registerDecorator, } from 'class-validator';
export function IsAfterDate(property, validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
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