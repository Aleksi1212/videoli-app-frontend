import { component$, useStore, $ } from '@builder.io/qwik';

export const VideoEditor = component$(() => {
    const waterMarkStyles = useStore<WaterMarkStyleTypes>({
        size: 50,
        opacity: 50,
    });
    const changeSize = $((event: any) => {
        waterMarkStyles.size = event.target.value;
    });
    const changeOpacity = $((event: any) => {
        waterMarkStyles.opacity = event.target.value;
    });

    return (
        <>
            <div class="flex flex-col bg-white rounded-xl shadow-lg p-5 gap-5">
                <div class="flex gap-5">
                    <div class="w-[40rem] h-[25rem] flex items-center shadow-md justify-center rounded-lg bg-[#eeeeee] cursor-pointer">
                        Insert Video
                    </div>
                    <div class="flex flex-col gap-5 w-[10rem]">
                        <div class="h-[10rem] flex items-center shadow-md justify-center rounded-lg bg-[#eeeeee] cursor-pointer">
                            Insert Image
                        </div>
                        <div class="flex flex-col gap-5">
                            <div class="flex gap-2 flex-col text-sm">
                                <span class="text-sm">Image Size (%):</span>
                                <div class="flex gap-2 mt-[-5px]">
                                    <input
                                        type="text"
                                        class="w-[30%] border border-black pl-1 rounded-md"
                                        value={waterMarkStyles.size}
                                        onChange$={changeSize}
                                    />
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={waterMarkStyles.size}
                                        class="w-[70%]"
                                        onChange$={changeSize}
                                    />
                                </div>
                            </div>
                            <div class="flex gap-2 flex-col text-sm">
                                <span class="text-sm">Image Opacity (%):</span>
                                <div class="flex gap-2 mt-[-5px]">
                                    <input
                                        type="text"
                                        class="w-[30%] border border-black pl-1 rounded-md"
                                        value={waterMarkStyles.opacity}
                                        onChange$={changeOpacity}
                                    />
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={waterMarkStyles.opacity}
                                        class="w-[70%]"
                                        onChange$={changeOpacity}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="w-full p-2 rounded-md bg-[#006ce9] text-white hover:brightness-95 active:scale-[99%]">
                    Convert & download
                </button>
            </div>
        </>
    );
});
