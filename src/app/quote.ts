export class Quote {

    showDescription:boolean;

    constructor(public who:string,public author:string,public name:string,public submitter:string, public completeDate:Date){
   this.showDescription=false;
}
}