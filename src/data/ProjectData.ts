import { ypjp, newlearn } from "../assets/Images";

interface Project {
    id: number;
    img: string;
    title: string;
    subtitle: string;
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
        items?: string[];
    }[];
    detail: {
        title: string;
        images: string[];
        description: {
            heading: string;
            items: string[];
        }[];
    }[];
    learnings: string[];
    takeaway: string[];
    improvements?: string[];
    websiteUrl?: string;
    githubUrl: string;
}

export const projects: Project[] = [
    {
        id: 1,
        img: ypjp.main,
        title: '요리 PICK! 조리 PICK!',
        subtitle: '사용자의 식습관 개선 및 건강한 식생활 유도를 위한 통합 플랫폼입니다. ' +
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
            heading: '통합 식습관 관리 플랫폼',
            items: [
                '식단 기록, 영양소 분석, 레시피 추천 등 식생활 전반을 한 곳에서 관리',
                '사용자의 식습관을 데이터화하여 맞춤형 건강 관리 서비스 제공'
            ]
        }, {
            heading: '사용자 중심의 편의 기능',
            items: [
                '섭취 내역 자동 계산 및 시각화로 직관적인 피드백 제공',
                'AI 챗봇과 실시간 문의 시스템으로 신속한 사용자 지원'
            ]
        }, {
            heading: '참여형 커뮤니티 구축',
            items: [
                '사용자 간 레시피 공유 및 챌린지 참여를 통한 건강한 식문화 형성',
                '좋아요·댓글·공식화 기능을 통한 상호 피드백 및 동기 부여'
            ]
        }, {
            heading: '데이터 기반 맞춤 서비스',
            items: [
                '식BTI 검사 결과를 기반으로 개인화된 식단 및 레시피 추천',
                '누적 데이터를 활용한 섭취 패턴 분석 및 개선 방향 제시'
            ]
        }],
        goals: [
            '사용자의 식습관 개선 및 건강한 식생활 유도를 위한 통합 레시피 플랫폼 구축',
            'React, Spring Boot 기반의 MVC 아키텍처 설계 및 MyBatis를 활용한 안정적 데이터 관리',
            'AWS EC2 서버 환경 구성 및 Docker, Jenkins 기반 CI/CD 파이프라인 구축으로 배포 자동화 실현',
            'HTTPS 인증 (SSL 인증서 적용) 및 도메인 연동을 통한 안전한 RESTful API 통신 환경 구성',
            'GitHub를 통한 형상관리 및 협업 프로세스 정립으로 코드 품질과 생산성 향상'],
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
            heading: '프로젝트 팀장으로서 일정 관리 및 전체 개발 진행 총괄',
            items: ['팀원별 기술 피드백 및 협업 환경 개선', 'GitHub PR 리뷰, 코드 통합 및 리팩토링 진행']
        }, {
            heading: 'DB 설계 총괄 - 전체 ERD 설계 및 스키마 정의'
        }, {
            heading: '식단 관리 / 고객문의 / 관리자 페이지 / 실시간 채팅 및 알림 / 식BTI 기능 로직 구현'
        }],
        detail: [
            {
                title: "마이페이지 - 식단관리 기능 구현",
                images: [ypjp.first, ypjp.second],
                description: [
                    {
                        heading: "식단 기록 CRUD 기능",
                        items: [
                            "사용자가 하루 단위로 섭취한 식단을 입력하면, 각 음식의 칼로리 및 주요 영양소를 자동 계산하여 DB에 저장",
                            "등록 완료 후 요약 통계와 그래프가 즉시 갱신되어, 입력 결과를 실시간으로 확인 가능"]
                    },
                    {
                        heading: "그래프 기반 통계 시각화",
                        items: [
                            "사용자의 누적 식단 데이터를 기반으로 영양소 비율 및 섭취 추세를 JavaScript Chart 라이브러리를 활용해 시각화",
                            "기간 별 총 섭취 칼로리와 영양소를 직관적으로 확인할 수 있도록 그래프 형태로 표현"]
                    }
                ]
            },
            {
                title: "고객지원 시스템 및 실시간 소통 기능",
                images: [ypjp.third, ypjp.fourth],
                description: [
                    {
                        heading: "AI 챗봇 및 1:1 문의 시스템",
                        items: [
                            "자주 묻는 질문 (FAQ)과 답변, 관련 링크 (URL)를 DB에 저장하고, 이를 학습시켜 AI 챗봇이 자동으로 사용자 문의에 응답하도록 구현",
                            "사용자가 1:1 문의 작성 시 관리자에게 실시간 채팅 메시지로 전달되며, 사용자와 관리자는 문의 내용과 답변을 실시간으로 주고받을 수 있음"]
                    },
                    {
                        heading: "신고 기능",
                        items: [
                            "서비스 내 부적절한 게시글이나 사용자에 대한 신고 접수 기능을 제공",
                            "신고 시 신고항목에 따른 카테고리 분류 및 사유 입력 기능을 지원하여 구체적인 신고 사유를 전달할 수 있도록 구성",
                            "신고 완료 후 해당 내역은 관리자 페이지에 실시간으로 반영되어 신속하고 효율적인 대응이 가능"]
                    },
                    {
                        heading: "실시간 채팅 및 알림 기능",
                        items: [
                            "STOMP + WebSocket 기반의 양방향 통신 구조를 적용하여 사용자 간 실시간 메시지 송수신을 지원",
                            "채팅방 입장 / 퇴장 시 시스템 알림 및 읽음 처리 기능을 제공하여 대화 흐름을 직관적으로 파악 가능"]
                    },
                    {
                        heading: "데이터 무결성 및 보안 관리",
                        items: [
                            "작성자의 계정 정보와 문의/신고 데이터는 인증된 사용자만 접근 가능하도록 권한 제어 적용",
                            "모든 데이터는 서버단 검증 및 암호화 저장을 통해 무결성을 보장하고, 비인가 접근으로부터 보호"]
                    }
                ]
            },
            {
                title: "식BTI 검사 및 결과분석",
                images: [ypjp.fifth],
                description: [
                    {
                        heading: "단계별 설문 폼 제공",
                        items: [
                            "사용자의 식습관을 진단할 수 있는 단계별 선택형 설문 폼을 구성하여, 응답 데이터를 효율적으로 수집"]
                    },
                    {
                        heading: "자동 분석 및 유형 판정",
                        items: [
                            "수집된 응답 데이터를 기반으로 사용자의 식습관 유형 (식BTI)를 자동 분석",
                            "각 유형별 특징을 도출하여 DB에 저장"]
                    },
                    {
                        heading: "UX 중심의 결과 페이지 구성",
                        items: [
                            "검사 완료 후 각 유형별 대표 이미지 및 설명 제공",
                            "개인 맞춤형 추천 식단 및 레시피 연동 기능으로 서비스 활용도 확대 가능"]
                    }
                ]
            }
        ],
        learnings: [
            "사용자의 건강 데이터를 시각화하여 직관적인 정보 제공",
            "관리자와 사용자가 원활히 소통할 수 있는 고객지원 및 채팅 시스템 구현",
            "RESTful API와 WebSocket을 결합한 안정적인 서비스 설계 경험 축적",
            "AI 응답 기능을 활용한 맞춤형 상담 기능 가능성 검증"
        ],
        takeaway: [
            "이번 프로젝트에서는 단순히 기능 개발을 넘어서, 서비스가 실제 운영되는 전체 흐름을 직접 설계하고 구축했습니다. ",
            "AWS 환경 설정부터 Docker 컨테이너 구성, Jenkins를 활용한 자동 배포까지 담당하며 배포 과정의 자동화와 오류 최소화를 실현할 수 있었습니다. " +
            "또한 SSL 인증서 적용을 통한 HTTPS 인증과 도메인 연동을 통해 실 서비스 수준의 안정적인 REST API 환경을 구축했으며, DB 설계 및 형상관리 주도, " +
            "코드리뷰 프로세스 확립으로 협업 효율성을 높였습니다.",
            "팀장으로서 기술적 의사결정 뿐 아니라 일정 조율과 팀 내 커뮤니케이션 관리도 수행하며, 개발 뿐 아니라 협업 체계와 품질 관리의 중요성을 직접 경험했습니다. " +
            "개발자로서는 식단 관리, 고객지원, 식BTI 기능 등 사용자 중심 기능을 구현하면서 데이터 시각화와 UX 설계의 중요성을 실감했습니다. ",
            "이번 경험을 통해 “기능 구현보다 초기 설계와 소통이 더 큰 생산성을 만든다”는 것을 배웠고, 앞으로도 설계부터 배포까지 책임질 수 있는 개발자로 성장하고자 합니다."
        ],
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
        subtitle: '학생과 교사 간의 소통, 학습 관리, 과제 제출, 커뮤니티 기능을 통합한 온라인 클래스룸 플랫폼입니다. ' +
            '클래스룸 중심의 협업 기능, 게시판, 채팅, 친구관리, 출결 및 과제 시스템 등 교육 환경에 특화된 다양한 기능을 제공합니다.',
        techStack: {
            language: ['Java', 'JSP & Servlet', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
            database: ['Oracle 11g'],
            tools: ['STS3', 'MyBatis', 'Apache Tomcat', 'Maven', 'Lombok'],
            os: ['Windows'],
            etc: ['AWS', 'ERD Cloud', 'Draw.io', 'Figma']
        },
        planning: [{
            heading: '통합 협업 플랫폼 구축',
            items: [
                '소규모 학습 및 프로젝트 팀을 위한 통합 워크스페이스 제공',
                '구성원 간의 실시간 소통 및 피드백을 통해 학습 효율 극대화',
                '자료 공유와 결과물 관리가 가능한 협업 환경 구현']
        }, {
            heading: '효율적인 학습 환경 조성',
            items: [
                '비효율적 움직임 최소화로 학습 집중도 향상',
                '실시간 고충 및 피드백 시스템을 통한 즉각적인 문제 해결',
                '온라인 기반 학습 및 프로젝트 수행의 불편함 해소']
        }, {
            heading: '과정 기록 및 성장 추적',
            items: [
                '수업 내용, 프로젝트 진행 과정, 개인의 성과를 체계적으로 기록',
                '데이터 기반의 학습 이력 관리 및 성과 분석 기능 제공']
        }, {
            heading: '교육자 중심의 지원 기능',
            items: [
                '교육자의 관리 부담을 최소화하고 효율적인 수업 운영 지원',
                '학습 진행 상황 모니터링 및 필요 시 교육적 개입 극대화']
        }],
        goals: [
            '학생과 교사 간의 실시간 소통 및 학습 관리를 위한 통합 클래스룸 플랫폼 구축',
            'Java, JSP / Servlet 기반의 MVC 아키텍처 설계 및 Oracle / MyBatis를 활용한 안정적 데이터 관리',
            'AJAX 비동기 통신으로 일정, 채팅, 알림 등 실시간 데이터 갱신 기능 구현',
            '클래스룸 단위의 협업 기능과 교육 환경에 특화된 기능 개발로 학습 효율 및 UX 향상',
            '보안 (XSS 방어), 유효성 검사, 권한 제어 등 서비스 안정성을 고려한 개발 경험'],
        references: [{
            img: [newlearn.slack],
            website: ['Slack'],
            goods: ['팀 단위의 워크스페이스 내에서 다양한 채널로 업무 대화를 나눔', '구글 드라이브, 지라(Jira), 깃허브, 트렐로 등 ' +
                '수 많은 앱 연동 가능', '엔터프라이즈급 보안, 감사 로그, 사용자 관리 기능 제공'],
            bads: ['무료버전의 제한 (메시지 검색은 최근 90일 까지만 가능/화상 회의는 1:1만 지원', '통화 품질 및 실시간 협업 Discord나 ' +
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
            heading: 'DB 설계 및 구현, 마이페이지 / 캘린더 기능 개발'
        }, {
            heading: 'GitHub 형상관리 및 PR 코드리뷰 진행'
        }, {
            heading: '공용 유틸리티 코드 관리 (XSS 핸들러, 스케줄러를 통한 불필요 파일 삭제 등 메모리 관리)'
        }],
        detail: [
            {
                title: "사용자 기반 일정 통합 시스템 구현",
                images: [newlearn.first, newlearn.second],
                description: [
                    {
                        heading: "개별 사용자의 개인 일정 데이터를 집계하여 참여중인 클래스룸 공유 캘린더에 통합 표시",
                        items: [
                            "각 날짜별 일정 충돌 정도를 배경 투명도와 색상 강도로 시각화",
                            "사용자가 즉시 가장 적절한 이벤트 날짜를 확인 가능"]
                    },
                    {
                        heading: "가장 가까운 3건의 공유 이벤트를 메인 클래스룸 페이지에 자동 조회",
                        items: [
                            "이벤트 상세 정보는 자동 폼 바인딩으로 확인 가능"]
                    },
                    {
                        heading: "개인 일정과 공유 이벤트 생성 및 보안 처리",
                        items: [
                            "일정 등록 시 서버단 유효성 검사 및 XSS 방어 적용",
                            "공유 이벤트 등록 시 모집 기한과 인원 제한 조건 검증으로 참여 기능 무결성 보장"]
                    }
                ]
            },
            {
                title: "클래스룸 관리 및 마이페이지 기능 구현",
                images: [newlearn.third, newlearn.fourth],
                description: [
                    {
                        heading: "클래스룸 관리 기능 구현",
                        items: [
                            "클래스룸 생성 시 입력된 이름과 초대코드를 기반으로 생성자를 선생님 권한으로 자동 지정",
                            "참가 시 코드 유효성 검사로 올바른 클래스룸 입장 보장",
                            "탈퇴 시 모달창에서 클래스룸명을 확인하여 안전하게 처리"]
                    },
                    {
                        heading: "출석률 및 알림 관리",
                        items: [
                            "클래스룸 별 출석률과 입퇴실 시간 통계 조회",
                            "사용자별 / 클래스룸별 알림 설정을 비동기 요청으로 실시간 동기화"]
                    },
                    {
                        heading: "마이페이지 콘텐츠 연동",
                        items: [
                            "방명록, 개인일정, 파일저장소 CRUD 및 페이징 기능 구현",
                            "작성자는 본인 글 숨김 / 삭제 가능"]
                    }
                ]
            }
        ],
        learnings: [
            '사용자 경험 (UX) 중심 설계 역량 강화', '실시간 데이터 처리 및 CRUD 경험 축적',
            '알림 및 사용자 맞춤 기능 구현 경험', '보안과 안정성을 고려한 개발 역량'
        ],
        takeaway: [
            '프로젝트 초반에는 기능 구현 위주로만 접근하다 보니 반복되는 작업과 코드 충돌이 발생하는 등 비효율이 있었습니다. ' +
            '이를 개선하기 위해 저는 DB 설계와 Git 형상관리, 공용 유틸리티 코드 관리 (XSS 핸들러, 불필요 파일 자동 삭제)를 담당하며 팀원 간 PR 코드리뷰와 코드 공유를 체계화했습니다. ' +
            '이러한 경험을 통해 초기 설계와 소통의 중요성을 체감할 수 있었고, 기능 우선순위를 명확히 하면 개발 속도와 코드 품질이 향상된다는 것을 배웠습니다. ' +
            '앞으로도 입사 후에는 체계적인 설계와 협업을 통해 효율적인 개발을 이어가겠습니다.'
        ],
        githubUrl: 'https://github.com/kh-newlearn/new-learn'
    }];