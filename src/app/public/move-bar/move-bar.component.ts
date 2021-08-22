import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-bar',
  templateUrl: './move-bar.component.html',
  styleUrls: ['./move-bar.component.css']
})
export class MoveBarComponent implements OnInit {
    public colours: Array<string> = ['is-primary', 'is-link', 'is-info', 'is-success', 'is-warning' , 'is-danger', 'is-light', 'is-dark'];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
      const _this: this = this;
      setInterval(function (){
          const date = new Date();
          _this.drawBar(date.getSeconds());
      }, 1000);
      setInterval(function () {
          _this.colouringBar();
      }, 100)
  }

  private drawBar(t: number){
      document.querySelector('progress.progress')!.setAttribute('value', t.toString());
  }

  private colouringBar() {
      const progress = document.querySelector('progress.progress');
      progress!.classList.forEach((_class: string) => {
          this.colours.find((color: string, index: number, colours: Array<string>) => {
              if (color === _class){
                  let nextColor = colours.indexOf(_class) + 1
                  if(nextColor >= colours.length) {
                      nextColor = 0;
                  }
                  progress!.classList.replace(_class, colours[nextColor])
              }
          });
      });
  }

}
