import { DirectiveBinding, ObjectDirective, VNode } from "vue";
import ClipboardJS from 'clipboard';

const action = ['cut', 'copy', 'text', 'target'];
const functionList = ['success', 'error'];

function toFirstUpper(value: string) {
    if (value == undefined || value.length == 0) return value;
    let first = value[0].toLocaleUpperCase();
    if (value.length == 1) {
        return first;
    }
    return first + value.substring(1);
}

const clipBoardDirective: ObjectDirective = {
    // 在绑定元素的 attribute 前调用
    // 或事件监听器应用前调用
    created(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, prevVnode: any) {
        // 下面会介绍各个参数的细节
        const clipboard = new ClipboardJS(el);
        if (binding.arg) {
            if (action.includes(binding.arg)) {
                el.dataset['clipboard' + toFirstUpper(binding.arg)] = binding.value;
            } else if (functionList.includes(binding.arg)) {
                clipboard.on(binding.arg, binding.value);
            }
        }
    },
    // 在元素被插入到 DOM 前调用
    beforeMount() { },
    // 在绑定元素的父组件
    // 及他自己的所有子节点都 挂载 完成后调用
    mounted() { },
    // 绑定元素的父组件更新前调用
    beforeUpdate() { },
    // 在绑定元素的父组件
    // 及他自己的所有子节点都 更新 完成后调用
    updated() { },
    // 绑定元素的父组件卸载之前调用
    beforeUnmount() { },
    // 绑定元素的父组件卸载之后调用
    unmounted() { }
}

export default {
    name: 'clipboard',
    directive: clipBoardDirective
}