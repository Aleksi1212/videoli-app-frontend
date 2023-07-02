import { component$ } from '@builder.io/qwik';

import { Image } from '@unpic/qwik';
import add from '~/icons/add.webp';

export const TopNavbar = component$(() => {
    return (
        <div class="w-[85%] px-7 py-3 fixed right-0 flex justify-between items-center text-textColor border-b-2 border-netural">
            <h1 class="text-2xl">My videoli files</h1>
            <button class="px-4 py-2 rounded-md bg-primary_button flex justify-center items-center gap-2 hover:brightness-90 active:scale-[.99]">
                <Image
                    src={add}
                    alt="add"
                    width={20}
                    height={20}
                    loading="lazy"
                />
                <span>New videoli file</span>
            </button>
        </div>
    );
});
