# 프론트엔드 아키텍처

이 문서는 현재 프론트엔드 애플리케이션의 아키텍처를 설명합니다. 이 아키텍처는 도메인 기반 설계와 레이어 구조를 활용하여 코드의 모듈성과 유지보수성을 극대화합니다.

## 파일 구조

```
src
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── vite-env.d.ts
├── assets
│   └── react.svg
├── domains
│   ├── index.ts
│   ├── cart
│   │   ├── bridge.ts
│   │   ├── controller.ts
│   │   ├── index.ts
│   │   ├── repository.ts
│   │   └── service.ts
│   ├── product
│   │   └── index.ts
│   └── user
│       ├── bridge.ts
│       ├── controller.ts
│       ├── index.ts
│       ├── repository.ts
│       └── service.ts
├── layers
│   ├── bridge.ts
│   ├── controller.ts
│   ├── index.ts
│   ├── layer.ts
│   ├── repository.ts
│   └── service.ts
├── pages
│   └── cart
│       ├── Cart.tsx
│       └── useCart.tsx
└── shared
    └── utils
        ├── localStorage.ts
        └── single.ts
```

## 아키텍처 설명

### 1. **기본 구조**

이 아키텍처는 **도메인 기반 설계**를 채택하고 있으며, 각 도메인은 관련된 기능을 모듈화하여 관리합니다. 주요 도메인으로는 `cart`, `product`, `user`가 있으며, 각각의 도메인은 다음과 같은 구조를 가집니다:

- **bridge.ts**: 도메인과 외부 간의 연결 역할을 수행합니다.
- **controller.ts**: 서비스 간의 흐름을 관리하며, 비즈니스 로직을 처리합니다.
- **repository.ts**: 데이터의 저장 및 관리를 담당합니다.
- **service.ts**: 데이터를 가져오고 가공하는 역할을 합니다.
- **index.ts**: 도메인 내의 다른 모듈을 통합하여 외부에 노출합니다.

### 2. **레이어 구조**

`layers` 디렉토리는 애플리케이션의 전반적인 아키텍처를 구성하는 레이어를 포함합니다. 레이어는 다음과 같은 파일로 구성되어 있습니다:

- **bridge.ts**: 각 도메인과의 연결을 관리합니다.
- **controller.ts**: 애플리케이션의 여러 서비스 간의 종속성을 관리합니다.
- **repository.ts**: 데이터 소스와의 상호작용을 캡슐화합니다.
- **service.ts**: 비즈니스 로직을 구현하여 도메인 간의 상호작용을 조정합니다.
- **layer.ts**: 레이어 간의 역할을 정의합니다.
- **index.ts**: 레이어를 외부에 노출하는 역할을 합니다.

### 3. **페이지 구조**

`pages` 디렉토리는 사용자 인터페이스의 각 페이지를 포함합니다. 예를 들어, `cart` 페이지는 다음과 같은 파일로 구성됩니다:

- **Cart.tsx**: 장바구니 UI를 구현하는 컴포넌트입니다.
- **useCart.tsx**: 장바구니 관련 로직을 처리하는 커스텀 훅입니다.

### 4. **공유 유틸리티**

`shared` 디렉토리는 여러 도메인과 레이어에서 재사용할 수 있는 유틸리티 모듈을 포함합니다. 예를 들어:

- **localStorage.ts**: 로컬 스토리지와의 상호작용을 관리합니다.
- **single.ts**: 싱글턴 패턴을 구현하여 인스턴스를 관리합니다.

### 5. **자산 관리**

`assets` 디렉토리는 애플리케이션에서 사용하는 이미지와 같은 정적 자산을 포함합니다.

## 결론

이 아키텍처는 모듈화된 구조를 통해 각 도메인과 레이어 간의 명확한 경계를 설정하고, 코드의 재사용성과 유지보수성을 높입니다. 각 도메인은 독립적으로 개발 및 테스트할 수 있으며, 전체 애플리케이션의 일관성을 유지하면서도 유연한 확장이 가능합니다.
