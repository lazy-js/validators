export function flatErrors(errors) {
    let result = [];
    for (const err of errors) {
        if (err.constraints && typeof err.constraints === 'object') {
            result.push(...Object.values(err.constraints));
        }
        if (err.children && err.children.length > 0) {
            result.push(...flatErrors(err.children));
        }
    }
    return result;
}
//# sourceMappingURL=flatErrors.js.map