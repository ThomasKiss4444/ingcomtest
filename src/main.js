import "bootstrap";
import jsonList from '../src/data/list.json';

localStorage.setItem('list', JSON.stringify(jsonList.ads));

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faStar, faList, faArrowLeft, faAngleLeft, faCalendarDays, faBars)

import { VueFinalModal }  from 'vue-final-modal'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('VueFinalModal', VueFinalModal);

app.use(router)

app.mount('#app')
