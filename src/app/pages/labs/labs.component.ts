import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  title = 'todoapp';
  welcome = 'todoapp';
  tasks = ['Task 1', 'Task 2', 'Task 3'];
  name = 'Goku';
  age = 30;
  //private age = 30;
  disabled = true;
  img = 'https://picsum.photos/200/300';

  person = {
    name: 'Angular',
    age: 10,
    img: 'https://picsum.photos/200/300',
  };

  clickHandler() {
    alert('You clicked the button!');
  }

  changeHandler(event: Event) {
    console.log('---->', event);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log('Input value:', input.value);
  }
}
