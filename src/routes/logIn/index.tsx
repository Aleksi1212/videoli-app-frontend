import { component$ } from '@builder.io/qwik';
import { routeLoader$, z, type DocumentHead } from '@builder.io/qwik-city';
import type { InitialValues } from '@modular-forms/qwik';

import { AuthenticationBox } from '~/components/authentication/authenticationBox';

const logInSchema = z.object({
    email: z.string().min(1, 'Please enter your email').email(),
});
type LogInForm = z.infer<typeof logInSchema>;

export const useLogInLoader = routeLoader$<InitialValues<LogInForm>>(() => ({
    email: '',
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
