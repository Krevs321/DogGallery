export default (await import('vue')).defineComponent({
    props: {
        images: Array,
        index: Number,
        visible: Boolean
    },
    methods: {
        close() {
            this.$emit('close');
        },
        navigate(direction) {
            const newIndex = (this.index + direction + this.images.length) % this.images.length;
            this.$emit('update:index', newIndex); // Emitting an update to the index
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.close) }, ...{ class: ("modal") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.close) }, ...{ class: ("close") }, });
        // @ts-ignore
        [visible, close, close,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.images[__VLS_ctx.index])), ...{ class: ("full-image") }, });
        // @ts-ignore
        [images, index,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.visible)))
                        return;
                    __VLS_ctx.navigate(-1);
                    // @ts-ignore
                    [navigate,];
                } }, ...{ class: ("prev") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.visible)))
                        return;
                    __VLS_ctx.navigate(1);
                    // @ts-ignore
                    [navigate,];
                } }, ...{ class: ("next") }, });
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