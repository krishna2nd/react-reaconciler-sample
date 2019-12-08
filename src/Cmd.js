
let eleIndex = 0;

class Command {
    cmd = "";
    children = [];
    parent;
    constructor(cmdString) {
        this.cmd = cmdString;
        this.id = eleIndex++;
    }
    log(child) {
        console.log(child.toString());
    }
    appendChild(child) {
        child.parent = this;
        this.children.push(child)
    }
    removeChild(child) {
       const index = this.children.findIndex(chld => chld.id === child.id)
       (index > -1) && this.children.splice(index, 1);
    }
    insertBefore(child, before) {
        const index = this.children.findIndex(chld => chld.id === before.id);
       if (index > -1) {
        this.children = [
            ...this.children.splice(0, index-1),
            child,
            ...this.children.splice(index)
        ]
       }
    }
    toString() {
        let cmd = `${this.cmd}\n`;
        this.children.forEach(child => cmd += child.toString())
        return cmd;
    }
}

export default Command;
