import ghLogo from './../../../assets/icons/gh-logo.png';
import rsLogo from './../../../assets/icons/rs-logo.png';

class Footer {
  public drawFooterImages(): void {
    const ghIlichLogoElement: HTMLImageElement = <HTMLImageElement>document.querySelectorAll('.social__gh-logo')[1];
    const ghAlexLogoElement: HTMLImageElement = <HTMLImageElement>document.querySelectorAll('.social__gh-logo')[0];
    const rsLogoElement: HTMLImageElement = <HTMLImageElement>document.querySelector('.social__rs-logo');
    ghIlichLogoElement.src = ghLogo;
    ghAlexLogoElement.src = ghLogo;
    rsLogoElement.src = rsLogo;
  }
}

export default Footer;
