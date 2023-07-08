import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';
import logo2 from '~/icons/logo2.svg';

interface AuthBoxTitleProps {
    authStep: string;
    email?: string;
}

export const AuthenticationBoxTitle = component$<AuthBoxTitleProps>((props) => {
    const content: AuthContent = {
        title: 'Sign In',
        content:
            '<p>By signing in you get access to a advanced editor with more features.</p>',
        contentStyles: 'text-center text-sm opacity-75',
    };

    if (props.authStep === 'code') {
        content.title = 'Enter Code';
        content.content = `<p>An access-code has been sent to <span class="text-[#1cb2f5]">${props.email}</span>. Please allow N minutes for the code to arrive, and check any spam/junk folders.</p>`;
        content.contentStyles =
            'text-center text-xs opacity-75 bg-background border border-primary_button p-2 rounded-lg';
    }

    return (
        <>
            <div class="flex flex-col gap-1 items-center">
                <h1 class="text-4xl text-textColor underline">
                    {content.title}
                </h1>
                <div
                    class={content.contentStyles}
                    dangerouslySetInnerHTML={content.content}
                ></div>
            </div>
        </>
    );
});

export const AuthenticationBoxImage = component$(() => {
    return (
        <div class="flex flex-col justify-center items-center gap-1 w-full h-full">
            <Image
                src={logo2}
                alt="logo2"
                width={250}
                height={250}
                loading="lazy"
            />
        </div>
    );
});
