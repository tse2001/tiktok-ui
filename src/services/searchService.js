import request from '~/utils/request';

export const search = async (q, type) => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q: q,
                type: type,
            },
        });

        return res.data;
    } catch (err) {
        console.error(err);
    }
};
