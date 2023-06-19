import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Image } from '@unpic/qwik';

import star from '../../icons/star.webp'
import coffee from '../../icons/coffee.webp'

export const MainHeader = component$(() => {
    return (
        <header class="w-full flex p-5 fixed justify-between header top-0">
            <h1 class="text-5xl text-[white]">Videoli</h1>

            <div class="flex gap-3 items-center">
                <Link href="/logIn" class="mainHeaderButton bg-primary_button">
                    Sign up
                </Link>

                <div class="h-full border-l"></div>

                <a href="https://github.com/Aleksi1212/videoli-app-frontend" target="_blank" class="mainHeaderButton headerGlassyButton flex gap-2">
                    <p>Star on github</p>
                    <Image src={star} alt="star" width={24} height={24} loading="lazy" />
                </a>
                <Link href="/coffee" class="mainHeaderButton headerGlassyButton flex gap-2">
                    <p>Buy me coffee</p>
                    <Image src={coffee} alt="coffee" width={24} height={24} loading="lazy" />
                </Link>
            </div>
        </header>
    );
});
