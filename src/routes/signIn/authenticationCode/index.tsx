import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import type { InitialValues } from '@modular-forms/qwik';
import type { AuthenticationCodeForm } from '~/dataHandler/schemas';

import { AuthenticationCodeBox } from '~/components/authentication/authentiactionCodeBox';

export const useAuthenticationCodeLoader = routeLoader$<
    InitialValues<AuthenticationCodeForm>
>(() => ({
    code: '',
}));

export default component$(() => {
    return (
        <section class="w-full h-[100svh] flex justify-center">
            <AuthenticationCodeBox />
        </section>
    );
});

export const head: DocumentHead = {
    title: 'Videoli - Sign In',
};
