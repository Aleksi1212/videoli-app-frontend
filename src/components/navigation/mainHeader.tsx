import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Image } from '@unpic/qwik';

import star from '~/icons/star.webp';
import coffee from '~/icons/coffee.webp';

export const MainHeader = component$(() => {
    return (
        <header class="w-full flex p-5 fixed justify-between top-0 header">
            <h1 class="text-5xl text-[white]">Videoli</h1>

            <div class="flex gap-3 items-center">
                <Link href="/signIn" class="mainHeaderButton bg-primary_button">
                    <p>Sign In</p>
                </Link>

                <div class="h-full border-l"></div>

                <a
                    href="https://github.com/Aleksi1212/videoli-app-frontend"
                    target="_blank"
                    class="mainHeaderButton headerGlassyButton"
                >
                    <p>Star on github</p>
                    <div>
                        <Image
                            src={star}
                            alt="star"
                            width={24}
                            height={24}
                            loading="lazy"
                        />
                    </div>
                </a>
                <Link
                    href="/coffee"
                    class="mainHeaderButton headerGlassyButton"
                >
                    <p>Buy me coffee</p>
                    <div>
                        <Image
                            src={coffee}
                            alt="coffee"
                            width={24}
                            height={24}
                            loading="lazy"
                        />
                    </div>
                </Link>
            </div>
        </header>
    );
});
