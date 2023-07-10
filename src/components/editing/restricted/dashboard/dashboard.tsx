import { component$, useStore } from '@builder.io/qwik';
import { TopNavbar } from './navigation/topNavigation';
import { SideNavBar } from './navigation/sideNavigation';
import { ContentContainer } from './content/contentContainer';

export const Dashboard = component$<UserData>((props) => {
    const { user } = props;
    const selectedLayout: DashboardLayoutData = useStore({
        layout: 'table',
        colors: {
            table: '#101c44',
            list: 'none',
        },
    });

    return (
        <section class="dashboardGrid h-fit">
            <ContentContainer contentLayout={selectedLayout.layout} />
            <TopNavbar userId={user.id} selectedLayout={selectedLayout} />
            <SideNavBar userData={user} />
        </section>
    );
});
