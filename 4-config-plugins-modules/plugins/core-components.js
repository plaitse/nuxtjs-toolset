import Vue from 'vue';

import AppButton from '@/components/UI/AppButton.vue';
import AppControlInput from '@/components/UI/AppControlInput.vue';
import PostList from '@/components/Posts/PostList.vue';

// Makes this components accessible every on the app: <app-button />
Vue.component('AppButton', AppButton);
Vue.component('AppControlInput', AppControlInput);
Vue.component('PostList', PostList);
