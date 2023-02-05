import ProgressiveImage from 'react-progressive-graceful-image';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { fortuneModalIdState } from '../../../atom';

function FortuneModal() {
  const modalId = useRecoilValue(fortuneModalIdState);

  const MODAL_INNER = [
    {
      id: 'love',
      low: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612157/kkachi-admin/bmzoijfe9v5th60yoyq3.jpg',
      src: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675434622/kkachi-admin/qtoqobcyfvdwhbawu35e.jpg',
      alt: 'love',
      title: '연애/결혼',
      info: '내 운명의 반쪽을 찾아서',
    },
    {
      id: 'money',
      low: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612157/kkachi-admin/qddprp99xezpjzxydlbg.jpg',
      src: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675434622/kkachi-admin/wmhigwei1lgzrhtes5fj.jpg',
      alt: 'money',
      title: '재물/돈',
      info: '올해는 주머니 두둑한 부자',
    },
    {
      id: 'relationship',
      low: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612156/kkachi-admin/buqmb1pfddnpnve4zn6d.jpg',
      src: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675434622/kkachi-admin/qeu5zrkyapfgcbucjcsw.jpg',
      alt: 'relationship',
      title: '대인관계',
      info: '넓게 두텁게 다양하게 평화롭게',
    },
    {
      id: 'ego',
      low: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612156/kkachi-admin/jkb4dkswwcpcndk9ykoz.jpg',
      src: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675434622/kkachi-admin/ff7erbzpwxe95tlzkz8s.jpg',
      alt: 'ego',
      title: '자아실현',
      info: '보람차고 성장하는 한 해',
    },
    {
      id: 'health',
      low: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612156/kkachi-admin/niatbdudablxxy1rgg3n.jpg',
      src: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675434622/kkachi-admin/wavdta8peo6ghfoywomo.jpg',
      alt: 'health',
      title: '건강 ',
      info: '건강한 몸 건강한 정신',
    },
  ];

  return (
    <>
      {MODAL_INNER.filter((data) => modalId === data.id).map((data) => {
        return (
          <FortuneModalContainer key={data.id}>
            <ProgressiveImage src={data.src} placeholder={data.low}>
              {(src) => <img src={src} alt={data.alt} />}
            </ProgressiveImage>
            <p className='title-3'>{data.title}</p>
            <span className='body-txt-1'>{data.info}</span>
          </FortuneModalContainer>
        );
      })}
    </>
  );
}

const FortuneModalContainer = styled.div`
  text-align: center;
  .title-3 {
    margin: 16px 0 10px 0;
  }
`;
export default FortuneModal;
