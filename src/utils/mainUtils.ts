import itLocale from "date-fns/locale/it";

export interface DateLocale {
    locale: Locale;
    mask: string;
}

export const DATE_LOCALE: DateLocale = {
    locale: itLocale,
    mask: '__/__/____'
}