import ReactReconciler from "react-reconciler";

const reconciler = new ReactReconciler({
    supportsMutation: true,
    createInstance(type, props, rootContainer, hostContext, internalInstanceHandle) {
        console.log(type, props);
        const el = document.createElement(type);
        [
            ["className", "className"],
            ["src", "src"],
            ["href", "href"],
            ["alt", "alt"],
            ["title", "title"]
        ].forEach(attr => {
            if (props[attr[0]]) el[attr[1]] = props[attr[0]];
        });
        if (props.onClick) {
            el.addEventListener('click', props.onClick);
        }
        if (props.bgColor) {
            el.style.backgroundColor = props.bgColor;
        }
        return el;
    },
    createTextInstance(text, rootContainerIntance, hostContext, internalInstanceHandle) {
        return document.createTextNode(text);
    },

    appendChildToContainer(container, child) {
        container.appendChild(child);
    },
    appendChild(parent, child) {
        parent.appendChild(child);
    },
    appendInitialChild(parent, child) {
        parent.appendChild(child);
    },
    removeChildFromContainer(container, child) {
        container.removeChild(child);
    },
    removeChild(parent, child) {
        parent.removeChild(child);
    },
    insertInContainerBefore(container, child, before) {

        container.insertBefore(child, before);
    },
    insertBefore(parent, child, before) {
        parent.insertBefore(child, before);
    },
    prepareUpdate(instance, oldProps, newProps, rootContainer, hostContext) {
        const payload = {};
        if (oldProps.bgColor !== newProps.bgColor) {
            payload["newBgColor"] = newProps.bgColor;
        }
        return payload;
    },
    commitUpdate(instance, payload, type, oldProps, newProps, internalInstanceHandle) {
        console.log(payload)
        if (payload.newBgColor) {
            instance.style.backgroundColor = payload.newBgColor;
        }
    },
    finalizeInitialChildren() {},
    finalizeContainerChildren() {},
    getChildHostContext() {},
    getPublicInstance() {},
    getRootHostContext() {},
    prepareForCommit() {},
    resetAfterCommit() {},
    resetTextContent() {},
    shouldDeprioritizeSubtree() {},
    shouldSetTextContent() {
         return false;
    }
});

let MyRender = {
    render(whatToRender, whereToRender) {
        const container = reconciler.createContainer(whereToRender, false, false);
        reconciler.updateContainer(whatToRender, container, null, () => {})
    }
}

export default MyRender;

