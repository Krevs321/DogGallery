import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useDogStore } from '../store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const store = useDogStore();
const breed = route.params.breed;
onMounted(() => {
    store.fetchBreedImages(breed);
});
const images = computed(() => store.images);
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("title") }, });
    (__VLS_ctx.breed);
    // @ts-ignore
    [breed,];
    if (__VLS_ctx.images.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid") }, });
        for (const [image] of __VLS_getVForSourceType((__VLS_ctx.images))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((image)), ...{ class: ("grid-item") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((image)), alt: ((`${__VLS_ctx.breed} image`)), });
            // @ts-ignore
            [breed, images, images,];
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-item'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                breed: breed,
                images: images,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=Breed.vue.js.map