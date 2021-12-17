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

type VirtualDimmerNode = NodeDef & IVirtualDimmerConfig;

const nodeInit: NodeInitializer = (RED): void => {
    function VirtualDimmerConstructor(this: Node, config: NodeDef & IVirtualDimmerConfig): void {
        config.longPressDelay = config.longPressDelay ?? 80;
        config.updateInterval = config.updateInterval ?? 100;
        config.maxBrightness = config.maxBrightness ?? 100;
        config.minBrightness = config.minBrightness ?? 0;

        RED.nodes.createNode(this, config);

        this.on('input', (msg, send, done) => {
            send({ payload: 'hi' });

            if (done) {
                done();
            }
        });
    }

    RED.nodes.registerType('virtual-dimmer', VirtualDimmerConstructor);
};

function applyConfigDefaults(): VirtualDimmerNode{

}

module.exports = nodeInit;
