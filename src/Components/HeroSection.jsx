export function HeroSection(){
    return(
        <div>
        <div class="border border-yellow-600 p-4 bg-white md:p-8 dark:bg-yellow-800 rounded-lg" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-yellow-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">7300K</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Revenue</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Orders</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Refunds</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">100K+</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Reviews</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Top Forbes companies</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">4000K</dt>
                    <dd class="text-yellow-500 dark:text-yellow-400">Net Profit</dd>
                </div>
            </dl>
        </div>
        </div>

    )
}

