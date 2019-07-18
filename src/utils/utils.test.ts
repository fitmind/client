import { formatDate } from './utils';

describe('utils', () => {
    describe('formatDate', () => {
        it('should format the date according to moment', () => {
            expect(formatDate('2019-07-12T10:42:06.130Z')).toEqual('July 12th 2019');
        });
    });
});
