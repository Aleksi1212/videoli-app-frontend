import { component$ } from '@builder.io/qwik';
import { TopNavbar } from './topNavigation';
import { SideNavBar } from './sideNavigation';

export const Dashboard = component$((props: { userId: string }) => {
    return (
        <section class="w-full h-[100svh]">
            <TopNavbar />
            <SideNavBar userId={props.userId} />
        </section>
    );
});
