import { onMounted, ref } from 'vue';
import { useDogStore } from '../store';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useDogStore();
const breedImages = ref({});
onMounted(async () => {
    await store.fetchBreeds();
    if (store.breeds.length) {
        const imagePromises = store.breeds.map(async (breed) => {
            breedImages.value[breed.breed] = await store.fetchRandomImageForBreed(breed.breed);
        });
        await Promise.all(imagePromises);
        console.log("Breed images:", breedImages.value);
    }
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("album") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid-container") }, });
    if (__VLS_ctx.store.breeds.length) {
        for (const [breed] of __VLS_getVForSourceType((__VLS_ctx.store.breeds))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, key: ((breed.breed)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-img") }, ...{ style: (({ backgroundImage: 'url(' + __VLS_ctx.breedImages[breed.breed] + ')' })) }, });
            // @ts-ignore
            [store, store, breedImages,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("card-title") }, });
            (breed.breed.toUpperCase());
            // @ts-ignore
            const __VLS_0 = {}
                .RouterLink;
            ({}.RouterLink);
            ({}.RouterLink);
            __VLS_components.RouterLink;
            __VLS_components.routerLink;
            __VLS_components.RouterLink;
            __VLS_components.routerLink;
            // @ts-ignore
            [RouterLink, RouterLink,];
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (({ name: 'Breed', params: { breed: breed.breed } })), ...{ class: ("btn btn-primary") }, }));
            const __VLS_2 = __VLS_1({ to: (({ name: 'Breed', params: { breed: breed.breed } })), ...{ class: ("btn btn-primary") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ to: (({ name: 'Breed', params: { breed: breed.breed } })), ...{ class: ("btn btn-primary") }, }));
            (__VLS_5.slots).default;
            const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.store.error || 'Loading breeds...');
        // @ts-ignore
        [store,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['album'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['grid-container'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['card-img'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['card-title'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-primary'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                store: store,
                breedImages: breedImages,
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
//# sourceMappingURL=HomeView.vue.js.map