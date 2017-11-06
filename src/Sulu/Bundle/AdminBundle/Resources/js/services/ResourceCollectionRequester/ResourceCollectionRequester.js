// @flow
import Requester from '../Requester';
import resourceMetadataStore from '../../stores/ResourceMetadataStore';

function buildQueryString(queryOptions: ?Object) {
    const options = queryOptions;
    if (!options) {
        return '';
    }

    const searchParameters = new URLSearchParams();
    Object.keys(options).forEach((key) => {
        searchParameters.set(key, options[key]);
    });

    return '?' + searchParameters.toString();
}

export default class ResourceCollectionRequester {
    static get(resourceKey: string, ids: Array<string>, queryOptions: ?Object) {
        const baseUrl = resourceMetadataStore.getBaseUrl(resourceKey);
        return Requester.get(baseUrl + '/' + ids.join(',') + buildQueryString(queryOptions));
    }
}
