import { component$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';

import { Dashboard } from '~/components/editing/restricted/dashboard/dashboard';

export default component$(() => {
    const { userId } = useLocation().params;
    return <Dashboard userId={userId} />;
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
