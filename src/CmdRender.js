import ReactReconciler from "react-reconciler";
import Command from "./Cmd";

const reconciler = new ReactReconciler({
    supportsMutation: true,
    createInstance(type, props, rootContainer, hostContext, internalInstanceHandle) {
        switch (type) {
            case "div": return  new Command("PANEL");
            case "p": return new Command("PARAGRAPH");
            case "img": return new Command(`IMAGE ${props.src}`);
            case "header": return new Command("HEADER");
            case "a": return new Command(`LINK ${props.href}`);
            case "code": return new Command("RICHTEXT");
        }
        return new Command('OTHER');
    },
    createTextInstance(text, rootContainerIntance, hostContext, internalInstanceHandle) {
        return new Command(`TEXT "${text}"`);
    },

    appendChildToContainer(container, child) {
        container.log(child);
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
        return payload;
    },
    commitUpdate(instance, payload, type, oldProps, newProps, internalInstanceHandle) {
        if (payload.newBgColor) {
           // instance.style.backgroundColor = payload.newBgColor;
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
