import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const WriteSwiper = () => {
  const fortune = sessionStorage.getItem('fortune-type');
  const sentencesOfKkachi = [
    ['올해는 자신감 넘치는 태도 가지기 어때?', '다른 사람의 매력 포인트 찾아보기 어때?', '주변을 둘러보기 어때?'],
    [
      '올해는 매달 5만원씩 저축하기 어때?',
      '적금 1개 가입하기 어때?',
      '미뤄뒀던 재테크 시작하기 어때?',
      '올해는 3번 고민하고 소비하기 어때?',
    ],
    [
      '기분이 태도가 되지 않기 어때?',
      '새로운 동호회 가입하기 어때?',
      '오랜만에 지인에게 연락하기 어때?',
      '사람들과 관심사를 공유해보는 건 어때?',
      '생일인 친구에게 문자 하나 보내보기 어때?',
    ],
    [
      '매일 영어 단어 5개씩 외우기 어때?',
      '한 달에 한 권씩 책 읽기 어때?',
      '새로운 취미를 찾아보는 건 어때?',
      '대외활동에 신청해보는 건 어때?',
      '자격증에 도전해보는 건 어때? ',
    ],
    [
      '매일 아침 10분씩 스트레칭 어때?',
      '헬스나 필라테스를 등록해보는 건 어때?',
      '운동 모임을 가입해보는 건 어때?',
      '주에 3번 홈트 영상 따라하기 어때?',
      '건강한 식습관 가지기 어때?',
    ],
  ];

  const getStrings = (fortune: string | null) => {
    switch (fortune) {
      case 'love':
        return 0;
      case 'money':
        return 1;
      case 'relationship':
        return 2;
      case 'ego':
        return 3;
      case 'health':
        return 4;
      default:
        return 0;
    }
  };
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}>
      {sentencesOfKkachi[getStrings(fortune)].map((strings) => (
        <SwiperSlide key={strings}>
          <p className='body-txt-1'>{strings}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WriteSwiper;
