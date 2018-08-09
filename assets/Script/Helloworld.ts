const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property([cc.Node])
    cocoNode: cc.Node[]=[];

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;

        for (let index = 0; index < this.cocoNode.length; index++) {
            const element = this.cocoNode[index];
            element.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5,cc.v2(50,50)),cc.moveBy(0.5,cc.v2(-50,-50)))));
            if (jsb.jsbTest) {
                
                jsb.jsbTest.testlog()
            }
        }
    
        
    }
}
