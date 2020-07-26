import {CSMatFormGroup, CSLabelTextFC} from '@csnode/mat-forms'

export class BranchReleaseFG extends CSMatFormGroup{

    constructor(){
        super();

        this.addControl('recipientId',  new CSLabelTextFC('Recipient Id', {required:false}, ''));
        this.addControl('orNumber',  new CSLabelTextFC('OR Number', {required:false}, ''));
    }


    get RecipientFC():CSLabelTextFC{
        return this.controls['recipientId'] as CSLabelTextFC;
    }

    get ORFC():CSLabelTextFC{
        return this.controls['orNumber'] as CSLabelTextFC;
    }
}