import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent {

  @Input() user : any | undefined
  @Input() userImage : string | undefined
}
