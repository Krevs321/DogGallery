declare module '@fortawesome/vue-fontawesome' {
    import { DefineComponent } from 'vue';
    const FontAwesomeIcon: DefineComponent<{}, {}, any>;
    export { FontAwesomeIcon };
  }
  
  declare module '@fortawesome/fontawesome-svg-core' {
    import { IconDefinition } from '@fortawesome/fontawesome-common-types';
    const library: {
      add: (...icons: IconDefinition[]) => void;
    };
    export { library };
  }
  
  declare module '@fortawesome/free-solid-svg-icons' {
    import { IconDefinition } from '@fortawesome/fontawesome-common-types';
    export const faHome: IconDefinition;
    export const faInfoCircle: IconDefinition;
    export const faClipboardList: IconDefinition;
  }
  