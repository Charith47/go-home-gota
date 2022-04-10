import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont: 'mdiSvg',
    },
    theme: {
        themes: {
            dark: {
                primary: '#FAFAFA',
                background: '#121212',
                justice: '#9B003A',
                strength: '#FFBC01',
                peace: '#00554E',
                victory: '#FD6C03'
            },
            light: {
                primary: '#121212',
                background: '#FAFAFA',
                justice: '#9B003A',
                strength: '#FFBC01',
                peace: '#00554E',
                victory: '#FD6C03'
            }
        },
        options: {
            customProperties: true
        },
    }
});
