import { createMemoryHistory, createRouter } from "vue-router";

import EducationView from "../Views/EducationView.vue";
import ExperienceView from "../Views/ExperienceView.vue";
import PresentationsView from "../Views/PresentationsView.vue";
import SeminarsView from "../Views/SeminarsView.vue";

const routes = [
    {path: "/", component: EducationView},
    {path: "/experience", component: ExperienceView},
    {path: "/presentations", component: PresentationsView},
    {path: "/seminars", component: SeminarsView}
]

const router = new createRouter({
    history: createMemoryHistory(),
    routes
})

export default router