import { MultiSelectValues } from '../interfaces/multi-select-values';

export const getValuesFromMultiSelect = (values: MultiSelectValues[]): string[] => {
    return values.map(x => x.value);
};
