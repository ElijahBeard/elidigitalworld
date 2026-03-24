import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        slug: params.slug,
		bodystyle: 'bg-blog'
    };
};