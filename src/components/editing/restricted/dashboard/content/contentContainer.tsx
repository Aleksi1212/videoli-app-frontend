import { component$ } from '@builder.io/qwik';
import { ContentBox } from './contentBox';

interface ContentProps {
    contentLayout: DashboardLayout;
}

export const ContentContainer = component$<ContentProps>((props) => {
    const { contentLayout } = props;
    console.log(contentLayout)

    return (
        <div class="dashboardContent justify-center">
            <div class="flex flex-wrap gap-9 h-fit w-full p-6">
                <ContentBox
                    image="https://picsum.photos/536/354"
                    title="cool title"
                />
            </div>
        </div>
    );
});
