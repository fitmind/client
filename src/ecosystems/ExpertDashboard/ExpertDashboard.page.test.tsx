import React from 'react';
import { shallow } from 'enzyme';
import ExpertDashboardPage from './ExpertDashboard';

describe('Customer Dashboard page', () => {
    it('renders without crashing', () => {
        shallow(<ExpertDashboardPage />);
    });
});
