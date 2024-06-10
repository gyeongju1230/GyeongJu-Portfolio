const ProjectModalData = {
  portfolio: {
    tag: 'Solo Project',
    title: 'GyeongJu Portfolio',
    introduction: '프로젝트 소개',
    introductionContent:
      'Gyeong Portfolio 는 개인 Portfolio 용도로 제작한 반응형 웹사이트입니다.',
    skills: 'SKILLS',
    period: '프로젝트 진행기간',
    periodContent: '2024.04.02 - 2024.05.31',
    role: '역할',
    features: '구현한 기능',
    featuresContent: [
      {
        content:
          '∙ Main page UI \n' +
          '∙ About page UI \n' +
          '∙ Skill page UI \n' +
          '∙ Project page UI \n' +
          '→ Swiper 를 사용하여 이미지 슬라이더 개발 \n' +
          '∙ Contact page UI\n' +
          '→ mailto: 프로토콜을 사용하여 Gmail 아이콘 클릭 시 새 이메일 작성 창이 열리도록 구현 \n' +
          '→ copyToClipboard 함수를 사용하여 User Name, Gmail 클릭 시 클립보드에 복사되도록 구현',
      },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent:
      '① 전체 개발 프로세스 이해 증진 \n' +
      '∙ 이 프로젝트를 통해 기획, 디자인, 개발의 모든 단계를 혼자서 진행하며 전체 개발 프로세스에 대한 깊은 이해를 얻게 되었습니다. \n' +
      '∙ 각각의 단계에서 발생할 수 있는 잠재적인 문제와 해결 방안을 예측하는 데 큰 도움이 되었습니다. \n' +
      '\n' +
      '② 컴포넌트 분리의 중요성 \n' +
      '∙ 프로젝트를 진행하면서 컴포넌트 분리의 중요성을 깨달았습니다. \n' +
      '∙ 모든 페이지에 적용되는 Scroll 버튼이나 Skill tag 같은  UI 요소들을 재사용 가능한 컴포넌트로 분리함으로써 코드의 가독성과 유지보수성을 크게 향상시킬 수 있었습니다. \n' +
      '∙ 이를 통해 중복 코드를 줄이고, 변화가 필요할 때 특정 컴포넌트만 수정하면 되는 효율적인 개발 환경을 구축할 수 있었습니다. \n' +
      '\n' +
      '③ 데이터 파일 분리의 필요성 \n' +
      '∙ 데이터 파일을 별도로 분리하여 관리하는 것이 얼마나 중요한지 실감했습니다. \n' +
      '∙ 개발하는 동안 데이터의 수정이나 업데이트가 빈번하게 이루어졌는데, 데이터 파일을 분리함으로써 다른 부분에 영향을 주지 않고 손쉽게 수정할 수 있었습니다. \n' +
      '∙ 이는 코드의 명확성과 유지보수성을 높이는 데 큰 도움이 되었습니다. \n' +
      '\n',
    url: 'URL',
    urlLink: [
      {
        link: 'https://portfolio.jung-gyeongju.com',
        label: '🔗 배포 사이트로 이동하기',
      },
    ],
    github: 'Github',
    githubLink: 'https://zrr.kr/vhGMB',
    figma: 'Figma',
    figmaLink: 'https://zrr.kr/ZM9j',
    notion: 'Notion',
    notionLink:
      'https://www.notion.so/gyeongju/GyeongJu-Portfolio-345d1d6309144c1a9fd09af8fa081209?pvs=4',
  },

  todo: {
    tag: 'Solo Project',
    title: 'Todo Service',
    introduction: '프로젝트 소개',
    introductionContent:
      'Todo Service 는 직접 여러 Todo 애플리케이션을 사용해보고 느낀 불편함을 개선하여 일정 관리를 더욱 쉽고 편리하게 할 수 있도록 제작한 \n' +
      '반응형 웹사이트입니다.',
    skills: 'SKILLS',
    period: '프로젝트 진행기간',
    periodContent: '2024.03.12 - 2024.03.30',
    role: '역할',
    features: '구현한 기능',
    featuresContent: [
      {
        content: '∙ Todo CRUD \n' + '∙ Todo Filtering \n' + '∙ Dark Mode',
      },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent:
      '① 사용자 경험에 대한 이해 심화 \n' +
      '∙ 직접 여러 Todo 애플리케이션을 사용하며 느낀 불편함들을 개선하기 위해 노력했습니다. \n' +
      '∙ 이러한 경험을 바탕으로 쉽고 편리하게 일정을 관리할 수 있도록 UI/UX 디자인을 최적화했습니다. \n' +
      '∙ 간단하고 직관적인 인터페이스를 구현하기 위해 많은 고민과 테스트를 거쳤고, 이를 통해 사용자의 관점에서 생각하는 능력이 향상되었습니다. \n' +
      '\n' +
      '② 기술 학습과 프로젝트 적용의 중요성 \n' +
      '∙ 예전에 학습한 React 를 이번 프로젝트에 적용하면서 기술을 실제로 활용하는 중요성을 깨달았습니다. \n' +
      '∙ React 의 기본 개념부터 다양한 기능들을 스스로 복습하고 실제 프로젝트에 적용해보는 과정에서 실전적인 학습의 효과를 경험했습니다. \n' +
      '\n' +
      '③ 반응형 웹 디자인의 필요성 \n' +
      '∙ 다양한 디바이스에서 일관된 사용자 경험을 제공하기 위해 반응형 웹 디자인의 중요성을 깨달았습니다. \n' +
      '∙ 이를 구현하기 위해 CSS Media Queries 와 Styled-Component 를 효과적으로 활용하였고, 이를 통해 모바일 및 데스크톱 환경에서 모두 최적화된 웹사이트를 제작할 수 있었습니다. \n' +
      '\n',
    url: 'URL',
    urlLink: [
      {
        link: 'https://todo.jung-gyeongju.com',
        label: '🔗 배포 사이트로 이동하기',
      },
    ],
    github: 'Github',
    githubLink: 'https://zrr.kr/h6Y9',
    figma: 'Figma',
    figmaLink: 'https://zrr.kr/O0vW',
    notion: 'Notion',
    notionLink:
      'https://www.notion.so/gyeongju/Todo-Service-afea5e1f5c5a44cd9c53910ae3a08576?pvs=4',
  },

  sagopasam: {
    tag: 'Team Project',
    title: '사고파삼',
    introduction: '프로젝트 소개',
    introductionContent:
      '사고파삼은 챗봇을 활용한 전공서적 중고거래 애플리케이션입니다. \n' +
      '복잡한 의사소통 과정과 사기 거래 때문에 불편했던 중고거래, \n' +
      '중고거래의 불편함을 해소한 사고파삼에서는 쉽고 빠르게 필요했던 전공책을 사고 팔 수 있습니다. \n' +
      '\n' +
      '① 수업 가는 길에 거래하는, 사물함 거래 \n' +
      '∙ 단국대학교 죽전캠퍼스 2층에 설치된 사물함에서 내가 지정한 날짜/시간에 책을 배치/수령하면 거래가 완료돼요. \n' +
      '\n' +
      '② 구매자와 판매자 간 의사소통이 필요없는 챗봇 거래 \n' +
      '∙ 모든 거래 과정은 채팅봇으로 진행되며, 직접적인 소통 없이 버튼만으로 거래가 가능해요. \n' +
      '\n' +
      '③ 내가 원하는 날짜와 시간에 거래, 비대면 거래 \n' +
      '∙ 판매자는 사물함에 책을 배치할 수 있는 날짜와 시간을 미리 지정할 수 있어요. \n' +
      '∙ 판매자는 설정한 날짜에 서적을 배치하고, 구매자는 서적을 수령하면 되는 비대면 거래에요. \n' +
      '\n' +
      '④ 사기 거래 없는, 중개 구조 \n' +
      '∙ 중고 거래 시 가장 많이 하는 걱정 중 하나는 “입금은 했는 데 약속한 날에 거래자가 안 나오면 어떡하지?” 입니다. \n' +
      '∙ 이러한 걱정을 해소하기 위해 사고파삼은 구매자가 서적을 수령한 후에만 판매자가 판매금을 받을 수 있는 프로세스를 도입했습니다.',
    planningBackground: '프로젝트 기획 배경',
    planningBackgroundContent:
      '사고파삼 프로젝트는 대학생들의 전공서적 비용 문제와 불법 제본 문제에 대한 인식에서 시작하였습니다. \n' +
      '알바몬의 설문 결과(2020 알바몬 자체 설문조사 결과)에 따르면, 대학생의 평균 월 생활비 중 전공서적 비용이 상당한 부분을 차지한다고 합니다. \n' +
      '이로 인해 전공서적을 불법 제본하는 사례가 늘어나고 있으며, 이러한 불법 행위는 저작권 침해뿐만 아니라 출판 및 콘텐츠 산업 시장까지 침체시키는 결과를 초래합니다. 뿐만 아니라, 저희가 자체적으로 실시한 설문조사(2021.03-2021.05) 결과, 대학생들이 전공서적을 버리는 경우도 빈번히 발생하고 있었고, 이로 인해 많은 책이 폐기되고 있었습니다. 기존의 중고 거래 플랫폼의 문제점들을 해결하여 안전하고 합리적인 가격에 빠르게 거래할 수 있는 플랫폼이 필요하다는 인식에서 사고파삼이 탄생하게 되었습니다.\n' +
      '\n' +
      '사고파삼의 복잡한 프로세스를 이해하고, 개발하기 위해 저희는 오랜 시간을 프로젝트에 집중했습니다. \n' +
      '1차 기획을 마친 후에도, 계속해서 개발팀과의 회의를 통해 의견을 교환하고 피드백을 주고받으며 프로세스를 완벽하게 다듬었습니다. \n' +
      '여러 차례의 수정을 거쳐 최종적으로 개발되었고, QA를 통해 더욱 완성도 있는 프로젝트를 만들어냈습니다. \n' +
      '결과적으로, 정해진 기간 내에 애플리케이션을 개발하여 성공적으로 출시하였습니다.',
    skills: 'SKILLS',
    period: '프로젝트 진행기간',
    periodContent: '2023.12.18 - 2024.02.16',
    teamIntroduction: '팀원 소개',
    teamIntroductionContent: [
      {
        image: 'Member1',
        name: '정경주',
        position: 'Front-End',
        note: '사용자 App 개발',
      },
      { image: 'Member3', name: '박재완', position: 'Full-stack' },
      { image: 'Member4', name: '김민진', position: 'Back-End' },
    ],
    role: '역할',
    features: '구현한 기능',
    featuresContent: [
      {
        image: 'Sagopasam_Screen',
        content:
          '\n' +
          '💡 사용자 App \n' +
          '\n' +
          '∙ 유저관련 페이지 \n' +
          '→ 회원가입, 로그인, 회원정보수정, 마이페이지, 도움말 \n' +
          '∙ 전공서적 판매글 CRUD \n' +
          '∙ Short Polling 을 활용한 챗봇 거래 시스템, 챗봇 페이지 \n' +
          '→ 판매자/구매자별 채팅, 사물함 설정 \n' +
          '→ setInterval 을 사용하여 7초마다 서버에 안읽은 메시지 조회 요청, 새로운 메시지가 있을 경우 상태를 업데이트 \n' +
          '→ useEffect 와 useCallback 을 활용하여 포커스될 때마다 채팅을 최신 상태로 유지 \n' +
          '∙ 공지사항 페이지 \n' +
          '→ 메인 배너와 연결 \n' +
          '∙ 전체 UI 구현 \n' +
          '\n',
      },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent:
      '① 문제 해결 능력 강화 \n' +
      '∙ 프로젝트 진행 중 다양한 문제와 버그를 직면하고 이를 해결하는 과정에서 문제 해결 능력이 향상되었습니다. \n' +
      '∙ 특히 처음 적용해보는 Short Polling 을 도입하는 과정에서 여러 시행착오를 겪었지만, 이를 해결하고 최종적으로 완성하는 과정에서 많은 교훈을 얻었습니다. \n' +
      '\n' +
      '② 충분한 테스트의 중요성 \n' +
      '∙ QA 테스트 진행전, 내부 테스트를 충분히 진행했음에도 불구하고 QA 테스트에서 많은 버그가 발견되었습니다. \n' +
      '∙ 이 경험을 통해 반복된 테스트와 외부적인 QA 과정의 중요성을 명확히 이해하게 되었습니다. \n' +
      '\n' +
      '③ 커뮤니케이션의 중요성 \n' +
      '∙ 개발팀을 대표하여 기획 및 디자인팀과의 소통을 맡으며, 서로 다른 의견을 조율하는 과정에서 좋은 커뮤니케이션의 중요성을 깊이 인지하게 되었습니다. \n' +
      '∙ 효율적이고 명확한 커뮤니케이션을 통해 프로젝트 진행의 원활함과 결과물의 품질 향상을 이룰 수 있음을 깨달았습니다. \n' +
      '\n',
    url: 'URL',
    urlLink: [
      {
        link: 'https://apps.apple.com/kr/app/%EC%82%AC%EA%B3%A0%ED%8C%8C%EC%82%BC/id6477531087',
        label: '🔗 App Store 로 이동하기',
      },
      {
        link: '',
        label: '🔗 Google Play 로 이동하기 (⚒️ 베타 테스트 중입니다.)',
      },
    ],
    github: 'Github',
    githubLink: 'https://zrr.kr/8RUK',
    figma: 'Figma',
    figmaLink: 'https://zrr.kr/ewSW',
    notion: 'Notion',
    notionLink:
      'https://www.notion.so/gyeongju/1de667a1a74a4c7fb4dbfe4707b8bd87?pvs=4',
  },

  deunbung: {
    tag: 'Team Project',
    title: '든붕이',
    introduction: '프로젝트 소개',
    introductionContent:
      '든붕이는 건국대학교 글로컬캠퍼스 창업동아리 카페 ‘든든하쿠’ 와 협업하여 제작한 붕어빵 미리 주문 애플리케이션입니다. \n' +
      '긴 대기 시간과 협소한 대기 공간으로 불편한 경험을 하셨던 분들을 위해 제작되었습니다. \n' +
      '든붕이를 통해 미리 주문하고 소중한 시간을 절약하세요! \n' +
      '\n' +
      '① 주문 및 결제 간편화 \n' +
      '∙ 든붕이를 통해 붕어빵을 주문하고 간편하게 결제할 수 있습니다. \n' +
      '∙ 가게에 방문해 결제하거나 번거로운 현금 결제 과정을 거치지 않고도 손쉽게 주문을 완료할 수 있습니다. \n' +
      '\n' +
      '② 예상 소요 시간/대기 시간 확인 \n' +
      '∙ 든붕이를 통해 현재 예상 소요 시간과 주문한 붕어빵의 대기 시간을 확인할 수 있습니다. \n' +
      '∙ 이를 통해 언제 주문할지를 결정하는 데 도움을 받을 수 있습니다. \n' +
      '\n' +
      '③ 주문 상태 확인 \n' +
      '∙ 주문한 붕어빵의 상태를 실시간으로 확인할 수 있습니다. \n' +
      '∙ 주문이 대기중인지, 시간이 얼마나 남았는지, 완료되었는지를 어플을 통해 확인할 수 있어, 대기 시간을 최소화할 수 있습니다.',
    planningBackground: '프로젝트 기획 배경',
    planningBackgroundContent:
      '든붕이 프로젝트를 기획하게 된 계기는 카페 든든하쿠를 이용하며 소비자로서 겪었던 불편함에서 시작되었습니다. \n' +
      '친구와의 대화를 통해 스타벅스의 사이렌오더처럼 사전에 주문할 수 있는 어플이 있다면 이런 불편함을 해소할 수 있을 것이라는 아이디어가 나왔습니다. 그래서 친구와 저는 이 아이디어를 실현하기로 결심했습니다. \n' +
      '카페 사장님께 이러한 아이디어를 제안하기 위해 개발 초기비용과 개발 기간 등을 철저히 정리한 후에 찾아갔습니다. \n' +
      '\n' +
      '사장님 또한 저희가 겪었던 불편함을 공감하셨고, 이 문제를 해결하기 위해 다양한 방안을 고민했다고 하셨습니다. \n' +
      '특히, 든든하쿠에서는 붕어빵과 와플 같은 디저트 메뉴에 대한 대기 시간이 길어 손님들이 많이 돌아가시는 상황이었습니다. \n' +
      '이에 사장님은 대표 메뉴를 붕어빵으로 설정하고, 추후에 와플 및 커피/음료도 추가하고싶다고 하셔서 메인 메뉴를 붕어빵으로, 관리자 페이지에 메뉴 추가 기능을 넣게되었습니다. \n' +
      '\n' +
      '9월에 기획을 시작하게 되어 12월 종강 전에 서비스를 오픈하기 위해서는 기간이 촉박했습니다. \n' +
      '기간이 촉박한만큼 프로젝트 경험이 풍부한 팀원들을 모집하고자 했습니다. \n' +
      '다행히 이전에 함께 프로젝트를 진행했던 팀원들이 함께하게 되어 개발팀과 디자인팀 모두 신속하게 구성되었습니다. \n' +
      '매주 회의를 통해 팀원들끼리 의견을 나누고 피드백을 주고받으며 프로젝트를 완성을 위해 노력하였고, \n ' +
      '그 결과 정해진 기간 내에 애플리케이션을 개발하여 성공적으로 출시할 수 있었습니다.',
    skills: 'SKILLS',
    period: '프로젝트 진행기간',
    periodContent: '2023.09.19 - 2023.11.29',
    teamIntroduction: '팀원 소개',
    teamIntroductionContent: [
      {
        image: 'Member1',
        name: '정경주',
        position: 'Front-End',
        note: '사용자 App 개발',
      },
      {
        image: 'Member2',
        name: '김선규',
        position: 'Front-End',
        note: 'Admin page 개발',
      },
      { image: 'Member3', name: '박재완', position: 'Full-stack' },
      { image: 'Member4', name: '김민진', position: 'Back-End' },
    ],
    role: '역할',
    features: '구현한 기능',
    featuresContent: [
      {
        image: 'Deunbung_Screen',
        content:
          '\n' +
          '💡 사용자 App \n' +
          '\n' +
          '∙ 유저관련 페이지 \n' +
          '→ 회원가입, 로그인, 회원정보수정, 마이페이지, 과거 주문 내역 \n' +
          '∙ 영업여부와 예상 대기시간을 보여주는 페이지 \n' +
          '∙ 붕어빵 미리 주문 시스템, 주문 페이지 \n' +
          '∙ 붕어빵 간편 결제, 결제 페이지 \n' +
          '→ 토스페이먼츠 연결 \n' +
          '∙ 실시간 주문 상태 업데이트 페이지 \n' +
          '→ EventSource 를 사용하여 서버에서 보내주는 SSE 데이터를 통해 실시간으로 주문 상태 업데이트 \n' +
          '∙ 전체 UI 구현 \n',
      },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent:
      '① 실시간 데이터 처리의 복잡성 \n' +
      '∙ SSE 를 통해 실시간 주문 상태를 업데이트하면서 비동기 데이터 처리의 복잡성을 경험했습니다. \n' +
      '∙ 서버와의 지속적인 연결을 유지하고, 이벤트 스트림을 안정적으로 관리하는 것이 중요하다는 것을 깨달았습니다. \n' +
      '\n' +
      '② 사용자 경험 향상 \n' +
      '∙ 앱 출시 후 직접 운영까지 하면서 사용자로부터 피드백을 받고, 이를 바로 수정하고 반영하면서 사용자 경험(UX)을 최적화하는 방법에 대해 많은 것을 배웠습니다. \n' +
      '∙ 사용자 인터페이스를 개선하고, 앱의 응답 속도를 최적화하는 등 다양한 부분에서 사용자의 요구를 반영함으로써, 사용자 만족도를 높이는 것이 중요하다는 것을 실감했습니다. \n' +
      '\n',
    url: 'URL',
    urlLink: [
      {
        link: 'https://apps.apple.com/kr/app/%EB%93%A0%EB%B6%95%EC%9D%B4/id6471925416',
        label: '🔗 App Store 로 이동하기',
      },
      {
        link: 'https://play.google.com/store/apps/details?id=com.reliablekkufront&pcampaignid=web_share',
        label: '🔗 Google Play 로 이동하기',
      },
    ],
    github: 'Github',
    githubLink: 'https://zrr.kr/PuSn',
    figma: 'Figma',
    figmaLink: 'https://zrr.kr/8pFj',
    notion: 'Notion',
    notionLink:
      'https://www.notion.so/gyeongju/df804a4f8f0c462996f7b81068b4c3da?pvs=4',
  },
};

export default ProjectModalData;
