import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div class="loader"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
  `,
  styles: `
    .loader {
      display: grid;
      place-content: center;
      height: 100%
    }

    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px
    }

    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid theme('colors.primary');
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;
      border-color: theme('colors.primary') transparent transparent transparent
    }

    .lds-ring div:nth-child(1) {
      animation-delay: -.45s
    }

    .lds-ring div:nth-child(2) {
      animation-delay: -.3s
    }

    .lds-ring div:nth-child(3) {
      animation-delay: -.15s
    }

    @keyframes lds-ring {
      0% {
          transform: rotate(0)
      }

      to {
          transform: rotate(360deg)
      }
    }
  `,
})
export class LoaderComponent {}
