import { component$ } from '@builder.io/qwik';
import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city';

import { Dashboard } from '~/components/editing/restricted/dashboard/dashboard';

export const useUserDataLoad = routeLoader$(async (requestEvent) => {
    const { params, query, redirect } = requestEvent;

    const userId = query.get('uid');
    const { viewing } = params;
    const possibleViews: string[] = ['drafts', 'recents', 'deleted'];

    if (!userId) {
        redirect(301, '/signIn');
    }
    if (!possibleViews.includes(viewing)) {
        redirect(301, `/dashboard/recents/?uid=${userId}`);
    }

    // request api and get data

    // model data
    return {
        user: {
            id: '12345',
            name: 'cool name',
            email: 'coolemail@gmail.com',
            profileImage: 'cool profile Image',
        },
        files: [
            {
                id: '12345',
                name: 'cool filename',
                fileImage: 'cool file image',
            },
        ],
    };
});

export default component$(() => {
    const userData = useUserDataLoad();
    const { user, files } = userData.value;

    return <Dashboard user={user} files={files} />;
});

export const head: DocumentHead = {
    title: 'Videoli - Dashboard',
    meta: [
        {
            name: 'Videoli dashboard',
            content:
                'Your videoli dashboard. Where you can create, edit, and delete your videoli files.',
        },
    ],
};
