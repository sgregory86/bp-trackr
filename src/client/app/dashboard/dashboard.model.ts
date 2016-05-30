namespace app.dashboard {
    'use strict';

    export interface IDashboard {
        readingLimit: number;
        readings: Object;
        removeItem: (reading: ng.resource.IResource<Object>) => void;
    }
}