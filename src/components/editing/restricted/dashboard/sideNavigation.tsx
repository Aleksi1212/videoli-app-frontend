import { component$ } from '@builder.io/qwik';

export const SideNavBar = component$((props: { userId: string }) => {
    return (
        <div class="w-[15%] h-full px-7 py-3 fixed left-0 text-textColor border-r-2 border-netural">
            {props.userId}
        </div>
    );
});
 