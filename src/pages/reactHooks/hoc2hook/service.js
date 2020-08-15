const queryAjax = (params = {}) => {
    return Promise.resolve({
        data: [
            { id: 1, time: "2016" },
            { id: 2, time: "2017" },
            { id: 3, time: params.year },
        ],
    });
};
export default {
    queryAjax
}