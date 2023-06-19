import { component$, useStore, $ } from '@builder.io/qwik';

export const VideoEditor = component$(() => {
    const media = useStore<MediaTypes>({
        video: '',
        waterMark: '',
    });
    const waterMarkStyles = useStore<WaterMarkStyleTypes>({
        xPos: { value: 50, max: 100, header: 'Image x-position' },
        yPos: { value: 50, max: 100, header: 'Image y-position' },
        size: { value: 50, max: 100, header: 'Image size (%)' },
        opacity: { value: 50, max: 100, header: 'Image opacity (%)' },
        rotation: { value: 180, max: 360, header: 'Image rotation (deg)' },
    });

    const changeMedia = $((event: any) => {
        const mediaKey = event.target.name as keyof MediaTypes
        media[mediaKey] = URL.createObjectURL(event.target.files[0])
    })

    const changeStyles = $((event: any) => {
        const styleKey = event.target.name as keyof WaterMarkStyleTypes
        const currentStyleChange: WaterMarkStyleValues = waterMarkStyles[styleKey];

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
                    <div class="w-[50rem] h-[30rem] rounded-lg bg-[#101424] overflow-hidden">
                        <label class="w-full h-full cursor-pointer flex items-center justify-center hover:opacity-75">
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
                                    <p class="text-2xl">Insert Video</p>
                            }
                        </label>
                    </div>
                    <div class="flex flex-col gap-3 w-[12.5rem]">
                        <div class="h-[40%] rounded-lg bg-[#101424]">
                            <label class="w-full h-full cursor-pointer flex items-center justify-center hover:opacity-75 overflow-hidden">
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
                                        <p class="text-xl">Insert Image</p>
                                }
                            </label>
                        </div>
                        <div class="flex flex-col justify-evenly h-[60%] bg-secondary_button px-3 rounded-lg">
                            {
                                Object.keys(waterMarkStyles).map((key: string) => {
                                    const styleKey = key as keyof WaterMarkStyleTypes
                                    const currentStyle: WaterMarkStyleValues = waterMarkStyles[styleKey]

                                    return (
                                        <div class="flex gap-2 flex-col text-sm">
                                            <span>{currentStyle.header}</span>
                                            <div class="flex gap-2 mt-[-5px] items-center">
                                                <input
                                                    type="range"
                                                    name={key}
                                                    min={0}
                                                    max={currentStyle.max}
                                                    value={currentStyle.value}
                                                    class="range range-xs range-primary"
                                                    onChange$={changeStyles}
                                                />
                                                <input
                                                    type="number"
                                                    name={key}
                                                    class="styleAdjustorInput"
                                                    value={currentStyle.value}
                                                    onChange$={changeStyles}
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
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
