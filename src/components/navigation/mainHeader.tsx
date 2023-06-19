import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const MainHeader = component$(() => {
    return (
        <div class="w-full flex p-5 fixed justify-between header top-0">
            <h1 class="text-5xl text-[white]">Videoli</h1>

            <div class="flex gap-3 items-center">
                <Link href="/logIn" class="mainHeaderButton bg-primary_button">
                    Sign up
                </Link>

                <div class="h-full border-l"></div>

                <a href="https://github.com/Aleksi1212/videoli-app-frontend" target="_blank" class="mainHeaderButton headerGlassyButton">
                    Star on github
                </a>
                <Link href="/buyCoffee" class="mainHeaderButton headerGlassyButton">
                    Buy me coffee
                </Link>
            </div>
        </div>
    );
});
