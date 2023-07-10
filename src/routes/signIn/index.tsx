import { component$ } from '@builder.io/qwik';
import { routeLoader$, routeAction$, type DocumentHead } from '@builder.io/qwik-city';
import type { InitialValues } from '@modular-forms/qwik';
import type { EmailForm } from '~/dataHandler/schemas';

import { AuthenticationBox } from '~/components/authentication/authenticationBox';

export const useEmailLoader = routeLoader$<InitialValues<EmailForm>>(() => ({
    email: '',
}));

export const useEmailAction = routeAction$(async (values) => {
    const signIn = new Promise((res) => {
        setTimeout(() => {
            res({ success: true })
        }, 500)
    })
    const data: any = await signIn
    return {
        success: data.success,
        email: values.email as string
    }
})

export default component$(() => {
    return (
        <section class="w-full h-[100svh] flex justify-center gradientBg">
            <AuthenticationBox />
        </section>
    );
});

export const head: DocumentHead = {
    title: 'Videoli - Sign In',
    meta: [
        {
            name: 'Sign In to your videoli account',
            content:
                'Sign In to your videoli account to get access to a cool editor',
        },
    ],
};
