import { component$, useSignal, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { useNavigate, useLocation } from '@builder.io/qwik-city';
import {
    authenticationCodeSchema,
    type AuthenticationCodeForm,
} from '~/dataHandler/schemas';
import { useForm, zodForm$ } from '@modular-forms/qwik';
import { useAuthenticationCodeLoader } from '~/routes/signIn/authenticationCode';

import {
    AuthenticationBoxTitle,
    AuthenticationBoxImage,
} from './authenticationBoxContent';
import { z } from '@builder.io/qwik-city';

const zodEmail = z.object({
    email: z.string().email()
})
type Email = z.infer<typeof zodEmail>

export const AuthenticationCodeBox = component$(() => {
    const [, { Form, Field }] = useForm<AuthenticationCodeForm>({
        loader: useAuthenticationCodeLoader(),
        validate: zodForm$(authenticationCodeSchema),
    });
    const { search } = useLocation().url;
    const searchParams = new URLSearchParams(search);
    const navigate = useNavigate();

    const loading = useSignal<boolean>(true);
    const sentToEmail: Email = useStore({
        email: ''
    })

    useVisibleTask$(() => {
        const sentTo = searchParams.get('sentTo') || '';
        const storage = JSON.parse(localStorage.getItem('codeSent') || '{}');

        if (storage.sentTo === sentTo) {
            sentToEmail.email = sentTo; 
        } else {
            navigate('/signIn');
        }

        loading.value = false;
    });

    if (loading.value) {
        return <span class="loading loading-spinner w-[5rem]"></span>;
    }

    return (
        <>
            <div class="w-[28rem] h-[32rem] mt-24 bg-secondary_button rounded-xl pb-10 flex flex-col justify-between items-center authBoxBackground">
                <AuthenticationBoxImage />

                <div class="w-full px-10 gap-7 flex flex-col">
                    <AuthenticationBoxTitle
                        authStep="code"
                        email={sentToEmail.email}
                    />

                    <Form class="flex flex-col justify-center text-textColor gap-3">
                        <Field name="code">
                            {(field, props) => (
                                <div class="w-full relative">
                                    <input
                                        {...props}
                                        type="code"
                                        value={field.value}
                                        placeholder="Enter acces code"
                                        class="w-full rounded-lg bg-background text-xl p-2 focus:outline-none"
                                        maxLength={6}
                                    />
                                    {field.error && (
                                        <h1 class="text-lg text-warning underline absolute pl-1 top-[-2rem] font-[500]">
                                            {field.error}
                                        </h1>
                                    )}
                                </div>
                            )}
                        </Field>
                        <button
                            type="submit"
                            class="w-full bg-primary_button rounded-lg text-xl py-2 hover:brightness-90 active:scale-[.99]"
                        >
                            Sign In
                        </button>
                    </Form>
                </div>
            </div>
        </>
    );
});
