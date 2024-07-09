import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useDogStore } from '../store';
import ImageModal from '../components/ImageModel.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const store = useDogStore();
const breed = route.params.breed;
const modalVisible = ref(false);
const modalIndex = ref(0);
const openModal = (index) => {
    modalIndex.value = index;
    modalVisible.value = true;
};
const closeModal = () => {
    modalVisible.value = false;
};
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
        for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.images))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.images.length)))
                            return;
                        __VLS_ctx.openModal(index);
                        // @ts-ignore
                        [images, images, openModal,];
                    } }, key: ((image)), ...{ class: ("grid-item") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((image)), alt: ((`${__VLS_ctx.breed} image`)), });
            // @ts-ignore
            [breed,];
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    // @ts-ignore
    [ImageModal,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ImageModal, new ImageModal({ ...{ 'onClose': {} }, ...{ 'onUpdate:index': {} }, images: ((__VLS_ctx.images)), index: ((__VLS_ctx.modalIndex)), visible: ((__VLS_ctx.modalVisible)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onClose': {} }, ...{ 'onUpdate:index': {} }, images: ((__VLS_ctx.images)), index: ((__VLS_ctx.modalIndex)), visible: ((__VLS_ctx.modalVisible)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ 'onClose': {} }, ...{ 'onUpdate:index': {} }, images: ((__VLS_ctx.images)), index: ((__VLS_ctx.modalIndex)), visible: ((__VLS_ctx.modalVisible)), }));
    let __VLS_5;
    const __VLS_6 = {
        onClose: (__VLS_ctx.closeModal)
    };
    const __VLS_7 = {
        'onUpdate:index': (...[$event]) => {
            __VLS_ctx.modalIndex = $event;
            // @ts-ignore
            [images, modalIndex, modalIndex, modalVisible, closeModal,];
        }
    };
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(ImageModal, __VLS_1);
    let __VLS_2;
    let __VLS_3;
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
                ImageModal: ImageModal,
                breed: breed,
                modalVisible: modalVisible,
                modalIndex: modalIndex,
                openModal: openModal,
                closeModal: closeModal,
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