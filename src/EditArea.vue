<<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Marked from "marked";
import Highlight from "highlight.js";
import "highlight.js/styles/default.css";

const renderer = new Marked.Renderer();
renderer.code = (code, language) => {
    return "<pre" + '><code class="hljs">' + Highlight.highlight(language, code).value + "</code></pre>";
};

Marked.setOptions({
    renderer,
});

@Component({
    template: `
        <div>
            <textarea v-model='text'></textarea>
            <span v-html='markdown_text'></span>
        </div>
    `,
    computed: {
        markdown_text: (data) => {
            return Marked(data.text);
        },
    },
})

export default class EditArea extends Vue{
    text: string = "hoge"
}
</script>