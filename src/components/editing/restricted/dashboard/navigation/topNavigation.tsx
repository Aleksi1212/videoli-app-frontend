import { component$, $ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { Image } from '@unpic/qwik';

import add from '~/icons/add.webp';
import table_layout from '~/icons/table-layout.webp';
import list_layout from '~/icons/list-layout.webp';

import { createContentSections } from '~/utils/dashboardUtils/createViews';
import { upperCaseFirst } from 'upper-case-first';

interface TopNavProps {
    userId: string;
    selectedLayout: DashboardLayoutData;
}

export const TopNavbar = component$<TopNavProps>((props) => {
    const { userId, selectedLayout } = props;
    const { viewing } = useLocation().params;
    const viewingTitles: Record<string, string> = {
        recents: 'My recent videoli files',
        drafts: 'My videoli drafts',
        deleted: 'My deleted videoli files',
    };
    const contentSections = createContentSections(
        ['recents', 'drafts', 'deleted'],
        viewing
    );

    const changeSelectedLayout = $((layout: DashboardLayout) => {
        selectedLayout.layout = layout;
        selectedLayout.colors = {
            table: layout === 'table' ? '#101c44' : 'none',
            list: layout === 'list' ? '#101c44' : 'none',
        };
    });

    return (
        <div class="dashboardTopNav sticky top-0 text-textColor flex flex-col border-b-2 border-accentColor2 bg-background">
            <div class="flex justify-between h-[60%] items-center w-full px-7 border-b-2 border-accentColor2">
                <h1 class="text-2xl">{viewingTitles[viewing]}</h1>
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
                <div class="flex gap-1 text-sm">
                    {contentSections.map((section) => {
                        const title = upperCaseFirst(section.label);
                        return (
                            <Link
                                key={section.label}
                                href={`${section.path}?uid=${userId}`}
                                class="hover:bg-accentColor2 px-3 py-1 rounded-md"
                                style={{
                                    'pointer-events': section.selected
                                        ? 'none'
                                        : 'auto',
                                    backgroundColor: section.selected
                                        ? '#101c44'
                                        : 'none',
                                }}
                            >
                                {title}
                            </Link>
                        );
                    })}
                </div>

                <div class="flex gap-1">
                    <button
                        class="layoutButton"
                        onClick$={() => changeSelectedLayout('table')}
                        style={{
                            backgroundColor: selectedLayout.colors.table,
                            'pointer-events':
                                selectedLayout.layout === 'table'
                                    ? 'none'
                                    : 'auto',
                        }}
                    >
                        <Image
                            src={table_layout}
                            alt="table"
                            width={18}
                            height={18}
                            loading="lazy"
                        />
                        <div class="layoutButtonToolTip">
                            <p>Table</p>
                        </div>
                    </button>
                    <button
                        class="layoutButton"
                        onClick$={() => changeSelectedLayout('list')}
                        style={{
                            backgroundColor: selectedLayout.colors.list,
                            'pointer-events':
                                selectedLayout.layout === 'list'
                                    ? 'none'
                                    : 'auto',
                        }}
                    >
                        <Image
                            src={list_layout}
                            alt="list"
                            width={18}
                            height={18}
                            loading="lazy"
                        />
                        <div class="layoutButtonToolTip">
                            <p>List</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
});
