interface RoadmapProperty {

    idx: number
    category: string,
    content: string,
    image: string,
    startY: number,
    radius: number,
    startX: number,
    colors: string[],
}

let nowY;
let nowRad;

export const RoadmapLayout: RoadmapProperty[] = [

    {
        idx: 0,
        category: '프로그래밍 언어',
        content: "프로그래밍 언어는 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startY: nowY = 50,
        radius: nowRad = 100,
        startX: 640 - nowRad,
        colors: ['rgba(0, 255, 255, 0.13)', 'rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)'],
    },
    
    {
        idx: 1,
        category: '조건문',
        content: "조건문은 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startY: nowY += nowRad * 2 + 100,
        radius: nowRad = 75,
        startX: 450 - nowRad,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },
    {
        idx: 2,
        category: '반복문',
        content: "반복문은 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startY: nowY,
        radius: nowRad = 75,
        startX: 830 - nowRad,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },
    
    {
        idx: 3,
        category: '조합',
        content: "조합은 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startY: nowY += nowRad * 2 + 100,
        radius: nowRad = 75,
        startX: 450 - nowRad,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },
    {
        idx: 4,
        category: '순열',
        content: "순열은 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startY: nowY,
        radius: nowRad = 75,
        startX: 830 - nowRad,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },
    
    {
        idx: 5,
        category: '수학',
        content: "수학은 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startY: nowY += nowRad * 2 + 200,
        radius: nowRad = 100,
        startX: 640 - nowRad,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },

    {
        idx: 6,
        category: '약수와 배수',
        content: "약수와 배수는 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startY: nowY -= nowRad * 2 - 50,
        radius: nowRad = 60,
        startX: 300 - nowRad,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },
    {
        idx: 7,
        category: '소수',
        content: "소수는 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startY: nowY += nowRad * 2 + 75,
        radius: nowRad = 60,
        startX: 300 - nowRad,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },
    {
        idx: 8,
        category: '비트 마스킹',
        content: "비트 마스킹은 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startY: nowY += nowRad * 2 + 75,
        radius: nowRad = 60,
        startX: 300 - nowRad,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },
];

export const LineRelation: number[][] = [

    [0, 1],
    [0, 2],
];