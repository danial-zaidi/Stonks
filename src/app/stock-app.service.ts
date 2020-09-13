import { Injectable } from '@angular/core';
import { HistoricalData } from './models';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  public historicalData: Subject<HistoricalData[]> = new Subject();
  constructor() { 
  }
  // return dummy data
  getStaticData() {
    return [{"name":"Ticker","series":[{"name":"2018-11-05","value":1.0},{"name":"2018-11-07","value":1.0784432590958841},{"name":"2018-11-09","value":1.051990418019701},{"name":"2018-11-13","value":1.0020702757700926},{"name":"2018-11-15","value":0.9948641677427545},{"name":"2018-11-19","value":0.9290391899969773},{"name":"2018-11-21","value":0.931766761483861},{"name":"2018-11-26","value":0.9714522105902702},{"name":"2018-11-28","value":1.0306855568843887},{"name":"2018-11-30","value":1.038315513651886},{"name":"2018-12-04","value":1.0249416229130486},{"name":"2018-12-07","value":1.0008170266371579},{"name":"2018-12-11","value":1.0094851582106077},{"name":"2018-12-13","value":1.0187860640616064},{"name":"2018-12-17","value":0.9343346776124837},{"name":"2018-12-19","value":0.9184665874156145},{"name":"2018-12-21","value":0.8462034092247408},{"name":"2018-12-26","value":0.9036122249189096},{"name":"2018-12-28","value":0.9079862240500522},{"name":"2019-01-02","value":0.9455276807157782},{"name":"2019-01-04","value":0.967803150004697},{"name":"2019-01-08","value":1.0176802470412016},{"name":"2019-01-10","value":1.017459098872407},{"name":"2019-01-14","value":0.9934942329025572},{"name":"2019-01-16","value":1.034389960876577},{"name":"2019-01-18","value":1.0420198426962943},{"name":"2019-01-23","value":1.0075070467085359},{"name":"2019-01-25","value":1.0262746625583865},{"name":"2019-01-29","value":0.9791620328179509},{"name":"2019-01-31","value":1.0558606267740689},{"name":"2019-02-04","value":1.0033849427657806},{"name":"2019-02-06","value":1.0076544788210655},{"name":"2019-02-08","value":0.9756849263984756},{"name":"2019-02-12","value":1.006272245173031},{"name":"2019-02-14","value":0.9968362054030139},{"name":"2019-02-19","value":0.9998647911332015},{"name":"2019-02-21","value":0.9948641677427545},{"name":"2019-02-25","value":1.003194465440147},{"name":"2019-02-27","value":1.008164342425327},{"name":"2019-03-01","value":1.0269873016817928},{"name":"2019-03-05","value":1.039703896703839},{"name":"2019-03-07","value":0.9988634365743284},{"name":"2019-03-11","value":1.0263054089636534},{"name":"2019-03-13","value":1.0387086915488843},{"name":"2019-03-15","value":1.0519473728065971},{"name":"2019-03-19","value":1.0823503642737635},{"name":"2019-03-21","value":1.1176188445980322},{"name":"2019-03-25","value":1.0899741716373423},{"name":"2019-03-27","value":1.0847155042689154},{"name":"2019-03-29","value":1.0939611416610788},{"name":"2019-04-02","value":1.1143751845408625},{"name":"2019-04-04","value":1.1173730988135633},{"name":"2019-04-08","value":1.1364172068531497},{"name":"2019-04-10","value":1.134862944091237},{"name":"2019-04-12","value":1.1322398350658853},{"name":"2019-04-16","value":1.1445140575739103},{"name":"2019-04-18","value":1.1436846571811352},{"name":"2019-04-23","value":1.1818220678773306},{"name":"2019-04-25","value":1.1686017586549415},{"name":"2019-04-29","value":1.1908281088889439},{"name":"2019-05-01","value":1.174296573571365},{"name":"2019-05-03","value":1.2055903071176282},{"name":"2019-05-07","value":1.1801203723885623},{"name":"2019-05-09","value":1.1671396595467236},{"name":"2019-05-13","value":1.1197198667733914},{"name":"2019-05-15","value":1.1494962327526013},{"name":"2019-05-17","value":1.1481754169673206},{"name":"2019-05-21","value":1.1411229660185371},{"name":"2019-05-23","value":1.1152966736395522},{"name":"2019-05-28","value":1.1281668501780466},{"name":"2019-05-30","value":1.1158126866477323},{"name":"2019-06-03","value":1.0398635520620998},{"name":"2019-06-05","value":1.06800586538132},{"name":"2019-06-07","value":1.1082626702881984},{"name":"2019-06-11","value":1.14491945871664},{"name":"2019-06-13","value":1.1489740709548288},{"name":"2019-06-17","value":1.1586374076832333},{"name":"2019-06-19","value":1.1726194750839452},{"name":"2019-06-21","value":1.1741614396523463},{"name":"2019-06-25","value":1.1538702318837442},{"name":"2019-06-27","value":1.1698488583839575},{"name":"2019-07-01","value":1.1808513841616184},{"name":"2019-07-03","value":1.1911782415728382},{"name":"2019-07-08","value":1.199361031595595},{"name":"2019-07-10","value":1.2393475692787623},{"name":"2019-07-12","value":1.2354097183099422},{"name":"2019-07-16","value":1.2347339743813952},{"name":"2019-07-18","value":1.2150755402760158},{"name":"2019-07-22","value":1.2198242690924013},{"name":"2019-07-24","value":1.2291497719447482},{"name":"2019-07-26","value":1.1936662922412775},{"name":"2019-07-30","value":1.1663164835056472},{"name":"2019-08-01","value":1.1397714032136634},{"name":"2019-08-05","value":1.0843653715850208},{"name":"2019-08-07","value":1.101732381137187},{"name":"2019-08-09","value":1.1104434829759608},{"name":"2019-08-13","value":1.1207395939819143},{"name":"2019-08-15","value":1.0911168089048264},{"name":"2019-08-19","value":1.1156898515365508},{"name":"2019-08-21","value":1.1202481779750826},{"name":"2019-08-23","value":1.074837168161309},{"name":"2019-08-27","value":1.0823380654659263},{"name":"2019-08-29","value":1.0974320986766353},{"name":"2019-09-03","value":1.099545344712052},{"name":"2019-09-05","value":1.1308022580112356},{"name":"2019-09-09","value":1.1250460258463846},{"name":"2019-09-11","value":1.1199102685369189},{"name":"2019-09-13","value":1.1299544849688108},{"name":"2019-09-17","value":1.119640001313208},{"name":"2019-09-19","value":1.1189949288421481},{"name":"2019-09-23","value":1.0967563553624147},{"name":"2019-09-25","value":1.0863311848935815},{"name":"2019-09-27","value":1.0599888801207427},{"name":"2019-10-01","value":1.0662550508376352},{"name":"2019-10-03","value":1.0593561814053},{"name":"2019-10-07","value":1.0644182220441745},{"name":"2019-10-09","value":1.057863335891815},{"name":"2019-10-11","value":1.0639636268987482},{"name":"2019-10-15","value":1.0857476052330552},{"name":"2019-10-17","value":1.0980955437973452}]}];
  }
}
