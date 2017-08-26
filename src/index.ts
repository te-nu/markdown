"use strict";

import Vue from "vue";
import EditArea from "./EditArea.vue";

window.onload = (e) => {
    const inputArea = new Vue({
        el: "#input_area",
        components: { EditArea },
        template: `
          <edit-area></edit-area>
        `,
    });
};
