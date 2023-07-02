import { component$, useContext } from '@builder.io/qwik';
import { MediaContext } from './editor';

import { Image } from '@unpic/qwik';

export const MediaPlayer = component$((props: { type: string }) => {
    const media = useContext(MediaContext);
    const mediaType = props.type as keyof MediaTypes;

    return (
        <>
            {mediaType === 'video' ? (
                media.video ? (
                    <video
                        class="aspect-video w-full h-full"
                        controls
                        autoPlay
                        loop
                    >
                        <source src={media.video} type="video/mp4" />
                    </video>
                ) : (
                    <p class="text-2xl">Insert video</p>
                )
            ) : media.waterMark ? (
                <Image
                    src={media.waterMark}
                    class="object-contain aspect-square w-full h-full"
                    alt="waterMark"
                    width={100}
                    height={100}
                    loading="lazy"
                />
            ) : (
                <p class="text-xl">Insert image</p>
            )}
        </>
    );
});
