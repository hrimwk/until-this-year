import styled from 'styled-components';
import love from '../../assets/images/fortune/love.jpeg';
import money from '../../assets/images/fortune/money.jpeg';
import relationship from '../../assets/images/fortune/relationship.jpeg';
import ego from '../../assets/images/fortune/ego.jpeg';
import health from '../../assets/images/fortune/health.jpeg';

type PropsType = {
  modalId: string | undefined;
};

function FortuneModal(props: PropsType) {
  const { modalId } = props;

  const MODAL_INNER = [
    { id: 'love', src: love, alt: 'love', title: '연애/결혼', info: '내 운명의 반쪽을 찾아서' },
    { id: 'money', src: money, alt: 'money', title: '재물/돈', info: '올해는 주머니 두둑한 부자' },
    {
      id: 'relationship',
      src: relationship,
      alt: 'relationship',
      title: '대인관계',
      info: '넓게 두텁게 다양하게 평화롭게',
    },
    { id: 'ego', src: ego, alt: 'ego', title: '자아실현', info: '보람차고 성장하는 한 해' },
    { id: 'health', src: health, alt: 'health', title: '건강 ', info: '건강한 몸 건강한 정신' },
  ];

  return (
    <>
      {MODAL_INNER.filter((data) => modalId === data.id).map((data) => {
        return (
          <FortuneModalContainer key={data.id}>
            <img src={data.src} alt={data.alt} />
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
