import { component$, useVisibleTask$, useSignal, $ } from '@builder.io/qwik';
import { emailSchema, type EmailForm } from '~/dataHandler/schemas';
import { type SubmitHandler, useForm, zodForm$ } from '@modular-forms/qwik';

import { useEmailLoader } from '~/routes/logIn';

export const AuthenticationBox = component$(() => {
    const [, { Form, Field }] = useForm<EmailForm>({
        loader: useEmailLoader(),
        validate: zodForm$(emailSchema),
    });

    const codeSent = useSignal<boolean>(false);

    useVisibleTask$(({ track }) => {
        track(() => codeSent.value);

        const sent = localStorage.getItem('codeSent');
        if (sent === 'true') {
            codeSent.value = true;
        } else {
            localStorage.setItem('codeSent', String(codeSent.value));
        }
    });

    const handleSubmit: SubmitHandler<EmailForm> = $((values) => {
        console.log(values)
        codeSent.value = true
    })

    if (codeSent.value) {
        return <h1>Code sent</h1>
    }

    return (
        <>
            <div class="w-[30rem] h-[15rem] mt-24 bg-secondary_button rounded-xl flex flex-col p-4 justify-evenly">
                <h1 class="text-3xl text-center">
                    {'Log in or sign up for a  '}
                    <span class="text-primary_button">videoli</span>
                    {' account'}
                    <span class="text-primary_button">.</span>
                </h1>

                <Form
                    onSubmit$={$(handleSubmit)}
                    class="flex justify-center p-7 text-textColor"
                >
                    <Field name="email">
                        {(field, props) => (
                            <div class="w-full relative">
                                <input
                                    {...props}
                                    type="email"
                                    value={field.value}
                                    placeholder="Enter your email"
                                    class="w-full rounded-l-lg bg-background text-xl p-2 focus:outline-none"
                                />
                                {field.error && (
                                    <h1 class="text-lg text-[#ED2939] underline absolute pl-1 top-12 font-[500]">
                                        {field.error}
                                    </h1>
                                )}
                            </div>
                        )}
                    </Field>
                    <button
                        type="submit"
                        class="w-[40%] bg-primary_button rounded-r-full text-xl py-2 hover:brightness-75"
                    >
                        Log in
                    </button>
                </Form>
            </div>
        </>
    );
});
