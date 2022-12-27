import { toPng } from 'html-to-image';

const htmlToPng = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current === null) return;
  toPng(ref.current, { cacheBust: true })
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = '2023MYGOALS_올해까치.png';
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => {
      console.log(err);
    });
};

export default htmlToPng;
