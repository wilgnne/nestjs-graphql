
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Task {
    id: number;
    description: string;
}

export interface IQuery {
    tasks(): Task[] | Promise<Task[]>;
}

export interface IMutation {
    createTask(description: string): Task | Promise<Task>;
}

type Nullable<T> = T | null;
