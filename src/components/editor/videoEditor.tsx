import { component$, useStore, $ } from '@builder.io/qwik';

export const VideoEditor = component$(() => {
    const media = useStore<MediaTypes>({
        video: '',
        waterMark: '',
    });
    const waterMarkStyles = useStore<WaterMarkStyleTypes>({
        size: { value: 50, max: 100 },
        opacity: { value: 50, max: 100 },
        rotation: { value: 180, max: 360 },
    });

    const changeMedia = $((event: any) => {
        //@ts-ignore
        media[event.target.name] = URL.createObjectURL(event.target.files[0])
    })

    const changeStyles = $((event: any) => {
        //@ts-ignore
        const currentStyleChange: WaterMarkStyleValues = waterMarkStyles[event.target.name];

        if (event.target.value > currentStyleChange.max) {
            currentStyleChange.value = currentStyleChange.max;
        } else {
            currentStyleChange.value = Number(event.target.value);
        }
    });

    return (
        <>
            <div class="flex flex-col gap-3 text-textColor">
                <div class="flex gap-3">
                    <div class="w-[40rem] h-[25rem] rounded-lg bg-[#101424] relative overflow-hidden">
                        <label class="w-full h-full absolute cursor-pointer flex items-center justify-center hover:opacity-75">
                            <input 
                                type="file"
                                name="video"
                                class="hidden"
                                accept="video/mp4"
                                onChange$={changeMedia}
                            />
                            {
                                media.video ? 
                                    <video class="aspect-video w-full h-full" controls autoPlay loop>
                                        <source src={media.video} type="video/mp4" />
                                    </video>
                                :
                                    <p>Insert Video</p>
                            }
                        </label>
                    </div>
                    <div class="flex flex-col gap-3 w-[10rem]">
                        <div class="h-[40%] rounded-lg bg-[#101424] relative">
                            <label class="w-full h-full absolute cursor-pointer flex items-center justify-center hover:opacity-75 overflow-hidden">
                                <input 
                                    type="file" 
                                    name="waterMark" 
                                    class="hidden" 
                                    accept="image/png, image/jpeg"
                                    onChange$={changeMedia}
                                />
                                {
                                    media.waterMark ? 
                                        <img src={media.waterMark} class="object-contain aspect-square w-full h-full" alt="waterMark" /> 
                                    : 
                                        <p>Insert Image</p>
                                }
                            </label>
                        </div>
                        <div class="flex flex-col justify-evenly h-[60%] bg-secondary_button px-3 rounded-lg">
                            <div class="flex gap-2 flex-col text-sm">
                                <span>Image Size (%)</span>
                                <div class="flex gap-2 mt-[-5px] items-center">
                                    <input
                                        type="range"
                                        name="size"
                                        min="0"
                                        max="100"
                                        value={waterMarkStyles.size.value}
                                        class="range range-xs range-primary"
                                        onChange$={changeStyles}
                                    />
                                    <input
                                        type="number"
                                        name="size"
                                        class="styleAdjustorInput"
                                        value={waterMarkStyles.size.value}
                                        onChange$={changeStyles}
                                    />
                                </div>
                            </div>
                            <div class="flex gap-2 flex-col text-sm">
                                <span>Image Opacity (%)</span>
                                <div class="flex gap-2 items-center mt-[-5px]">
                                    <input
                                        type="range"
                                        name="opacity"
                                        min="0"
                                        max="100"
                                        value={waterMarkStyles.opacity.value}
                                        class="range range-xs range-primary"
                                        onChange$={changeStyles}
                                    />
                                    <input
                                        type="text"
                                        name="opaxity"
                                        class="styleAdjustorInput"
                                        value={waterMarkStyles.opacity.value}
                                        onChange$={changeStyles}
                                    />
                                </div>
                            </div>
                            <div class="flex gap-2 flex-col text-sm">
                                <span>Image Rotation (deg)</span>
                                <div class="flex gap-2 mt-[-5px] items-center">
                                    <input
                                        type="range"
                                        name="rotation"
                                        min="0"
                                        max="360"
                                        value={waterMarkStyles.rotation.value}
                                        class="range range-xs range-primary"
                                        onChange$={changeStyles}
                                    />
                                    <input
                                        type="number"
                                        name="rotation"
                                        class="styleAdjustorInput"
                                        value={waterMarkStyles.rotation.value}
                                        onChange$={changeStyles}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="w-full p-4 text-xl rounded-full bg-primary_button hover:brightness-95 active:scale-[99%]">
                    Download
                </button>
            </div>
        </>
    );
});
