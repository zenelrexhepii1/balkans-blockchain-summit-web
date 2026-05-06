export function countDownMapping(data: any) {
    return [
        {
            count_id: 1,
            count_number: data?.weeks,
            count_name: "weeks",
        },
        {
            count_id: 2,
            count_number: data?.days,
            count_name: "days",
        },
        {
            count_id: 3,
            count_number: data?.hours,
            count_name: "hours",
        },
        {
            count_id: 4,
            count_number: data?.minutes,
            count_name: "minutes",
        },
        {
            count_id: 5,
            count_number: data?.seconds,
            count_name: "seconds",
        }
    ]
}