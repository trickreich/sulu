// @flow
import {action, autorun, observable} from 'mobx';
import ResourceCollectionRequester from '../../services/ResourceCollectionRequester';

export default class ResourceCollectionStore {
    resourceKey: string;
    ids: Array<string>;
    locale = observable();
    disposer: () => void;
    @observable loading: boolean = false;
    @observable data: Array<Object> = [];

    constructor(resourceKey: string, ids: Array<string>) {
        this.resourceKey = resourceKey;
        this.ids = ids;
        this.disposer = autorun(this.load);
    }

    load = () => {
        if (!this.locale.get()) {
            return;
        }

        this.setLoading(true);
        ResourceCollectionRequester.get(this.resourceKey, this.ids, {locale: this.locale.get()})
            .then(this.handleResponse);
    };

    @action handleResponse = (response: Array<Object>) => {
        this.data = response;
        this.setLoading(false);
    };

    @action setLoading(loading: boolean) {
        this.loading = loading;
    }

    @action setLocale(locale: string) {
        this.locale.set(locale);
    }

    destroy() {
        this.disposer();
    }
}
