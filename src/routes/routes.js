import homePage from '../components/main/homePage.vue';
import ContactUs from '../components/main/assets/ContactUs.vue';




export const routes = [
    { path: '/', name: 'HomePage', component: homePage },
    { path: '/contact-us', name: 'ContactUs', component: ContactUs },


    // Not Found Page
    // { path: '*', redirect: '/not-found'}
]                       