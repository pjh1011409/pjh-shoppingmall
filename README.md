## 🍏 Fresh Life 🍀

<strong>상쾌하고 건강한 하루를 선물해요. </strong>
<br>
<strong>유기농 음료 수제 캔들,비누 등을 판매하는 쇼핑몰 사이트입니다.</strong>

<br>

## 🗓 프로젝트 기간

2022.12.19 ~ 2023.01.08
<br>

## 📎 Link

**Hompage**
👉 https://pjh-shoppingmall.vercel.app/

**Notion**
👉 [Notion Portfolio](https://www.notion.so/Fresh-Life-aeeb284f6cea4c48bccb6f72c422f24f)
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

- 번들을 생성하는 과정이 필요 없어 서버의 시작속도가 빠르며, 간결한 사용방식과 안정성을 제공
- 컴파일 단계에서 타입 관련 에러를 막을 수 있으며, 크로스 브라우징(브라우저 호환성) 문제 해결

### React Query + Recoil

- Redux에 비해 구조적으로 간결성을 가지며, 데이터 패칭, 캐싱, 서버 쪽 데이터를 관리하기 용이하다.
- 전역상태의 설정 및 정의가 매우 쉬위며, 전역상태를 사용하기 위한 Boiler Plate양이 적고, Hook기반으로 매우 심플하며 React와 유사한 사용법으로 러닝커브가 낮다. </li>

### GraphQL + Apollo

- 하나의 EndPoint에 여러 API 요청이 가능하며, 필요한 정보만 요청할 수 있어 HTTP 요청 횟수와 응답 사이즈가 줄어든다.
- Javascript 언어로 Front-end 뿐만 아니라 Back-end 개발 환경을 구성할 수 있기에 생산성이 높고 러닝 커브가 줄어듦
- GraphQL이 적용된 서버를 쉽게 생성하게 도와주는 라이브러리로, 간단한 코드 몇줄로 GraphQL 서버 구성이 가능하다.

### Firebase

- Document 형식의 빠르고 간편한 데이터베이스로, 실시간으로 데이터들을 전송해주는 방식을 가져 코드 양이 줄고 적은 코드로도 원하는 구성을 만들 수 있다. 따라서 데이터를 추가하고 관리하는 것이 매우 간단하다.

### Heroku + Vercel

- EC2와 같이 가상머신을 주는 것이 아니라 나의 프로젝트를 띄워주는 것으로 개별적으로 미들웨어나 여러 프로그램 설치 없이 간단하게 사용이 가능하다.
- Github에 코드를 PUSH할 때마다 자동으로 감지하여 Build하여 배포를 진행해준다.

<br>

# 🔥 Issue & TroubleShooting

### 👉 invalidateQueries vs 낙관적 업데이트

- **Issue**
  - 장바구니 상품 수량 변경시 invalidateQueries를 사용하여 기존 query를 무효화시켜 최산화된 데이터를 가져오도록 하였다. 하지만, 해당 항목에 대한 쿼리를 다시 가져오고 이미 가지고 있는 데이터에 대한 네트워크 호출은 낭비였고, 배포 후 수량 변경시 수량이 느리게 반영되는 것을 확인.
- **trouble shooting**
  - 서버 업데이트를 하기 전에 미리 화면의 UI를 바꿔준 후, 서버와의 통신 결과에 따라 확정 / 롤백을 결정하는 방식의 낙관적 업데이트를 구현.

---

### 👉 체크박스 상태값 기억하기

- **Issue**
  - 장바구니에 체크된 데이터를 기억하지 못하고 페이지 이동후 체크가 풀려버리는 현상 발생.
- **trouble shooting**
  - 장바구니페이지가 렌더링될 때마다 장바구니의 상품 중에 체크되었던 상품의 id값을 기억해 check값이 true가 되게 만든다.
    - data-\*: 특정한 데이터를 DOM요소에 저장
    - dataset: 에 대한 값을 읽어들언다.

```
// comonents/cart/CartItem.tsx
<input ... data-id={id} ... />


// components/cart/index.tsx
useEffect(() => {
    checkedCartData.forEach((item) => {
      const itemRef = checkboxRefs.find(
        (ref) => ref.current!.dataset.id === item.id
      );
      if (itemRef) itemRef.current!.checked = true;
    });
    setAllCheckedFromItems();
  }, []);
```

---

### 👉 Query Key 고유성

- **Issue**
  - Admin페이지와 Product페이지는 공통된 graphQL을 통해 상품데이터를 가져온다. 단, admin페이지에서는 삭제된 상품이 출력되고, Product페이지에서는 삭제된 상품은 미출력되는 조건을 가지고 있다.
    하지만, 둘다 같은 데이터를 출력하는 현상 발생.
- **trouble shooting**
  - Query Key값을 고유한 값으로 설정하여 서로 다른 데이터라는 것을 인지시키기

```
// Product Page
useInfinityQuery<Products>(
  [QueryKeys.PRODUCTS, "products"],
  ...
  )

// Admin Page
useInfinityQuery<Products>(
  [QueryKeys.PRODUCTS, "admin"],
  ...
  )
```

---

### 👉 장바구니 데이터 무한 랜더링 발생

- **Issue**
  - NavBar에 장바구니에 담긴 상품 수량을 출력하기 위해, 장바구니의 데이터를 invalidQueries를 사용하여 실시간으로 호출. 이 과정에서 데이터를 계속해서 Refetching하여 무한 랜더링이 발생한다.
    이유는 장바구니에 상품이 추가된 것으로 navBar에서는 새로운 값을 가져온다. 그리고, 새롭게 가져온 것이 또다시 데이터가 변경되었다고 판단되어 계속하여 fetching이 이루어지는 것 같다. 개발 중에 여러번 서버가 다운되었는데 이 것이 원인이었던 것 같다. ㅜㅜ
- **trouble shooting**
  - Recoil을 통해 수량을 전역으롯 상태 관리히여 장바구니 추가 버튼 클릭시 navBar에서 구독했던 상태값을 가져오게 하였다.

----

### 👉  Lazy Loading

- **Issue**
  - 사용자가 사이트에 접속했을 때 보이지 않는 것까지 모두 로드해오는 것이아니라 보이는 페이지만 로드한 후 다른 페이지에 접속했을 때 그 곳의 데이터를 로드해오는 작업이 필요.
- **trouble shooting**
  - React.lazy()와 Suspense 컴포넌트를 사용하여 해결. fallback prop으로 spinner 컴포넌트 적용.

```
// layout.tsx
const Layout: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

// routes.tsx
const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicAdminIndex = React.lazy(() => import('./pages/admin/index'));
const DynamicCartIndex = React.lazy(() => import('./pages/cart/index'));
...
```


<br>

<br>

## 🎥 GIF

|                                                    **메인페이지( light/dark 모드)**                                                     |                                                  **상품리스트 ( +무한스크롤)**                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|       ![메인페이지](https://user-images.githubusercontent.com/81337674/211292179-d4bb7ee3-cf03-4750-9a91-05e04e62943b.gif)        |   ![상품리스트](https://user-images.githubusercontent.com/81337674/211296527-fe9299ff-8b5a-47cc-9a42-d31bb1fe786b.gif)   |
|                                                              **상품상세**                                                               |                                                     **장바구니 상품 추가**                                                      |
|      ![상세페이지ㅣ](https://user-images.githubusercontent.com/81337674/211292201-4c27fc37-0879-4bc9-9fb8-8a139c3140dc.gif)       | ![장바구니 담기](https://user-images.githubusercontent.com/81337674/211297309-60b563f6-b40d-4653-84e5-4916f99706bb.gif) |
|                                                       **장바구니 상품 수정/삭제**                                                       |                                                          **결제하기**                                                           |
| ![장바구니 수정,삭제](https://user-images.githubusercontent.com/81337674/211292211-5cd9b8d4-59c4-44be-8c4d-b0e2d86d5c26.gif) |     ![결제하기](https://user-images.githubusercontent.com/81337674/211298985-52264d49-774c-4e39-bf73-e61f45580ea9.gif)     |
|                                                              **상품 추가**                                                              |                                                       **상품 수정/삭제**                                                        |
|        ![상품 추가](https://user-images.githubusercontent.com/81337674/211292225-99586146-ab11-46fb-9ce8-a7e6e87827d8.gif)        |     ![상품수정삭제](https://user-images.githubusercontent.com/81337674/211298520-f940910c-21dd-4220-a132-92e561cb1e6e.gif)      |

<br>

<br>

## ✚ 추가해볼 기능

- 로그인을 통한 인증에 따른 Admin 권한
- 찜하기, 좋아요 기능
