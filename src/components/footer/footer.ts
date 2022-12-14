import ghLogo from './../../assets/icons/gh-logo.png';
import rsLogo from './../../assets/icons/rs-logo.png';

export default function drawFooterImages() {
  const ghIlichLogoElement = <HTMLImageElement>document.querySelectorAll('.social__gh-logo')[1];
  const ghAlexLogoElement = <HTMLImageElement>document.querySelectorAll('.social__gh-logo')[0];
  const rsLogoElement = <HTMLImageElement>document.querySelector('.social__rs-logo');
  ghIlichLogoElement.src = ghLogo;
  ghAlexLogoElement.src = ghLogo;
  rsLogoElement.src = rsLogo;
}
