namespace app.reading {
    'use strict';

    export interface IReading {
        systolic: number;
        diastolic: number;
        selectedDate: Date;
        selectedTime: Date;
        addReading: () => void;
    }
}