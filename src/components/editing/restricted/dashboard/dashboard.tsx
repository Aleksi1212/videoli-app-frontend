import { component$ } from '@builder.io/qwik';
import { TopNavbar } from './topNavigation';
import { SideNavBar } from './sideNavigation';

export const Dashboard = component$<UserData>((props) => {
    console.log(props)
    return (
        <section class="w-full h-[100svh]">
            <TopNavbar />
            <SideNavBar userData={props.user} />
        </section>
    );
});
