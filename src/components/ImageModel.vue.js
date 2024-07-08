export default (await import('vue')).defineComponent({
    props: {
        images: Array,
        index: Number,
        visible: Boolean
    },
    data() {
        return {
            currentIndex: this.index
        };
    },
    methods: {
        close() {
            this.$emit('close');
        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        previous() {
            this.currentIndex = (this.currentIndex + this.images.length - 1) % this.images.length;
        }
    }
});
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
    if (__VLS_ctx.visible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.close) }, ...{ class: ("close") }, });
        // @ts-ignore
        [visible, close,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.images[__VLS_ctx.currentIndex])), ...{ class: ("full-image") }, });
        // @ts-ignore
        [images, currentIndex,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.previous) }, ...{ class: ("prev") }, });
        // @ts-ignore
        [previous,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.next) }, ...{ class: ("next") }, });
        // @ts-ignore
        [next,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['modal'];
        __VLS_styleScopedClasses['modal-content'];
        __VLS_styleScopedClasses['close'];
        __VLS_styleScopedClasses['full-image'];
        __VLS_styleScopedClasses['prev'];
        __VLS_styleScopedClasses['next'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
//# sourceMappingURL=ImageModel.vue.js.map