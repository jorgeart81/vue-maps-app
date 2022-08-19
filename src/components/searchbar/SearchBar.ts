import { defineComponent, ref } from 'vue'
import SearchResults from '../search-result/SearchResults.vue'
import { computed } from '@vue/reactivity';
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({
    name: '',
    components: { SearchResults },

    setup() {
        const debouncedTimeout = ref()
        const debouncedValue = ref('')

        const { searchPlacesByTerm } = usePlacesStore()

        return {
            debouncedValue,

            searchTerm: computed({
                get() {
                    return debouncedValue.value;
                },
                set(val: string) {
                    if (debouncedTimeout.value) clearTimeout(debouncedTimeout.value)

                    debouncedTimeout.value = setTimeout(() => {
                        debouncedValue.value = val
                        searchPlacesByTerm(val)
                    }, 500);
                }
            })
        }
    }
})