![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=올해까치&fontSize=60&animation=fadeIn&fontAlignY=38&descAlignY=51&descAlign=50)

## **서비스 소개**

올해까치는 시즌 서비스로 **목표 작성 및 리마인드 서비스**입니다.
5가지의 복(福) 테마 중 하나를 선택할 수 있습니다.
선택한 복의 종류에 따라 다른 엽서에 목표를 적을 수 있으며,
작성한 내용은 **6개월 뒤에 메일**로 다시 받아 볼 수 있습니다.

<br>

## **프로젝트 개발 기간**

2022.12.09 ~ 12.29

<br>

## **배포 주소**

#### [🖥️ 올해까치 Demo](https://thisyearkkachi-demo.netlify.app/)

<br>

## **레파지토리 주소**

#### [📍 FRONTEND](https://github.com/hrimwk/until-this-year)<br>
#### [📍 BACKEND](https://github.com/JJieunn/until-this-year)

<br>

## **팀원 및 협업 방식**
<b>팀원</b>

[📕 이혜림 FE](https://github.com/hrimwk) <br>
[📙 봉원희 FE](https://github.com/2021bong) <br>
[📗 박지은 BE](https://github.com/JJieunn) <br>
[📘 유효진 Design](mailto:dbgywls11111@gmail.com)

<b>협업 방식</b>

[🗂️ 팀 노션](https://www.notion.so/308bcbf7e4c740c6ac224f99e6c81989)



<br />

## **Project Flow**

<img width="1144" alt="flow" src="https://user-images.githubusercontent.com/104122566/216870125-087598f0-eb7f-4840-bef5-fd84521d4710.png">

<br />

## **사용 기술 및 라이브러리**

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=Typescript&logoColor=white" /> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" /> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat&logo=styled-components&logoColor=white" /> <img src="https://img.shields.io/badge/recoil-2962ff?style=flat&&" /> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white" /><br/>
<img src="https://img.shields.io/badge/react_share-eeeeee?style=flat&" /> <img src="https://img.shields.io/badge/react_progressive_graceful_image-eeeeee?style=flat&" /> <img src="https://img.shields.io/badge/ html_to_image-eeeeee?style=flat&" /> <img src="https://img.shields.io/badge/swiper-eeeeee?style=flat&" />

<br />

## **설치 및 서버 실행 방법**

<div style="padding:5px;">
1. Node.JS를 다운받아 설치해주세요. vite를 사용하였기 때문에 최소 14.18 버전 이상이 요구됩니다. <br>
2. 리포지토리를 클론해주세요. <br>
3. dependencies를 설치해주세요. <br>
4. 새로운 터미널에서 프로젝트를 실행해주세요.
</div>

```
npm run dev
```

<br />

## **주요 기능 및 프로젝트 설명**

(Page 단위로 토글 버튼을 누르면 상세 사진 확인 가능합니다.)

<details style="margin-bottom:10px">
<summary style="border:1px solid #ddd;padding:10px;border-radius:5px;margin-bottom:10px;"> INTRO <br>
- 스플레시 화면을 보여줍니다. <br>
- 전체 서비스 설명과 주의사항을 안내합니다.
</summary>
<div style='display: flex'>
<img src='https://user-images.githubusercontent.com/49029756/216808406-00015598-0c14-483e-be4c-9d1da68d5c7f.png' alt='Splash' width='45%' style='margin-right:10px'/>
<img src='https://user-images.githubusercontent.com/49029756/216808369-f780ac21-aa9e-46af-a2fa-c3583f0e5271.png' alt='Intro' width='45%'/>
</div>
</details>

<details style="margin-bottom:10px">
<summary style="border:1px solid #ddd;padding:10px;border-radius:5px;margin-bottom:10px;">USER AUTH <br>
- 사용자 정보를 작성합니다.<br>
- 기존에 작성한 이력이 있는 사용자에게 모달 창으로 데이터 저장에 대해 안내합니다.
<details>
<summary>아래의 이메일을 입력하면 모달 확인 가능</summary>
test@email.com <br>
test2@email.com <br>
this.year.kkachi@email.com <br>
</details>
</summary>

<div style='display: flex'>
<img src='https://user-images.githubusercontent.com/49029756/216808372-18c5f333-8bcd-4569-917c-aca9380742a0.png' alt='UserAuth' width='45%' style='margin-right:10px'/>
<img src='https://user-images.githubusercontent.com/49029756/216808777-ab201424-76aa-4021-b217-8dade909c5c5.png' alt='UserModal' width='45%'/>
</div>
</details>

<details style="margin-bottom:10px">
<summary style="border:1px solid #ddd;padding:10px;border-radius:5px;margin-bottom:10px;">FORTUNE <br>
- 5복 중 원하는 복의 테마를 선택할 수 있습니다.<br>
- 각각의 복에 맞는 카드의 모달창이 뜹니다.
</summary>
<div style='display: flex'>
<img src='https://user-images.githubusercontent.com/49029756/216808373-1696da71-f8d0-49c1-b3c1-3f4314e53552.png' alt='FortuneList' width='45%' style='margin-right:10px'/>
<img src='https://user-images.githubusercontent.com/49029756/216808374-9666d05a-616f-49f3-927e-d187a3fa0867.png' alt='FortuneModal' width='45%'/>
</div>
</details>

<details style="margin-bottom:10px">
<summary style="border:1px solid #ddd;padding:10px;border-radius:5px;margin-bottom:10px;">WRITE <br>
- 전 단계에 선택한 복의 테마로 목표를 작성할 수 있습니다. <br>
- 최소 1개 이상 작성, 최대 5개까지 작성가능합니다.
</summary>
<div>
<img src='https://user-images.githubusercontent.com/49029756/216808375-bf8da33e-e640-40e6-a3af-d9cf38a93d3c.png' alt='Write' width='45%'/>
</div>
</details>

<details style="margin-bottom:10px">
<summary style="border:1px solid #ddd;padding:10px;border-radius:5px;margin-bottom:10px;">RESULT <br>
- 작성한 목표를 카드 형식으로 보여줍니다. <br>
- 보여지는 카드는 이미지로 저장이 가능합니다. <br>
- 링크 복사 및 카카오톡 공유 및 sns 공유 가능합니다.(카카오톡 공유는 demo버전에서 불가능)
</summary>
<div style='display: flex'>
<img src='https://user-images.githubusercontent.com/49029756/216808680-4a0bb547-a643-4165-8e33-1c00b51cbec8.png' alt='ResultFront' width='45%' style='margin-right:10px'/>
<img src='https://user-images.githubusercontent.com/49029756/216808377-bc438e06-1772-4f79-8dcd-4cf3b1366f5c.png' alt='ResultBack' width='45%'/>
</div>
</details>
