import { toPng } from 'html-to-image';

export const htmlToPng = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current === null) return;
  toPng(ref.current, { cacheBust: true })
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = '올해까치_2023 MYGOALS.png';
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const saveKkachiImg = (url: string) => {
  if (!url) return;
  const link = document.createElement('a');
  link.download = '올해까치_kkachi of fortune.png';
  link.href = url;
  link.click();
};
