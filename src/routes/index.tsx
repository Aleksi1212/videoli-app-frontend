import { component$ } from '@builder.io/qwik';
import { VideoEditor } from '~/components/editor/videoEditor';
import { MainHeader } from '~/components/navigation/mainHeader';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <>
            <div class="w-full h-[100svh] flex justify-center items-center">
                <VideoEditor />
            </div>

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
