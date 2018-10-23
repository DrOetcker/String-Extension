String.isNullOrEmpty = (valueToCheck: string): boolean => {
    return valueToCheck === undefined || valueToCheck === null || valueToCheck === '';
};

String.empty = '';
