import { BranchReleaseRequest } from './request/branch-release-request';
import { BranchReleaseResponse } from './response/branch-release-response';


export interface BranchReleaseMessage{

    RequestBody?:BranchReleaseRequest;
    ResponseBody?:BranchReleaseResponse;

}