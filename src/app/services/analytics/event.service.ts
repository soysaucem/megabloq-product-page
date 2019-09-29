import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventService {

  private api = 'https://api.clicky.com/api/stats/4/?';
  private siteId = 'site_id=101211849';
  private sitekey = '&sitekey=8d88395fedaf37bb';
  private actionListType = '&type=actions-list';
  private visitorType = '&type=visitors';
  private eventAction = '&action_type=event';
  private pageViewAction = '&action_type=pageview';
  private period = '&date=last-7-days';
  private limit = '&limit=all';

  private queryPurchaseLinkEvents = this.api + this.siteId + this.sitekey
    + this.actionListType + this.eventAction + this.limit + this.period;

  private queryTotalEvents = this.api + this.siteId + this.sitekey
    + this.actionListType + this.pageViewAction + this.limit + this.period;

  private totalVisitorsQuery = this.api + this.siteId + this.sitekey
    + this.visitorType + this.limit + this.period;

  constructor(private http: HttpClient) { }


  getPurchaseLinkEvents(): Observable<any> {
    return this.http.get<any>(`${this.queryPurchaseLinkEvents}&output=json`);
  }

  getTotalEvents(): Observable<any> {
    return this.http.get<any>(`${this.queryTotalEvents}&output=json`);
  }

  getTotalVisitors(): Observable<any> {
    return this.http.get<any>(`${this.totalVisitorsQuery}&daily=1&output=json`);
  }
}
