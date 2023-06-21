import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';

export const AuthenticationBox = component$(() => {
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

    return (
        <>
            <div class="w-[26rem] h-[32rem] mt-24 bg-secondary_button rounded-xl flex flex-col p-5">
                <h1 class="text-3xl text-center">
                    {'Log in or sign up for a  '}
                    <span class="text-primary_button">videoli</span>
                    {' account'}
                    <span class="text-primary_button">.</span>
                </h1>
            </div>
        </>
    );
});
