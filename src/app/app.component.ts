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
    // this.jsonObject = null;
    // this.jsonObject = {
    //   triangle: { point: { x: 1, y: 1 } },
    //   name: 'trio'
    // };
  }

  private setJson(): any {
    this.jsonObject = {
      '2018-12-11T11:01:11.138Z': {
        'type': 'newtype',
        'description': 'This is a special type',
        'name': 'hello_',
        'state': 'DONE',
        'start_tstamp': '2018-12-11T11:01:11.138Z',
        'finish_tstamp': '2018-12-11T11:01:11.138Z',
        'body': {
          'user': 'jigsaw',
          'profile': 'hvr_demo43',
          'account': 'src',
          'targets': [
            '2311aa',
            '2311aa1',
            '2311aa2',
            '2311aa3',
            '2311aa4',
            'custom'
          ],
          'views': [
            'lord11',
            'lord12',
            'lord13',
            'lord14',
            'lord15',
            'lord16',
            'lord17',
            'lord18',
            'lord19',
            'lord11',
            'lord11',
            'lord12',
            'lord13',
            'lord14',
            'lord15',
            'lord11',
            'lord16',
            'lord17',
            'huba bubba'
          ],
          'options': [
            '-c bkr',
            '-g b',
            '-r src'
          ]
        }
      },
      '2018-12-11T11:01:11.448Z': {
        'type': 'newtype',
        'description': 'This is a special type',
        'name': 'hello_',
        'state': 'DONE',
        'start_tstamp': '2018-12-11T11:01:11.138Z',
        'finish_tstamp': '2018-12-11T11:01:11.138Z',
        'body': {
          'user': 'jigsaw',
          'profile': 'hvr_demo43',
          'account': 'src',
          'targets': [
            '2311aa',
            '2311aa1',
            '2311aa2',
            '2311aa3',
            '2311aa4',
            'custom'
          ],
          'views': [
            'lord11',
            'lord12',
            'lord13',
            'lord14',
            'lord15',
            'lord16',
            'lord17',
            'lord18',
            'lord19',
            'lord11',
            'lord11',
            'lord12',
            'lord13',
            'lord14',
            'lord15',
            'lord11',
            'lord16',
            'lord17',
            'huba bubba'
          ],
          'options': [
            '-c bkr',
            '-g b',
            '-r src'
          ]
        }
      }
    };
  }
}
