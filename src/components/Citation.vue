 <template>
    <div class="mb-5">
<a href="#">{{ Authors }} {{ Title }} <i> {{ Journal }} </i> <b> {{ Year }}</b>, <i> {{ Issue }}</i>, {{ Pages }}.</a>
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
    Issue: String,
    Pages: String,
    Link: String,
  },
});
</script>