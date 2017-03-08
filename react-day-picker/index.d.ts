// Type definitions for react-day-picker 5.1
// Project: https://github.com/gpbl/react-day-picker
// Definitions by: Giampaolo Bellavite <https://github.com/gpbl>, Jason Killian <https://github.com/jkillian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react" />

import * as React from 'react';

declare namespace DayPicker {
    export interface LocaleUtils {
        formatDay(day: Date, locale: string): string;
        formatMonthTitle(month: Date, locale: string): string;
        formatWeekdayLong(weekday: number, locale: string): string;
        formatWeekdayShort(weekday: number, locale: string): string;
        getFirstDayOfWeek(locale: string): number;
        getMonths(locale: string): [string, string, string, string, string, string, string, string, string, string, string, string];
    }

    export interface DateUtils {
        addMonths(d: Date, n: number): Date;
        clone(d: Date): Date;
        isSameDay(d1: Date, d2: Date): Date;
        isPastDay(d: Date): boolean;
        isFutureDay(d: Date): boolean;
        isDayBetween(day: Date, begin: Date, end: Date): boolean;
        addDayToRange(day: Date, range: RangeModifier): RangeModifier;
        isDayInRange(day: Date, range: RangeModifier): boolean;
    }

    export interface CaptionElementProps {
        date?: Date;
        localeUtils?: LocaleUtils;
        locale?: string;
        onClick?(month: Date, e: React.MouseEvent<HTMLDivElement>): void;
    }

    export interface NavbarElementProps {
        className?: string;
        previousMonth?: Date;
        nextMonth?: Date;
        showPreviousButton?: boolean;
        showNextButton?: boolean;
        onPreviousClick?(): void;
        onNextClick?(): void;
        dir?: string;
        localeUtils?: LocaleUtils;
        locale?: string;
    }

    export interface WeekdayElementProps {
        weekday?: number;
        className?: string;
        localeUtils?: LocaleUtils;
        locale?: string;
    }

    export interface ClassNames {
        container: string;
        interactionDisabled: string;
        navBar: string;
        navButtonPrev: string;
        navButtonNext: string;

        month: string;
        caption: string;
        weekdays: string;
        weekdaysRow: string;
        weekday: string;
        body: string;
        week: string;
        day: string;

        today: string;
        selected: string;
        disabled: string;
        outside: string;
    }

    export interface RangeModifier {
        from: Date;
        to: Date;
    }
    export interface BeforeModifier {
        before: Date;
    }
    export interface AfterModifier {
        after: Date;
    }
    export interface FunctionModifier {
        (date: Date): boolean;
    }
    export type Modifier = RangeModifier | BeforeModifier | AfterModifier | FunctionModifier;

    export interface Modifiers {
        today: Modifier | Modifier[];
        outside: Modifier | Modifier[];
        [other: string]: Modifier | Modifier[] | undefined;
    }

    export interface Props {
        canChangeMonth?: boolean;
        captionElement?: React.ReactElement<CaptionElementProps>;
        className?: string;
        classNames?: ClassNames;
        containerProps?: React.HTMLAttributes<HTMLDivElement>;
        disabledDays?: Modifier | Modifier[];
        enableOutsideDays?: boolean;
        firstDayOfWeek?: number;
        fixedWeeks?: boolean;
        fromMonth?: Date;
        initialMonth?: Date;
        labels?: { previousMonth: string; nextMonth: string; };
        locale?: string;
        localeUtils?: LocaleUtils;
        modifiers?: Partial<Modifiers>;
        month?: Date;
        months?: [string, string, string, string, string, string, string, string, string, string, string, string];
        navbarElement?: React.ReactElement<NavbarElementProps>;
        numberOfMonths?: number;
        onBlur?(e: React.FocusEvent<HTMLDivElement>): void;
        onCaptionClick?(month: Date, e: React.MouseEvent<HTMLDivElement>): void;
        onDayClick?(day: Date, modifiers: Modifiers, e: React.MouseEvent<HTMLDivElement>): void;
        onDayKeyDown?(day: Date, modifiers: Modifiers, e: React.KeyboardEvent<HTMLDivElement>): void;
        onDayMouseEnter?(day: Date, modifiers: Modifiers, e: React.MouseEvent<HTMLDivElement>): void;
        onDayMouseLeave?(day: Date, modifiers: Modifiers, e: React.MouseEvent<HTMLDivElement>): void;
        onDayTouchEnd?(day: Date, modifiers: Modifiers, e: React.TouchEvent<HTMLDivElement>): void;
        onDayTouchStart?(day: Date, modifiers: Modifiers, e: React.TouchEvent<HTMLDivElement>): void;
        onFocus?(e: React.FocusEvent<HTMLDivElement>): void;
        onKeyDown?(e: React.KeyboardEvent<HTMLDivElement>): void;
        onMonthChange?(month: Date): void;
        pagedNavigation?: boolean;
        renderDay?(date: Date, modifiers: Modifiers): React.ReactNode;
        reverseMonths?: boolean;
        selectedDays?: Modifier | Modifier[];
        toMonth?: Date;
        weekdayElement?: React.ReactElement<WeekdayElementProps>;
        weekdaysLong?: [string, string, string, string, string, string, string];
        weekdaysShort?: [string, string, string, string, string, string, string];
    }
    const VERSION: string;
    const LocaleUtils: DayPicker.LocaleUtils;
    const DateUtils: DayPicker.DateUtils;
}

declare class DayPicker extends React.Component<DayPicker.Props, never> {
    showMonth(month: Date): void;

    showPreviousMonth(): void;

    showNextMonth(): void;

    showPreviousYear(): void;

    showNextYear(): void;
}

export = DayPicker;
