import { Injectable } from '@angular/core';
import { BranchReleaseRequest } from '../model/message/request/branch-release-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

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
      requestMessage:{
        viewClass:"standalone",
        tranUserName:"operator",
        organizationCode:"038",
        organizationId:1,
        userId:10,
        workstationId:'',
        submitTime: dateTime,
        serviceStartTime: dateTime,
        extRefnum: '3aa5da94-2744-448f-938f-5486a1a15ade',
        tranAmount:{
          currencyType:"PHP"
        },
        channelId:"5",
        tranCode:tranCode
      },

      requestBody: requestBody
    }



    let requestPayload = {
      message: JSON.stringify(req)
    }

    return  JSON.stringify(requestPayload);
  }
  

  public RunTransaction<BranchReleaseMessage>(tranCode: string, request: any){

    let httpHeader: HttpHeaders = new HttpHeaders({
      'Content-Type':'application/json',
      'tranCode':tranCode
    })


    let requestPayload = this.ConstructBody(tranCode, request.RequestBody)

    let response:BranchReleaseMessage ;
    console.log("run transaction!");

     this.httpClient.post<BranchReleaseMessage>("http://192.168.1.17/Consolsys.Shell.API/"+"transaction/submit", requestPayload, {headers:httpHeader} ).subscribe(res=>{

     console.log(res);

     response =  res;
     })

     return response;
    
  }




}
