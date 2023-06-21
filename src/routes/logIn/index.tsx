import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import type { InitialValues } from '@modular-forms/qwik';
import type {
    EmailForm,
    AuthenticationCodeForm,
} from '~/dataHandler/schemas';

import { AuthenticationBox } from '~/components/authentication/authenticationBox';

export const useEmailLoader = routeLoader$<InitialValues<EmailForm>>(() => ({
    email: '',
}));
export const useAuthenticationCodeLoader = routeLoader$<
    InitialValues<AuthenticationCodeForm>
>(() => ({
    code: '',
}));

export default component$(() => {
    return (
        <section class="w-full h-[100svh] flex justify-center">
            <AuthenticationBox />
        </section>
    );
});

export const head: DocumentHead = {
    title: 'Videoli - log in',
    meta: [
        {
            name: 'Log in to your videoli account',
            content:
                'Log in to your videoli account to get access to a cool editor',
        },
    ],
};
