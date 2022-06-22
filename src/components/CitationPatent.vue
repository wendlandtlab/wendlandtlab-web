 <template>
    <div class="mb-5">
<a :href="Link">{{ Authors }} {{ Title }}. {{ Patent }}, {{ PubDate }}.</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Citation',
  props: {
    Authors: String,
    Title: String,
    Patent: String,
    PubDate: String,
    Link: String,
  },
});
</script>