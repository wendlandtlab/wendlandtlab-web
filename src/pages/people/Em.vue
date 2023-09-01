<script lang="ts">
import { Icon } from '@iconify/vue';
import em from '/@/assets/people/em.jpg?url';

export default {
    components: {
        Icon,
    },
    setup() {
        return {
            em,
        };
    },
};
</script>
<template>
    <div class="flex flex-col min-h-screen">
        <HeaderMenu />
        <div class="flex-grow justify-center align-middle">
            <div class="flex flex-col sm:flex-row mx-auto max-w-screen-xl py-10 px-6 items-center">
                <div class="flex-initial">
                    <TeamMember PersonName="Em Ball" ProfileLink="#" Title="Undergraduate student" :Picture="em"
                        Email="ekball[at]mit.edu" Pronouns="They/Them" />
                </div>
                <div class="flex-1 text-justify">
                    <p class="mb-4">
                        Em is from West Des Moines, Iowa, and is a Chemistry major in the Class of 2025. They are a thrower
                        (discus, hammer, shot put, javelin) on the MIT Track and Field team. Their hobbies are rollerblading
                        around campus and singing in MIT’s Centrifugues a capella group. Fun facts about Em are that they
                        can wiggle their ears, and they are staunchly anti orange juice. Em is very excited for the
                        opportunities that research in the Wendlandt lab offers.
                    </p>
                </div>
            </div>

        </div>
        <FooterBox />
    </div>
</template>