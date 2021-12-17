import { NodeDef, NodeInitializer, Node } from 'node-red';

export type IVirtualDimmerConfig = {
    longPressDelay: number;
    updateInterval: number;
    maxBrightness: number;
    minBrightness: number;
};

const defaultConfig: IVirtualDimmerConfig = {
    longPressDelay: 80,
    updateInterval: 100,
    maxBrightness: 100,
    minBrightness: 0,
};

const nodeInit: NodeInitializer = (RED): void => {
    function VirtualDimmerConstructor(this: Node, partialConfig: NodeDef & Partial<IVirtualDimmerConfig>): void {
        const config = { ...defaultConfig, ...partialConfig };
        RED.nodes.createNode(this, config);

        this.on('input', (msg, send, done) => {
            console.log(`INPUT`, { msg, send, done });
        });
    }

    RED.nodes.registerType('virtual-dimmer', VirtualDimmerConstructor);
};

module.exports = nodeInit;
