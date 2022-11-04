 <template>
  <div class="px-5">
    <div class="mx-auto w-40 pt-5">
      <router-link v-if="ProfileLink" :to="ProfileLink">
        <img
          :src="Picture"
          alt=""
          class="
            object-cover
            hover:opacity-50
            h-full
            w-full
            overflow-hidden
            rounded-full
            shadow
          "
        />
      </router-link>
    </div>
    <div class="flex w-full items-center justify-center pt-2 pb-1">
      <router-link v-if="ProfileLink" :to="ProfileLink"
        ><p class="text-xl font-normal text-gray-800">
          {{ PersonName }}
        </p></router-link
      >
      <div class="flex justify-center">
        <a v-if="Orcid" :href="Orcid" class="mx-2">
          <Icon
            icon="cib:orcid"
            color="#84cc16"
            width="20"
            class="iconify-inline"
          />
        </a>
        <a v-if="LinkedIn" :href="LinkedIn" class="mx-2">
          <Icon icon="logos:linkedin-icon" width="20" class="iconify-inline" />
        </a>
        <a v-if="Cv" :href="Cv" class="mx-2 text-purple-700">
          <Icon
            icon="academicons:cv-square"
            width="20"
            class="iconify-inline"
          />
        </a>
      </div>
    </div>
    <div class="text-center text-sm text-gray-600">
      <p>{{ Title }}</p>
    </div>
    <div class="text-center text-sm italic text-gray-600">
      <p>{{ Email }}</p>
    </div>
    <div v-if="Pronouns" class="text-center text-sm italic text-gray-600 pb-3">
      <p>Pronouns: {{ Pronouns }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  components: {
    Icon,
  },
  name: 'TeamMember',
  props: {
    PersonName: String,
    Orcid: String,
    ProfileLink: String,
    Title: String,
    Picture: String,
    Email: String,
    LinkedIn: String,
    Pronouns: String,
    Cv: String,
  },
});
</script>