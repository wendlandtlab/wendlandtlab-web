 <template>
  <div class="px-5">
    <div class="mx-auto w-40 pt-5">
      <img
        :src="Picture"
        alt=""
        class="object-cover h-full w-full overflow-hidden rounded-full shadow"
      />
    </div>
    <div class="flex w-full items-center justify-center pt-2 pb-1">
      <p class="text-xl font-normal text-gray-800">{{ PersonName }}</p>
      <div class="flex justify-center">
        <a v-if="ProfileLink" :href="ProfileLink" class="mx-2">
          <div>
            <Icon
              icon="bi:file-person-fill"
              color="#475569"
              width="20"
              class="iconify-inline"
            />
          </div>
        </a>
        <a v-if="Orcid" :href="Orcid" class="mx-2">
          <div>
            <Icon
              icon="cib:orcid"
              color="#84cc16"
              width="20"
              class="iconify-inline"
            />
          </div>
        </a>
                <a v-if="LinkedIn" :href="LinkedIn" class="mx-2">
          <div>
            <Icon
              icon="logos:linkedin-icon"
              width="20"
              class="iconify-inline"
            />
          </div>
        </a>
      </div>
    </div>
    <div class="text-center text-sm text-gray-600">
      <p>{{ Title }}</p>
    </div>
        <div class="text-center text-sm italic text-gray-600 pb-3">
      <p>{{ Email }}</p>
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
  },
});
</script>