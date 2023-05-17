export interface IAlert {
    message: string | null;
    onClose: () => void;
}