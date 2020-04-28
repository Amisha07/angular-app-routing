import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div class="container" style="padding:20px">
              <div class="card">
                 <h3 class="card-header">Hello from {{name}}!</h3>
              </div>
            </div>`,
})
export class HelloComponent  {
  name = 'Amisha';
}
