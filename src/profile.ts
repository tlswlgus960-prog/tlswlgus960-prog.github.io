// 자기소개 페이지에 표시되는 모든 내용은 이 파일에서만 수정한다.
// 컴포넌트는 이 값을 읽어서 그리기만 한다.

export type Project = {
  name: string
  description: string
  tech: string[]
  link?: string
}

export type SkillGroup = {
  category: string
  items: string[]
}

export type Fact = {
  label: string
  value: string
}

export type Profile = {
  name: string
  tagline: string
  about: string[]
  facts: Fact[]
  skills: SkillGroup[]
  projects: Project[]
  contact: {
    github: string
    email: string
  }
}

export const profile: Profile = {
  name: '신지현',
  tagline: '무궁무진한 호기심을 가진 잡식성 개발자',

  // TODO: 자기소개 글 직접 다듬기 (문단 하나가 배열 원소 하나)
  about: [
    '안녕하세요, 신지현입니다. 궁금한 게 생기면 언어나 분야를 가리지 않고 일단 만들어 보는 잡식성 개발자입니다.',
    'Python으로 API를 만들고, Node로 웹을 다루고, Go와 Rust로 시스템 쪽을 기웃거리며 새로운 것을 배우는 재미로 개발하고 있습니다.',
  ],

  facts: [
    { label: '메인 디바이스', value: 'M5 Pro' },
    { label: '좋아하는 운동', value: '헬스' },
  ],

  skills: [
    { category: '주력', items: ['Python', 'Node.js', 'Go', 'Rust'] },
    // TODO: 더 넣거나 뺄 기술 정리하기
    { category: '그 밖에 써 본 것', items: ['TypeScript', 'React', 'FastAPI', 'Docker', 'GitHub Actions'] },
  ],

  // TODO: 실제 프로젝트 내용과 링크로 바꾸기
  projects: [
    {
      name: 'delivery-eta',
      description: '거리와 밀린 주문 수로 배달 예상 시간을 계산하는 API. CI/CD로 자동 배포합니다.',
      tech: ['Python', 'FastAPI', 'pytest', 'Docker'],
      link: 'https://github.com/your-github-id/mlops-sample',
    },
    {
      name: 'my-profile',
      description: '지금 보고 있는 한 페이지짜리 자기소개 사이트입니다.',
      tech: ['React', 'TypeScript', 'Vite'],
      link: 'https://github.com/your-github-id/my-profile',
    },
  ],

  contact: {
    // TODO: 실제 GitHub 주소로 바꾸기
    github: 'https://github.com/your-github-id',
    // TODO: 실제 이메일 주소로 바꾸기
    email: 'you@example.com',
  },
}
