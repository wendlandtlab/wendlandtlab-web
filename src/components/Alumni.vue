 <template>
  <div class="flex  pt-5 items-center ">
    <img
      :src="Picture"
      alt=""
      class="object-cover h-20 w-20 mr-4 overflow-hidden rounded-full shadow"
    />
    <div class="flex-col items-center">
      <div class="text-xl font-normal text-gray-800">
        {{ PersonName }}
        <a v-if="LinkedIn" :href="LinkedIn" class="pl-2">
          <Icon icon="logos:linkedin-icon" width="20" :inline="true"/>
        </a>
      </div>
      <div class="text-sm text-gray-600">
        {{ Title }}
      </div>
      <div v-if="CurrentPos" class="text-sm text-gray-600">
        {{ CurrentPos }}
      </div>
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
    CurrentPos: String,
    LinkedIn: String,
  },
});
</script>