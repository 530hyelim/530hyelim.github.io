import { ypjp, newlearn } from "../assets/Images";

interface Project {
    id: number;
    img: string;
    title: string;
    subtitle: string;
    description: string;
    techStack: {
        language: string[];
        database: string[];
        tools: string[];
        os: string[];
        etc: string[];
    };
    planning: {
        heading: string;
        items?: string[];
    }[];
    problem?: string;
    goals: string[];
    references: {
        img: string[];
        website: string[];
        goods: string[];
        bads: string[];
        improvements?: string[];
    }[];
    calendar: string;
    structure: string;
    ucDiagram: string;
    erDiagram: string;
    features: {
        heading: string;
        items: string[];
    }[];
    adminFeatures?: {
        heading: string;
        items: string[];
    }[];
    role: {
        heading: string;
        items: string[];
    }[];
    outcome: string[];
    improvements?: string[];
    websiteUrl?: string;
    githubUrl: string;
}

export const projects: Project[] = [
    {
        id: 1,
        img: ypjp.main,
        title: '요리 PICK! 조리 PICK!',
        subtitle: '레시피 맞춤 추천 플랫폼',
        description: '사용자의 식습관 개선 및 건강한 식생활 유도를 위한 통합 플랫폼입니다. ' +
            '사용자는 개인 맞춤형 기능을 통해 식단을 관리하고, 식재료를 효율적으로 활용하며, ' +
            '커뮤니티 활동을 통해 다양한 레시피와 정보를 교류할 수 있습니다.',
        techStack: {
            language: ['Java', 'HTML5', 'CSS3', 'TypeScript', 'Python'],
            database: ['Oracle 21c'],
            tools: ['React', 'STS4', 'MyBatis', 'Apache Tomcat', 'Maven', 'Lombok'],
            os: ['Windows'],
            etc: ['AWS', 'ERD Cloud', 'Draw.io', 'Figma', 'FastAPI', 'Uvicorn', 'OpenAI API', 'LangSmith']
        },
        planning: [{
            heading: '사용자가 원하는 레시피를 쉽고 빠르게 찾고, 자신만의 요리를 공유하며 소통할 수 있는, '+
                '단순한 정보 제공을 넘어 요리 경험을 함께 나누는 공간을 제공'
        }],
        problem: '레시피 정보가 여러 플랫폼에 흩어져 있어 사용자가 원하는 내용을 찾기 어렵고, ' +
            '개인 레시피는 공유 범위가 제한적임',
        goals: ['검색, 공유, 소통을 한 곳에서 제공', '사용자는 원하는 레시피를 쉽고 빠르게',
            '창작자는 레시피를 효과적으로 공유', '커뮤니티를 통한 교류가 가능'],
        references: [{
            img: [ypjp.mangae, ypjp.smn],
            website: ['만개의 레시피', '새미네부엌이 궁금해?'],
            goods: ['방대한 레시피와 다양한 검색, 필터 기능', '친근한 브랜딩과 상세한 설명, 스토리텔링 요소',
                '사진, 리뷰, 평점 등으로 신뢰성 확보'],
            bads: ['광고와 복잡한 UI로 사용자 경험 저하', '레시피 품질의 일관성 부족',
                '검색, 커뮤니티 기능의 한계와 제한적 공유성'],
            improvements: ['직관적인 UI 제공 -> 사용자 만족도 향상', '레시피 추천 기능 강화 -> 신뢰성 있는 플랫폼 구축',
                '검색 카테고리 체계화 및 커뮤니티 활성화']
        }],
        calendar: ypjp.calendar,
        structure: ypjp.structure,
        ucDiagram: ypjp.ucd,
        erDiagram: ypjp.erd,
        features: [{
            heading: '1. 회원 관련',
            items: ['회원가입', '로그인/로그아웃', '탈퇴']
        }, {
            heading: '2. 마이페이지',
            items: ['회원정보 수정', '식BTI 기록 열람', '알러지 정보 추가', '식단/식재료 관리']
        }, {
            heading: '3. 재료 관리',
            items: ['재료관리 정보 제공', '재료 검색', '음식 궁합']
        }, {
            heading: '4. 레시피',
            items: ['레시피 열람 (전체, 베스트 PICK)', '레시피 CRUD', '레시피 검색']
        }, {
            heading: '5. 커뮤니티',
            items: ['게시판 조회', '게시물 열람 (댓글, 좋아요 등)', '게시물 CRUD', '게시물 검색']
        }, {
            heading: '6. 고객문의',
            items: ['챗 봇 (QnA / FAQ)', '1:1 관리자 문의', '신고']
        }, {
            heading: '7. 食BTI',
            items: ['검사', '결과 저장']
        }, {
            heading: '8. 관리자 기능',
            items: ['회원 관리', '공지사항 작성', '새 챌린지 등록', '커뮤니티 관리', '레시피 공식화 승인']
        }],
        role: [{
            heading: '식단 관리 기능',
            items: ['사용자가 식단 섭취 기록을 입력하고, 칼로리/영양소를 자동 계산',
                '식단 기록 수정/삭제 및 상세 조회 기능 제공', '그래프 기반 통계 시각화 지원']
        }, {
            heading: '고객지원 시스템',
            items: ['FAQ 및 1:1 문의 작성/조회 기능', '문의 및 신고 내역을 DB에 저장하고, 관리자가 확인 가능']
        }, {
            heading: '관리자 페이지',
            items: ['신고 내역 관리 및 답변 기능', '고객지원 처리 현황 대시보드 제공']
        }, {
            heading: '실시간 채팅 및 알림',
            items: ['쿠킹 클래스 참여자 간 실시간 소통', 'STOMP + WebSocket 기반 채팅 서버 구축',
                '채팅방 입장/퇴장 알림 및 관리자 모니터링 기능 포함']
        }, {
            heading: '식BTI 검사',
            items: ['식습관 유형을 진단할 수 있는 설문 폼 제공', '응답 데이터를 기반으로 식BTI 유형을 자동으로 분석',
                '검사 결과를 DB에 저장하여 이후 마이페이지에서 조회할 수 있는 기능']
        }],
        outcome: ['사용자의 건강 데이터를 시각화하여 직관적인 정보 제공', '관리자와 사용자가 원활이 소통할 수 있는 고객지원/' +
            '채팅 시스템 구현', 'RESTful API와 WebSocket을 결합한 안정적인 서비스 설계 경험 축적',
            'AI 응답 기능을 접목하여 사용자 맞춤형 상담 가능성을 확인'],
        improvements: ['사용자별 영양소 섭취 데이터를 기반으로 레시피를 추천하고, 알러지 분석 및 식BTI 검사 결과를 활용한 ' +
            '맞춤형 레시피 추천 알고리즘을 구현하여 사용자 UX를 향상시킬 수 있음',
        '식단 섭취 기록 입력 및 식재료 입력 시, 등록된 이미지를 자동으로 분석하여 입력 폼에 바인딩하는 API를 추가함으로써 ' +
        '사용자의 편의성을 높일 수 있음'],
        websiteUrl: 'https://front.ypjp.store/',
        githubUrl: 'https://github.com/orgs/kh-powerpuffgirls/repositories'
    }, {
        id: 2,
        img: newlearn.main,
        title: 'new Learn();',
        subtitle: '온라인 학습 플랫폼',
        description: '학생과 교사 간의 소통, 학습 관리, 과제 제출, 커뮤니티 기능을 통합한 온라인 클래스룸 플랫폼입니다. ' +
            '클래스룸 중심의 협업 기능, 게시판, 채팅, 친구관리, 출결 및 과제 시스템 등 교육 환경에 특화된 다양한 기능을 제공합니다.',
        techStack: {
            language: ['Java', 'JSP & Servlet', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
            database: ['Oracle 11g'],
            tools: ['STS3', 'MyBatis', 'Apache Tomcat', 'Maven', 'Lombok'],
            os: ['Windows'],
            etc: ['AWS', 'ERD Cloud', 'Draw.io', 'Figma']
        },
        planning: [{
            heading: '통합 워크스페이스',
            items: ['구성원 간의 소통', '자료 공유', '결과물 공유']
        },{
            heading: '학습 환경 구축',
            items: ['비효율적 움직임 최소화', '구성원 간의 실시간 고충 및 피드백']
        },{
            heading: '과정 기록 및 추적',
            items: ['수업 내용, 프로젝트 과정, 개인의 성장 기록 등을 체계적으로 저장']
        },{
            heading: '교육자 편의 제공',
            items: ['교육자 부담 최소화', '학습 진행 중 교육적 개입 최대화']
        }],
        goals: ['소규모 학습 및 프로젝트 팀을 위한 통합 협업 플랫폼 구축', '실시간 소통 및 피드백 시스템을 통해 학습 효율 향상',
            '온라인 기반의 교육 및 프로젝트 환경에서의 불편함 해소'],
        references: [{
            img: [newlearn.slack],
            website: ['Slack'],
            goods: ['팀 단위의 워크스페이스 내에서 다양한 채널로 업무 대화를 나눔', '구글 드라이브, 지라(Jira), 깃허브, 트렐로 등 '+
                '수 많은 앱 연동 가능', '엔터프라이즈급 보안, 감사 로그, 사용자 관리 기능 제공'],
            bads: ['무료버전의 제한 (메시지 검색은 최근 90일 까지만 가능/화상 회의는 1:1만 지원', '통화 품질 및 실시간 협업 Discord나 '+
                'Zoom보다 다소 부족']
        }, {
            img: [newlearn.github],
            website: ['GitHub'],
            goods: ['협업에 최적화 된 기능. 팀원이 작성한 코드 변경 내용을 다른 개발자가 리뷰하고 승인 가능',
                'Repository 단위로 Collaborator, 팀, 조직 등의 접근 권한을 정밀하게 설정 가능'],
            bads: ['LFS (Git Large File Storage)를 사용하지 않으면 대용량 파일에 한계 있음',
                'Git 사용법을 모르면 GitHub의 협업 기능 (Pull Request, Branch 등)을 이해하기 어려움',
                '협업이 많아질수록 Merge Conflict 발생 가능성 증가 및 해결 방법이 복잡함']
        }, {
            img: [newlearn.discord],
            website: ['Discord'],
            goods: ['사용자가 직접 서버 (커뮤니티)를 만들고, 그 안에 텍스트/음성 채널을 구성할 수 있음',
                '별도의 전화 걸기 없이 음성 채널에 접속만 하면 실시간 대화 가능'],
            bads: ['공개 서버에서 악성 링크, 봇 스팸, DM 스팸 등의 보안 문제 발생 가능',
                'Slack, Teams와 비교해 공식적인 협업 도구로는 기능이 제한적일 수 있음 (예: 일정관리, 문서공유 기능이 약함)',
                '고품질 화면 공유, 업로드, 더 큰 파일 전송(>8MB)은 유로 Nitro 사용자만 가능']
        }],
        calendar: newlearn.calendar,
        structure: newlearn.structure,
        ucDiagram: newlearn.ucd,
        erDiagram: newlearn.erd,
        features: [{
            heading: '1. 로그인/회원가입',
            items: ['로그인/로그아웃', '아이디/비번찾기', '회원가입', '회원탈퇴']
        }, {
            heading: '2. 게시판',
            items: ['글쓰기(이미지/영상 업로드)', '게시글 CRUD', '댓글 CRUD', '카테고리 선택']
        }, {
            heading: '3. 캘린더',
            items: ['일정 등록 및 공유', '일정 수정 및 삭제', '개인 일정 공개/비공개 전환']
        }, {
            heading: '4. 채팅',
            items: ['채팅방 생성 및 초대', '채팅(이미지/동영상 업로드)', '채팅 삭제 및 사용자 신고', '채팅창 공개/비공개 기능']
        }, {
            heading: '5. 마이페이지',
            items: ['회원 정보 조회 및 수정', '방명록', '개인 캘린더', '개인 드라이브 기능']
        }, {
            heading: '6. AI 모음 페이지',
            items: ['사용할 AI 취사 서택']
        }, {
            heading: '7. 기타 편의기능',
            items: ['친구 추가/삭제', '알림 설정 및 검색', '출결 관리 및 현황조회']
        }],
        adminFeatures: [{
            heading: '1. 통계 조회',
            items: ['방문자 조회', '신고 내역 조회']
        }, {
            heading: '2. 회원 관리',
            items: ['게시글/회원관리', '회원 계정 정지 및 삭제', '사용자 롤 or 등급 부여']
        }, {
            heading: '3. 게시판 관리',
            items: ['공지사항 게시 가능', '부적절한 게시글 삭제']
        }],
        role: [{
            heading: '사용자 기반 일정 통합 시스템',
            items: ['개별 사용자의 개인 일정 데이터를 집계 및 시각화하여, 클래스룸 공유 캘린더에 통합 표시하는 기능을 기획하고 구현',
                '캘린더 상 날짜 별 일정 충돌 정도를 색상 강도로 표현하여, 사용자가 즉시 가장 적절한 이벤트 일정을 파악할 수 있도록 UX 최적화',
                '클래스 전체의 이벤트 날짜 선정 효율성을 획기적으로 향상시키며, 실질적인 협업 생산성을 높임']
        }, {
            heading: '마이페이지 <-> 클래스룸',
            items: ['클래스룸 추가/참여/이동/탈퇴 기능 개발', '클래스룸 별 출석률, 입퇴실 시간 통계 조회 기능 구현',
                '사용자 별/클래스룸 별 알림설정 변경 기능 지원 (사용자 선호에 따른 알림 방식 조정)']
        }, {
            heading: '클래스룸 이벤트',
            items: ['최신 클래스룸 이벤트 조회 UI 및 백엔드 연동', '사용자 별 개인일정 확인 가능 (본인 및 클래스룸 멤버 일정 동시 확인)',
                '클래스룸 공유 이벤트 등록/참여/수정/삭제 기능 개발 (유효성 검사 및 XSS 방어 포함)']
        }],
        outcome: ['사용자 경험 (UX) 중심 설계 역량 강화', '효율적인 협업 및 생산성 향상 기여',
            '실시간 데이터 처리 및 CRUD 경험 축적', '알림 및 사용자 맞춤 기능 구현 경험',
            '보안과 안정성을 고려한 개발 역량', '서비스 확장성 고려 경험'],
        githubUrl: 'https://github.com/kh-newlearn/new-learn'
    }];