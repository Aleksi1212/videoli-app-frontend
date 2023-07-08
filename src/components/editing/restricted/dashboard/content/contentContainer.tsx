import { component$ } from '@builder.io/qwik';
import { ContentBox } from './contentBox';

interface ContentProps {
    contentLayout: DashboardLayout;
}

export const ContentContainer = component$<ContentProps>((props) => {
    const { contentLayout } = props;
    console.log(contentLayout)

    return (
        <div class="dashboardContent flex justify-center p-5">
            <div class="flex flex-wrap gap-4 h-fit w-full">
                <ContentBox
                    image="https://picsum.photos/536/354"
                    title="cool title"
                />
            </div>
        </div>
    );
});
