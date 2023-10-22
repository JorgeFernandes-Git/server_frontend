import { DataState } from "../enum/data-state.enum";

export interface AppState<data> {
    dataState: DataState;
    appData?: data; // ? meaning that is optional
    error?: string;
}