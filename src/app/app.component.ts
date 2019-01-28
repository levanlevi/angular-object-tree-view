import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  jsonObject: any;

  ngOnInit() {
    this.setJson();
  }

  private setJson(): any {
    this.jsonObject = {
      '2018-12-11T11:01:11.138Z': {
        'type': 'Refresh_Command',
        'description': 'HVR Refresh',
        'channel': 'hvr_demo43',
        'state': 'DONE',
        'start_tstamp': '2018-12-11T11:01:11.138Z',
        'finish_tstamp': '2018-12-11T11:01:11.138Z',
        'body': {
          'os_user': 'jigsaw',
          'channel': 'hvr_demo43',
          'source_loc': 'src',
          'target_locs': [
            'avr16',
            'avr17',
            'avr18',
            'avrd6',
            'avrd7',
            'avrd8'
          ],
          'tables': [
            'dm43_baseline',
            'dm43_blob',
            'dm43_boolean',
            'dm43_char',
            'dm43_clob',
            'dm43_decimal',
            'dm43_dupl',
            'dm43_float',
            'dm43_integer',
            'dm43_lob',
            'dm43_number',
            'dm43_pq_date',
            'dm43_pq_timestamp',
            'dm43_pq_timestamp_tz',
            'dm43_time_ntz',
            'dm43_time_ntz_ice',
            'dm43_time_tz',
            'dm43_time_tz_ice',
            'dm43_varchar'
          ],
          'options': [
            '-c bkr',
            '-g b',
            '-r src'
          ]
        }
      },
      '2018-12-11T11:01:11.448Z': {
        'type': 'Refresh_Start',
        'description': 'HVR Refresh',
        'channel': 'hvr_demo43',
        'state': 'DONE',
        'start_tstamp': '2018-12-11T11:01:11.448Z',
        'finish_tstamp': '2018-12-11T11:01:11.448Z',
        'body': {
          'channel': 'hvr_demo43',
          'source_loc': 'src',
          'target_loc': 'avr16',
          'job': 'hvr_demo43-refr-src-avr16'
        }
      },
      '2018-12-11T11:01:12.692Z': {
        'type': 'Refresh_Start',
        'description': 'HVR Refresh',
        'channel': 'hvr_demo43',
        'state': 'DONE',
        'start_tstamp': '2018-12-11T11:01:12.692Z',
        'finish_tstamp': '2018-12-11T11:01:12.692Z',
        'body': {
          'channel': 'hvr_demo43',
          'source_loc': 'src',
          'target_loc': 'avr17',
          'job': 'hvr_demo43-refr-src-avr17'
        }
      },
      '2018-12-11T11:01:13.874Z': {
        'type': 'Refresh_Start',
        'description': 'HVR Refresh',
        'channel': 'hvr_demo43',
        'state': 'DONE',
        'start_tstamp': '2018-12-11T11:01:13.874Z',
        'finish_tstamp': '2018-12-11T11:01:13.874Z',
        'body': {
          'channel': 'hvr_demo43',
          'source_loc': 'src',
          'target_loc': 'avr18',
          'job': 'hvr_demo43-refr-src-avr18'
        }
      }
    };
  }
}
