import { rtkApi } from 'shared/api/rtkApi';
import { NotificationSchema } from '../model/types/NotificationSchema';

const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<NotificationSchema[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotifications = notificationsApi.useGetNotificationsQuery;
