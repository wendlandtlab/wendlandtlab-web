 <template>
    <div class="mb-5">
<a :href="Link">{{ Authors }} {{ titleWithStop }} <i> {{ Journal }} </i> <b> {{ Year }}</b>, <i> {{ Volume }}</i>, {{ Pages }}.</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Citation',
  props: {
    Authors: String,
    Title: String,
    Journal: String,
    Year: String,
    Volume: String,
    Pages: String,
    Link: String,
  },
  computed: {
    // end the title with a period unless it already ends in punctuation
    titleWithStop(): string {
      const title = this.Title ?? '';
      return /[.?!]$/.test(title) ? title : `${title}.`;
    },
  },
});
</script>