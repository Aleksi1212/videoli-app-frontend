import { component$ } from '@builder.io/qwik';
import { MainPageEditor } from '~/components/editing/open/editor';
import { MainHeader } from '~/components/navigation/mainHeader';
import { type DocumentHead } from '@builder.io/qwik-city';

import { Image } from '@unpic/qwik';
import logo1 from '~/icons/logo1.svg';

export default component$(() => {
    return (
        <>
            <section class="w-full h-[100svh] flex relative justify-center">
                <div class="absolute top-52 flex flex-col gap-20 items-center">
                    <h1 class="text-5xl text-textColor top-52 px-5">
                        {'With '}
                        <span class="text-accentColor1 font-bold">videoli</span>
                        {' you can add watermaks to your videos'}
                        <span class="text-accentColor1 font-bold">.</span>
                    </h1>
                    <a href="#editor">
                        <Image
                            src={logo1}
                            alt="logo1"
                            width={200}
                            height={200}
                            loading="lazy"
                        />
                    </a>
                </div>
            </section>

            <section
                class="w-full h-[100svh] flex justify-center items-center"
                id="editor"
            >
                <MainPageEditor />
            </section>

            <footer class="w-full h-[50svh] mt-56 bg-accentColor1 rounded-t-3xl grid footer-center text-textColor">
                <h1 class="text-4xl">cool footer</h1>
            </footer>

            <MainHeader />
        </>
    );
});

export const head: DocumentHead = {
    title: 'Videoli',
    meta: [
        {
            name: 'Watermark to video generator',
            content: 'Add watermarks to videos using videoli',
        },
    ],
};
