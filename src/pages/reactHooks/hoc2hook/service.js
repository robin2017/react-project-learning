const queryAjax = (params = {}) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [
                    { id: 1, time: "2016" },
                    { id: 2, time: "2017" },
                    { id: 3, time: params.year },
                ],
            })
        }, 3000);
    })
};
export default {
    queryAjax
}