import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faInfoCircle, faClipboardList } from '@fortawesome/free-solid-svg-icons';
library.add(faHome, faInfoCircle, faClipboardList);
export default defineComponent({
    name: 'Header',
    components: {
        FontAwesomeIcon,
    },
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("navbar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar-container") }, });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("nav-link") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("nav-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/"), ...{ class: ("nav-link") }, }));
    // @ts-ignore
    const __VLS_6 = {}
        .FontAwesomeIcon;
    ({}.FontAwesomeIcon);
    __VLS_components.FontAwesomeIcon;
    __VLS_components.fontAwesomeIcon;
    // @ts-ignore
    [FontAwesomeIcon,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ((['fas', 'home'])), }));
    const __VLS_8 = __VLS_7({ icon: ((['fas', 'home'])), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ icon: ((['fas', 'home'])), }));
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    // @ts-ignore
    const __VLS_12 = {}
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/about"), ...{ class: ("nav-link") }, }));
    const __VLS_14 = __VLS_13({ to: ("/about"), ...{ class: ("nav-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ to: ("/about"), ...{ class: ("nav-link") }, }));
    // @ts-ignore
    const __VLS_18 = {}
        .FontAwesomeIcon;
    ({}.FontAwesomeIcon);
    __VLS_components.FontAwesomeIcon;
    __VLS_components.fontAwesomeIcon;
    // @ts-ignore
    [FontAwesomeIcon,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ((['fas', 'info-circle'])), }));
    const __VLS_20 = __VLS_19({ icon: ((['fas', 'info-circle'])), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ icon: ((['fas', 'info-circle'])), }));
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['navbar'];
        __VLS_styleScopedClasses['navbar-container'];
        __VLS_styleScopedClasses['nav-link'];
        __VLS_styleScopedClasses['nav-link'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        FontAwesomeIcon,
    };
    const __VLS_name = 'Header';
    let __VLS_internalComponent;
}
//# sourceMappingURL=Header.vue.js.map