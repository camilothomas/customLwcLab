import {LightningElement, api} from 'lwc';

export default class WorkspaceDomination extends LightningElement {
    x = new Set();
    a() {
        this.x.add('hi');
        this.x.add('hello');
    }    
    b = 3;
    d = new Map();
    z() {
        this.d.set('a','a','a');
    }
}
