interface RoadmapProperty {

    category: string,
    content: string,
    image: string,
    startX: number,
    startY: number,
    colors: string[],
}

export const RoadmapLayout: RoadmapProperty[] = [

    {
        category: 'Greedy',
        content: "Greedy 알고리즘은 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startX: 100,
        startY: 100,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },
    {
        category: 'BFS',
        content: "BFS 알고리즘은 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startX: 300,
        startY: 200,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },
    {
        category: 'Dikstra',
        content: "Dikstra 알고리즘은 어쩌구 저쩌구",
        image: "/TempRoadmap.png",
        startX: 600,
        startY: 150,
        colors: ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'],
    },
];
