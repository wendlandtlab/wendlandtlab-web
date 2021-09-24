 <template>

    <div class="flex mx-auto max-w-screen-lg pt-5 items-center px-5">
      <img
        :src="Picture"
        alt=""
        class="object-cover h-10 w-10 mr-4 overflow-hidden rounded-full shadow"
      />
      <div class="text-xl font-normal text-gray-800">
        {{ PersonName }}
      </div>
      <div class="pl-2 text-sm text-gray-600">
        {{ Title }}
      </div>
      <a v-if="Orcid" :href="Orcid" class="pl-2">
        <div>
          <Icon
            icon="cib:orcid"
            color="#84cc16"
            width="20"
            class="iconify-inline"
          />
        </div>
      </a>
      <a v-if="LinkedIn" :href="LinkedIn" class="pl-2">
        <div>
          <Icon icon="logos:linkedin-icon" width="20" class="iconify-inline" />
        </div>
      </a>
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
  },
});
</script>