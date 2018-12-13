import NotificationViewer from '../NotificationViewer';
import renderer from 'react-test-renderer';
import React from 'react';
import { delay } from 'redux-saga';

jest.mock('../../services/NotificationsService');
const notificationService = require('../../services/NotificationsService').default;

describe('The notification viewer', () => {
    beforeAll(() => {
        notificationService.__setCount(5);
    });

    it('it should display the correct number of notifications', async() => {
        const tree = renderer
            .create(
                <NotificationViewer />
            );
        await delay();
        const instance = tree.root;
        const component = instance.findByProps({ className: 'notifications' });
        const text = component.children[0];
        expect(text).toEqual('5 Notifications Awaiting!');
    });
});