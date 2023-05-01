export default function personRating(num: number){

    const dummy: { [key: number]: { name: string, rating: number, problem: number } } = {
        1 : {
            name: "박종호",
            rating: 100,
            problem: 10
        },
        2 : {
            name: "이의찬",
            rating: 50,
            problem: 5
        },
        3 : {
            name: "정재웅",
            rating: 200,
            problem: 45
        },
    };


    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {dummy[num].name}
            </th>
            <td className="px-6 py-4">
                {dummy[num].problem}
            </td>
            <td className="px-6 py-4">
                {dummy[num].rating}
            </td>
        </tr>
    )
}
