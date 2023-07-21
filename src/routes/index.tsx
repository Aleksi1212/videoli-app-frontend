import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { MainPageEditor } from '~/components/editing/open/editor';
import { MainHeader } from '~/components/navigation/mainHeader';
import { type DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    useVisibleTask$(() => {
        let textDisplay = document.getElementById('text');
        let phrases = ['layers', 'images', 'videos'];
        let i = 0, j = 0;
        let currentPhrase: string[] = [];
        let deleting = false, ended = false;

        function typeWriter() {
            ended = false;
            if (textDisplay) {
                textDisplay.innerHTML = currentPhrase.join('');

                if (i < phrases.length) {
                    if (!deleting && j <= phrases[i].length) {
                        currentPhrase.push(phrases[i][j]);
                        j++;
                        textDisplay.innerHTML = currentPhrase.join('');
                    }
                    if (deleting && j <= phrases[i].length) {
                        currentPhrase.pop();
                        j--;
                        textDisplay.innerHTML = currentPhrase.join('');
                    }
                    if (j === phrases[i].length) {
                        ended = true;
                        deleting = true;
                    }
                    if (deleting && j === 0) {
                        currentPhrase = [];
                        deleting = false;
                        i++;
                        if (i === phrases.length) i = 0;
                    }
                }
            }

            const spedUp = Math.random() * (80 - 50) + 50;
            const normalSpeed = Math.random() * (200 - 100) + 100;
            const time = ended ? 1500 : deleting ? spedUp : normalSpeed;
            setTimeout(typeWriter, time);
        }
        typeWriter();
    });

    return (
        <div class="gradientBg">
            <section class="relative flex h-[100svh] w-full justify-center">
                <div class="absolute top-52 flex w-full flex-col gap-10 pl-10">
                    <h1 class="text-glow text-9xl text-textColor">
                        {'With '}
                        <span class="text-gradient font-bold">videoli</span>
                        {' you can add '}
                        <br />
                        <span id="text">layers</span>
                        {' to your videos '}
                    </h1>

                    <div class="flex gap-2">
                        <a
                            href="#editor"
                            class="mainHeaderButton bg-primary_button py-3 text-2xl"
                        >
                            Try it out
                        </a>
                        <Link
                            href="/signIn"
                            class="mainHeaderButton headerGlassyButton text-2xl"
                        >
                            More features
                        </Link>
                    </div>
                </div>
            </section>

            <section
                class="flex h-[100svh] w-full items-center justify-center"
                id="editor"
            >
                <MainPageEditor />
            </section>

            <footer class="footer-center mt-56 grid h-[50svh] w-full rounded-t-3xl bg-background text-textColor">
                <h1 class="text-4xl">cool footer</h1>
            </footer>

            <MainHeader />
        </div>
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
