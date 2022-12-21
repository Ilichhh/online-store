import page404Logo from '../../../assets/icons/404.png';

const drawPage404Images = () => {
  const page404Element = <HTMLImageElement>document.querySelector('.img_404page');
  page404Element.src = page404Logo;
};

export default drawPage404Images;
