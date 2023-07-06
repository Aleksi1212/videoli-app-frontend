import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

import { Image } from '@unpic/qwik';
import add from '~/icons/add.webp';

import { createContentSections } from '~/utils/dashboardUtils/changeView';
import { turnIntoTitle } from '~/utils/stringManipulation';

export const TopNavbar = component$((props: { userId: string }) => {
    const { userId } = props;
    const { viewing } = useLocation().params;
    const contentSections = createContentSections(
        ['drafts', 'recents', 'deleted'],
        viewing
    );

    return (
        <div class="dashboardTopNav sticky top-0 text-textColor flex flex-col border-b-2 border-accentColor2 bg-background">
            <div class="flex justify-between h-[60%] items-center w-full px-7 border-b-2 border-accentColor2">
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
            <div class=" w-full h-[40%] px-10 flex items-center justify-between">
                <div class="flex gap-1 text-xs">
                    {contentSections.map((section) => {
                        const title = turnIntoTitle(section.label);
                        return (
                            <Link
                                key={section.label}
                                href={`${section.path}?uid=${userId}`}
                                class="hover:bg-accentColor2 px-3 py-1 rounded-md"
                                style={{
                                    'pointer-events': section.clickable
                                        ? 'auto'
                                        : 'none',
                                    'backgroundColor': section.clickable ? 'none' : '#101c44'
                                }}
                            >
                                {title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
});
