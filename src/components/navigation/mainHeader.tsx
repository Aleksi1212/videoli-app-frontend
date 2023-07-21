import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Image } from '@unpic/qwik';

import star from '~/icons/star.webp';
import coffee from '~/icons/coffee.webp';

export const MainHeader = component$(() => {
    return (
        <header class="header fixed top-0 flex w-full justify-between p-5">
            <h1 class="text-5xl text-[white]">Videoli</h1>

            <div class="flex items-center gap-3">
                <Link
                    href="/signIn"
                    class="mainHeaderButton h-11 bg-primary_button"
                >
                    <p>Sign In</p>
                </Link>

                <div class="h-full border-l"></div>

                <a
                    href="https://github.com/Aleksi1212/videoli-app-frontend"
                    target="_blank"
                    class="mainHeaderButton headerGlassyButton h-11"
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
                    class="mainHeaderButton headerGlassyButton h-11"
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
