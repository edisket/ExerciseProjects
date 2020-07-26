
export class TellerRouteHolder {

    constructor() { }

    public routes: TellerRoute[] = [
        { title: 'Home', path: '' }

//START REPLACING
, { title: 'Branch Release', path: '/branch-release' }
// , { title: 'TranadtBndr', path: '/tranadt-bndr' }
// , { title: 'Tranbalance', path: '/tranbalance' }
// , { title: 'TrancashCheck', path: '/trancash-check' }
// , { title: 'Trancashier', path: '/trancashier' }
// , { title: 'TrancloseDay', path: '/tranclose-day' }
// , { title: 'TranfcxBuy', path: '/tranfcx-buy' }
// , { title: 'TranfdcpRed', path: '/tranfdcp-red' }
// , { title: 'Tranmulti', path: '/tranmulti' }
// , { title: 'TrannewCertDp', path: '/trannew-cert-dp' }
// , { title: 'TrannewSavDp', path: '/trannew-sav-dp' }
// , { title: 'TranopenDay', path: '/tranopen-day' }
// , { title: 'TranstmtDp', path: '/transtmt-dp' }
// , { title: 'TrantlrRpt', path: '/trantlr-rpt' }
//REPLACE_TELLER_ROUTE
//END REPLACING
    ];

}

export class TellerRoute {
    title: string;
    path: string;
}