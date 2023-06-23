import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
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

export const AuthenticationCodeBox = component$(() => {
    const [, { Form, Field }] = useForm<AuthenticationCodeForm>({
        loader: useAuthenticationCodeLoader(),
        validate: zodForm$(authenticationCodeSchema)
    })

    const loading = useSignal<boolean>(true)
    const sentToEmail = useSignal<string>('')

    useVisibleTask$(() => {
        const params = new URLSearchParams(window.location.search)
        const sentTo = params.get('sentTo') || ''
        const storage = JSON.parse(
            localStorage.getItem('codeSent') || '{}'
        )

        if (storage.sentTo === sentTo) {
            sentToEmail.value = sentTo
        } else {
            window.location.href = '/signIn'
        }

        loading.value = false
    })

    if (loading.value) {
        return <span class="loading loading-spinner w-[5rem]"></span>;
    }

    return (
        <>
            <div class="w-[28rem] h-[32rem] mt-24 bg-secondary_button rounded-xl flex flex-col justify-evenly items-center">
                <AuthenticationBoxImage />

                <div class="w-full px-10 gap-7 flex flex-col">
                    <AuthenticationBoxTitle authStep="code" email={sentToEmail.value} />

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
                            class="w-full bg-primary_button rounded-lg text-xl py-2 hover:brightness-75 active:scale-95"
                        >
                            Sign In
                        </button>
                    </Form>
                </div>
            </div>
        </>
    );
});
