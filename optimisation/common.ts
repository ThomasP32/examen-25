enum WeekDay {
    Mon = 'Mon',
    Tue = 'Tue',
    Wed = 'Wed',
    Thu = 'Thu',
    Fri = 'Fri',
    Sat = 'Sat',
    Sun = 'Sun'
}

interface Activity {
    week_day: WeekDay;
    start_hour: number;
    hour_duration: number;
    money: number;
    fun: number;
}

interface Possibilities {
    activities: Activity[];
}