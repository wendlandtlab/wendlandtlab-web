 <template>
    <div class="mb-5">
<a :href="Link">{{ Authors }} {{ Title }} <i> {{ Journal }} </i> <b> {{ Year }}</b>, <i> {{ Volume }}</i>, {{ Pages }}.</a>
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
});
</script>