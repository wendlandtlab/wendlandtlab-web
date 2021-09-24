 <template>
  <div class="max-w-xs px-5">
    <div :class="IconClasses">
      <Icon :icon="Icon" width="35" class="iconify-inline" />
    </div>
    <div :class="AreaClasses">
      <p>{{ Area }}</p>
    </div>
    <div class="text-left text-sm text-gray-600 pb-3">
      <p>{{ Description }}</p>
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
    IconColor: String,
    Icon: String,
    Area: String,
    Description: String,
  },
  computed: {
    IconClasses(): { [key: string]: boolean } {
      return {
        'w-18 h-18 rounded-full flex justify-center align-center items-center': true,
        'text-red-700 bg-red-200': this.IconColor === 'red',
        'text-blue-700 bg-blue-200': this.IconColor === 'blue',
        'text-lime-700 bg-lime-200': this.IconColor === 'green',
        'text-orange-700 bg-orange-200': this.IconColor === 'orange',
        'text-amber-700 bg-amber-200': this.IconColor === 'yellow',
        'text-violet-700 bg-violet-200': this.IconColor === 'purple',
      };
    },
    AreaClasses(): { [key: string]: boolean } {
      return {
        'w-full font-extrabold text-normal text-left pt-2 pb-1 text-xl': true,
        'text-red-700': this.IconColor === 'red',
        'text-blue-700': this.IconColor === 'blue',
        'text-lime-700': this.IconColor === 'green',
        'text-orange-700': this.IconColor === 'orange',
        'text-amber-700': this.IconColor === 'yellow',
        'text-violet-700': this.IconColor === 'purple',
      };
    },
  },
});
</script>