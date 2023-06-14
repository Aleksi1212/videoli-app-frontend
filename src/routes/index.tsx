import { component$ } from '@builder.io/qwik';
import { VideoEditor } from '~/components/editor/videoEditor';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <>
            <div class="w-full h-[100svh] flex justify-center items-center">
                <VideoEditor />
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Videoli',
};
