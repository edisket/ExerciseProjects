import { Injectable } from '@angular/core';
import { BranchReleaseRequest } from '../model/message/request/branch-release-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { BranchReleaseResponse } from '../model/message/response/branch-release-response';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  transactionUrl:string = ''

  constructor(private config: ConfigService, private httpClient:HttpClient) { 
    // this.transactionUrl = config.AppConfig.transactingBranch;
  }


  


  public ConstructBody(tranCode, requestBody):string{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    let req = {
      requestBody: requestBody,
      uUID:"9a59aaee-d6a9-14f2-70cc-7c36dbd085cf",
      businessDate: dateTime,
      requestMessage:{
        viewClass:"standalone",
        //tranUser must be valid
        tranUserName:"edison",
        organizationCode:"038",
        organizationId:1,
        userId:10,
        workstationId:'',
        submitTime: dateTime,
        serviceStartTime: dateTime,
        extRefnum: '003b9eb9-0c08-9185-c367-18900a1033d3',
        tranAmount:{
          currencyType:"PHP"
        },
        channelId:"5",
        tranCode:tranCode
      },
      status:1,

      
    }



    let requestPayload = {
      message: JSON.stringify(req)
    }

    return  JSON.stringify(requestPayload);
  }
  

  public RunTransaction<BranchReleaseMessage>(tranCode: string, request: any): Observable<BranchReleaseResponse>{

    let httpHeader: HttpHeaders = new HttpHeaders({
      'Content-Type':'application/json',
      'tranCode':tranCode
    })


    let requestPayload = this.ConstructBody(tranCode, request.RequestBody)

    let response:BranchReleaseMessage ;
    console.log("run transaction!");

     return this.httpClient.post<BranchReleaseMessage>("http://localhost:52159/"+"transaction/submit", requestPayload, {headers:httpHeader} )
  }




}
