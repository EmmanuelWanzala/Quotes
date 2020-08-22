export class Quote {

    showDescription:boolean;

    constructor(public name:string,public author:string,public quotation:string,public submitter:string, public completeDate:Date){
   this.showDescription=false;
}
}