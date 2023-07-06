import { component$ } from '@builder.io/qwik';
import { TopNavbar } from './topNavigation';
import { SideNavBar } from './sideNavigation';
import { Content } from './content';

export const Dashboard = component$<UserData>((props) => {
    const { user } = props

    return (
        <section class="dashboardGrid h-[100dvh]">
            <TopNavbar userId={user.id} />
            <SideNavBar userData={user} />
            <Content />
        </section>
    );
});
