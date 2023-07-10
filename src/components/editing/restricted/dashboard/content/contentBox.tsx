import { component$, useSignal } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

import star from '~/icons/star.webp';
import star_filled from '~/icons/star-filled.webp';

interface ContentBoxProps {
    image: string;
    title: string;
}

export const ContentBox = component$<ContentBoxProps>((props) => {
    const { image, title } = props;
    const clicked = useSignal<boolean>(false);
    const favourited = useSignal<boolean>(false);

    return (
        <div class="w-[18rem] relative text-textColor" id="contentBox">
            <button
                class="w-full flex flex-col cursor-default"
                onClick$={() => (clicked.value = true)}
            >
                <div
                    class="w-full h-[12rem] rounded-lg overflow-hidden flex justify-center items-center border"
                    style={{
                        'border-color': clicked.value ? '#384ffa' : '#2b2735',
                    }}
                >
                    <Image
                        src={image}
                        alt="image"
                        width={500}
                        height={500}
                        loading="lazy"
                        class="w-full h-full"
                    />
                </div>
                <h1>{title}</h1>
            </button>
            <button
                class="bg-accentColor2 border absolute top-1 left-1 p-1 flex justify-center items-center rounded-md scale-0"
                id="favorite"
                onClick$={() => (favourited.value = !favourited.value)}
            >
                <Image
                    src={favourited.value ? star_filled : star}
                    alt="star"
                    width={20}
                    height={20}
                    loading="lazy"
                />
            </button>
        </div>
    );
});
