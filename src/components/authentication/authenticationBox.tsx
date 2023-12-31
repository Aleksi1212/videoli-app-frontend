import { component$, useVisibleTask$, useSignal, $ } from '@builder.io/qwik';
import { emailSchema, type EmailForm } from '~/dataHandler/schemas';
import { useForm, zodForm$ } from '@modular-forms/qwik';
import { useEmailLoader, useEmailAction } from '~/routes/signIn';
import { useNavigate } from '@builder.io/qwik-city';

import {
    AuthenticationBoxTitle,
    AuthenticationBoxImage,
} from './authenticationBoxContent';

export const AuthenticationBox = component$(() => {
    const [, { Form, Field }] = useForm<EmailForm>({
        loader: useEmailLoader(),
        validate: zodForm$(emailSchema),
    });
    const formErrorMessages = {
        warning: 'Please enter your email',
        error: 'Invalid email',
    };
    const navigate = useNavigate()

    const loading = useSignal<boolean>(true);
    const codeSent = useSignal<boolean>(false);
    const codeSentTo = useSignal<string>('');

    useVisibleTask$(({ track }) => {
        track(() => {
            codeSent.value, codeSentTo.value;
        });

        const sent = localStorage.getItem('codeSent') || '{}';
        const sentData = JSON.parse(sent);
        if (sentData.sent && sentData.sentTo !== '') {
            codeSent.value = true;
            codeSentTo.value = sentData.sentTo;
        } else {
            localStorage.setItem(
                'codeSent',
                JSON.stringify({
                    sent: codeSent.value,
                    sentTo: codeSentTo.value,
                })
            );
        }
        loading.value = false;
    });

    const action = useEmailAction();
    const requestAuthenticationCode = $(async (values: EmailForm) => {
        loading.value = true;
        const data = await action.submit({ email: values.email });
        codeSent.value = data.value.success;
        codeSentTo.value = data.value.email || '';
    });

    if (loading.value) {
        return <span class="loading loading-spinner w-[5rem]"></span>;
    }

    if (codeSent.value && codeSentTo.value) {
        loading.value = true;
        navigate(`/signIn/authenticationCode?sentTo=${codeSentTo.value}`);
    }

    return (
        <>
            <div class="w-[28rem] h-[32rem] mt-24 rounded-xl pb-10 flex flex-col justify-between items-center authBoxBackground">
                <AuthenticationBoxImage />

                <div class="w-full px-10 gap-7 flex flex-col">
                    <AuthenticationBoxTitle authStep="email" />

                    <Form
                        onSubmit$={requestAuthenticationCode}
                        class="flex flex-col justify-center text-textColor gap-3"
                    >
                        <Field name="email">
                            {(field, props) => (
                                <div class="w-full relative">
                                    <input
                                        {...props}
                                        type="email"
                                        value={field.value}
                                        placeholder="Enter email address..."
                                        class="w-full rounded-lg bg-background text-xl p-2 focus:outline-none"
                                    />
                                    {field.error && (
                                        <h1
                                            class="text-lg underline absolute pl-1 top-[-2rem] font-[500]"
                                            style={{
                                                color:
                                                    field.error ===
                                                    formErrorMessages.warning
                                                        ? '#f1b465'
                                                        : '#fa1e4e',
                                            }}
                                        >
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
                            Continue
                        </button>
                    </Form>
                </div>
            </div>
        </>
    );
});
