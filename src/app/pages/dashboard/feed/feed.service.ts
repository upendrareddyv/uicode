import {Injectable} from '@angular/core';

@Injectable()
export class FeedService {

  private _data = [
    {
      type: 'text-message',
      author: 'Seth',
      surname: 'Nazarro',
      header: 'Posted new message',
      text: 'Guys, check this out: \n I am not able to find any bug in this app',
      time: 'Today 11:55 pm',
      ago: '25 minutes ago',
      expanded: false,
    }, {
      type: 'video-message',
      author: 'Erin',
      surname: 'Hawkinson',
      header: 'Lateral Movement Caught',
      text: '"Investigating"',
      preview: 'app/feed/Capture_graph.PNG',
      link: '',
      time: 'Today 9:30 pm',
      ago: '3 hrs ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'John',
      surname: 'Camacho',
      header: 'Added new image',
      text: '"Interesting Find"',
      preview: '',
      link: 'g',
      time: 'Today 2:20 pm',
      ago: '10 hrs ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Chris',
      surname: 'Harrison',
      header: 'Posted new message',
      text: 'the Bit9 alert is a valid attack',
      time: '11.11.2015',
      ago: '2 days ago',
      expanded: false,
    }
  ];

  getData() {
    return this._data;
  }
}
