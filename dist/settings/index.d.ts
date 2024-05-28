declare class log {
    static success(message: string): void;
    static error(message: string): void;
    static warning(message: string): void;
}
declare function add(a: number, b: number): string;
declare function subtract(a: number, b: number): string;
export { log, add, subtract };
export { default as Nav } from './navigation/Nav';
export { default as AdminHeader } from './AdminHeader';
export { default as AdminSidebar } from './AdminSidebar';
