import { createNameSpace } from "asoul-ui/utils";
import "asoul-ui/Breadcrumb/breadcrumb.scss";
import { useProvider } from "@fect-ui/vue-hooks";
import { useRouter } from "vue-router";
import { BreadcrumbProvider, READONLY_BREADCRUMB_KEY } from './index'

const [createComponent] = createNameSpace("BreadcrumbItem");

export default createComponent({
    props: {
        to: {
            type: [String, Object],
            default: ""
        },
        href: {
            type: String,
            default: ""
        }
    },
    setup(props, { attrs, slots, emit }) {
        const router = useRouter();
        const { context } = useProvider<BreadcrumbProvider>(READONLY_BREADCRUMB_KEY)
        function open(url: string | undefined) {
            window.open(url);
        }
        function jump(url: any) {
            router.push(url);
        }
        function link(url: any) {
            if (props.to) {
                return jump(url)
            } else {
                return open(url)
            }
        }
        return () => (
            <div class={`asoul-breadcrumb-item`}>
                <span class={`asoul-breadcrumb-content`} onClick={() => link(props.to ? props.to : props.href)} >
                    {slots.default?.()}
                </span>
                <span class={`asoul-breadcrumb-separator`}>{"/"}</span>
            </div>
        );
    },
});
