import { Settings } from '@e2/settings';

export default class GraphService {
    public mockDataPromise(): Promise<Array<{}>> {
        const MockData = [
            {},
            {},
            {},
            {}
        ];
        return Promise.resolve(MockData);
    }
}