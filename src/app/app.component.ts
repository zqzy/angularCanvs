import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  sign: any
  ctx: any
  ngAfterViewInit() {
    this.sign = document.getElementById('sign');
    // console.log(sign)
    // if(sign.getContext){
  }
  savaImg(){
    console.log(this.sign.toDataURL("image/png"))
    console.log(this.sign.toBlob((blob)=>{
      console.log(blob)
    }))
  }
  isdown = false
  @HostListener('document:mousedown', ['$event'])
  onMousedown(e) {
    this.isdown = true;
    this.ctx = this.sign['getContext']('2d')
    // this.ctx.fillStyle = "rgb(200,0,0)";
    this.ctx.strokeStyle="#000"
    this.ctx.beginPath();
    this.ctx.moveTo(e.layerX, e.layerY)

    console.log(e)
  }
  @HostListener('document:mousemove', ["$event"])
  onMousemove(e) {
    if (this.isdown == true) {
      console.log(e)
      // this.isdown
      this.ctx.lineTo(e.layerX,e.layerY);
          this.ctx.stroke()


    }
  }
  @HostListener('document:mouseup', ["$event"])
  onMouseup(e) {
    this.isdown = false
  }

}
