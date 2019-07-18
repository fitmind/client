import CONFIG from './config';

describe('config routes', () => {
    it('should render the correct string for navigate expert', () => {
        expect(CONFIG.routes.NavigateToExpert(10)).toEqual('/expert/10');
    });
    it('should render the correct string for navigate listing', () => {
        expect(CONFIG.routes.NavigateToListing(10)).toEqual('/listing/10');
    });
});
