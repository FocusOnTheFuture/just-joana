import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import styles from "./calendar.module.scss";


const Calendar = () => {
    return (
        <div className={styles.container}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar']}>
                <DateCalendar
                referenceDate={dayjs()}
                views={['year', 'month', 'day']}
                />
            </DemoContainer>
            </LocalizationProvider>
        </div>
      );
}

export default Calendar;