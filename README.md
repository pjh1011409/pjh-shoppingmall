## 🍏 Fresh Life 🍀

<strong>상쾌하고 은은하게...</strong>
<br>
<strong>유기농 음료와 수제 캔들을 선물하는 쇼핑몰 사이트입니다.</strong>

<br>

## 🗓 프로젝트 기간

2022.12.19 ~ 2023.01.08
<br>

## 📎 Link

👉 https://pjh-shoppingmall.vercel.app/

<br>

## 🍀 나의 개발일지

<details>
<summary>✏️ 프로젝트를 개발하며 작성한 개발블로그입니다.</summary>

- [Start & Setting](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-Start-Setting)
- [상품 리스트, 상세페이지](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-Start-Setting-z2rep4a2)
- [백앤드 API 모킹하기](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-%EC%84%9C%EB%B2%84-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
- [장바구니](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-)
- [결제](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-%EA%B2%B0%EC%A0%9C)
- [Apollo](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-Server)
- [DataBase](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-DataBase)
- [무한스크롤](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4)
- [Admin](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-Admin)
- [Firebase](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-Firebase)
- [배포](https://velog.io/@pjh1011409/PJHs-Shopping-Mall-%EB%B0%B0%ED%8F%AC)

</details>
 
  
<br>

## ⚙️ 주요 기능

- ##### 상품리스트 🧃🕯
  - 무한스크롤 상품 출력
  - 상품 상세페이지
- ##### 장바구니 🛒

  - 상품 추가
  - 수량 업데이트
  - 전체선택, 개별선택
  - 장바구니 상품 삭제
  - 장바구니 상품 결제

- ##### 관리자 👤

  - 상품 추가
  - 상품 삭제

- ##### 결제 💲

  - 결제시 해당 상품 장바구니에서 삭제

  <br>

<br>

## 💻 Service Architecture

<img width="800" alt="스크린샷 2023-01-03 오후 7 56 16" src="https://user-images.githubusercontent.com/81337674/210350458-a8aa56c1-09ef-469f-8840-78324c348273.png">

<br>

## 📄 Project Architecture

#### Client

```
⭐️ src
|
├── 🗂 pages
│    │
│    ├── 📄 routers.tsx
│    ├── 📄 queryClient.ts
│    ├── 📄 _layout.tsx
│    ├── 📄 index.tsx
│    │
│    ├── 🗂 admin ─ 📄 index.tsx
│    │
│    ├── 🗂 cart ─ 📄 index.tsx
│    │
│    ├── 🗂 payment ─ 📄 index.tsx
│    │
│    └── 🗂 products
│           ├── 📄 [id].tsx
│           └── 📄 indext.tsx
│
├── 🗂 components
│   │
│   ├── 🗂 admin
│   │     ├── 📄 addForm.tsx
│   │     ├── 📄 item.tsx
│   │     └── 📄 list.tsx
│   ├── 🗂 cart
│   │     ├── 📄 item.tsx
│   │     ├── 📄 itemData.tsx
│   │     └── 📄 list.tsx
│   ├── 🗂 navigation
│   │     ├── 📄 bottomBar.tsx
│   │     ├── 📄 cartIcon.tsx
│   │     ├── 📄 darkOnOff.tsx
│   │     └── 📄 navBar.tsx
│   ├── 🗂 payment
│   │     ├── 📄 payment.tsx
│   │     └── 📄 paymentModal.tsx
│   ├── 🗂 product
│   │     ├── 📄 detail.tsx
│   │     ├── 📄 item.tsx
│   │     └── 📄 list.tsx
│   └── 🗂 willPay - 📄 index.tsx
│
├── 🗂 graphql
│     ├── 📄 cart.ts
│     ├── 📄 payment.ts
│     └──  📄 products.ts
├── 🗂 mocks
│     ├── 📄 browser.ts
│     └── 📄 handler.ts
│
├── 🗂 recoils - 📄 cart.ts
├── 🗂 util - 📄 arrToObj.ts
└── 🗂 scss
```

#### Server

```
⭐️ src
|
├── 📄 index.ts
├── 📄 firebase.js
|
├── 🗂 resolvers
│    ├── 📄 cart.ts
│    ├── 📄 index.ts
│    ├── 📄 products.ts
│    └── 📄 types.ts
│
└── 🗂 schema
     ├── 📄 cart.ts
     ├── 📄 index.ts
     ├── 📄 products.ts
     ├── 📄 users.ts
     └── 📄 votes.ts

```

<br>

## Query & Mutation

<img width="793" alt="스크린샷 2023-01-03 오후 9 29 14" src="https://user-images.githubusercontent.com/81337674/210358754-f87b7004-9a6f-43db-8ce7-0239143e5c52.png">
<img width="786" alt="스크린샷 2023-01-03 오후 9 37 37" src="https://user-images.githubusercontent.com/81337674/210358757-eb20abda-5945-4fe4-ab90-fe2488cde375.png">

<br>

## 🛠 Tools

<p>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">
   <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> 
  
<br>
    <img src="https://img.shields.io/badge/MSW-D9272E.svg?style=for-the-badge&logo=MEGA&logoColor=%2361DAFB">
    <img src="https://img.shields.io/badge/Recoil-0075EB?style=for-the-badge&logo=Revolut&logoColor=white">
   <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">
   
  <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=GraphQL&logoColor=white">

  <br>
   <img src="https://img.shields.io/badge/Apollo GraphQL-311C87?style=for-the-badge&logo=Apollo GraphQL&logoColor=white">
     <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&&logo=Firebase&logoColor=orange">
         <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">
             <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">

  <br>
      <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">
       <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">
       <img src="https://img.shields.io/badge/Ant Design-0170FE?style=for-the-badge&logo=Ant Design&logoColor=white">
       <img src="https://img.shields.io/badge/Sementic UI React-35BDB2?style=for-the-badge&logo=Semantic UI React&logoColor=white">
     <br>
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">

<br>

## 👍 사용 이유

### Vite + Typescript

- SSR방식을 사용함으로써 SEO(검색엔진최적화)에 유리
- 컴파일 단계에서 타입 관련 에러를 막을 수 있으며, 크로스 브라우징(브라우저 호환성) 문제 해결

### React Query + Recoil

- 복잡한 쿼리와 대규모 데이터베이스를 다룰 수 있는 기능이 풍부한 데이터베이스이며, 빠르고 유연한 개발이 가능
- Node.js 에서 작동하며 항상 최신 JS,TS 기능을 지원하고 다양한 데이터 베이스를 지원하며,
  코드에 entities와 함께 작업 가능</li>

### GraphQL + Apollo

- 내장 HTTP 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치 등의 별도의 소프트웨어 없이 동작하는 것이 가능
- Javascript 언어로 Front-end 뿐만 아니라 Back-end 개발 환경을 구성할 수 있기에 생산성이 높고 러닝 커브가 줄어듦
- 일련의 강력한 기능을 제공하며 라우팅과 미들웨어 기반으로 간결하고 유연하게 웹서버를 구현할 수 있음

### Firebase

- response timeout 처리가 가능하며, Promise 기반으로 만들어져 데이터를 다루기 편리함
- 여러 컴포넌트들에 모두 동일한 원격의 상태를 공유하며, 캐시된 데이터를 이용하여 효율적인 동작을 만들어냄. 데이터를 가져오는데 특화.

### Heroku + Ver

<br>

# 🔥 Issue & TroubleShooting

#### 👉 재사용성 높이기

- **Issue**
  - 회원정보는 어느 컴포넌트에서나 자주 쓰이는 데이터. 따라서, 상위 컴포넌트에서 최하위컴포넌트까지 props로 정보를 전달하는 경우 발생
- **trouble shooting**
  - **Context**에 담아 재사용성을 높이고, **Reducer**를 통하여 관리하고 dispatch를 통해 데이터를 업데이트.

---

#### 👉 Foreign key constraint

- **Issue**
  - 커뮤니티, 게시글, 댓글을 삭제하는 과정에서 외래키 참조에 대한 에러 발생.
- **trouble shooting**
  - 테이블마다 외래키를 통해 연관관계를 맺고 있기 때문이다. 따라서, **CASCADE문**을 사용하여 삭제시 참조되는 테이블에서도 업데이트가 이루어지게 한다.

```
// Example
@ManyToOne(() => Post, post => post.comments, {
    nullable: false,
    onDelete: 'CASCADE',
  })
```

---

#### 👉 미들웨어 생성하기

- **Issue**
  - route 생성시 대부분의 기능들이 사용자 인증에 대한 핸들러를 사용
- **trouble shooting**
  - 중복적으로 사용되는 핸들러를 재사용하기 위하여 **미들웨어**로 분리
  - User Middleware : 여러 핸들러에서 유저 정보를 제공
  - Auth Middleware : 유저 정보 또는 유저 등급에 따른 인증 제공

---

#### 👉 Infinite Scroll

- **Issue**
  - 수많은 게시글에 대한 데이터 출력
- **trouble shooting**
  - **useSWRInfinite**을 통해서 페이지를 스크롤하는 동작에 반응하여 자동으로 필요한 데이터를 불러오는 기능을 구현
  - 페이지의 끝이라는 특정지점에 도달하는지 관찰하기 위해 **Intersection Observer API**을 사용

<br>

<br>

## 🎥 GIF

|                                                **메인페이지(무한스크롤)**                                                |                                                        **회원가입 & 로그인**                                                        |
| :----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| ![메인페잊](https://user-images.githubusercontent.com/81337674/208297127-35ba136d-c09b-4aeb-8390-d43418bda54b.gif) | ![회원가입,로그인](https://user-images.githubusercontent.com/81337674/208295695-59842dd7-bb7b-4c56-944b-189cfbfb3e48.gif) |
|                                                       **커뮤니티**                                                       |                                                             **게시글**                                                              |
|    ![커뮤니티](https://user-images.githubusercontent.com/81337674/208297879-fd1d7add-cc87-4d6a-8357-ae12dc3c64a3.gif)    |          ![게시글](https://user-images.githubusercontent.com/81337674/208297597-aad3822d-dc7f-49be-a050-87f6f7b3b8fb.gif)           |
|                                                         **댓글**                                                         |                                                             **좋아요**                                                              |
|      ![댓글](https://user-images.githubusercontent.com/81337674/208297434-b14d36f8-10ff-4b91-a97e-1159d2c62e89.gif)      |          ![좋아요](https://user-images.githubusercontent.com/81337674/208297700-f7db3b27-a7e0-4425-b016-e0a80ce792d4.gif)           |
|                                                     **사용자페이지**                                                     |                                                            **검색하기**                                                             |
|  ![사용자페이지](https://user-images.githubusercontent.com/81337674/208297917-af174774-15a4-436f-85cc-02897327dc63.gif)  |           ![검색](https://user-images.githubusercontent.com/81337674/208298068-86bc997c-1c74-462a-8234-3ceb61a858a6.gif)            |

<br>

<br>

## ✚ 추가하고 싶은 기능

1️⃣ 검색기능을 frontend에서의 filter, includes 을 통한 데이터 처리가 아닌, backend에서 입력한 값에 대한 데이터를 불러오는 방식으로 변환

2️⃣ 텍스트 에디터를 추가하여 편리하고 유용한 게시글 작성

3️⃣ 카카오 로그인 API을 사용하여 간편로그인 구현
