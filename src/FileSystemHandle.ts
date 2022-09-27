type FileSystemKind = 'file' | 'directory';
interface FileSystemHandle {
    readonly name: string;
    readonly kind: FileSystemKind;
    readonly path: string;
    readonly ParentDirectory: DirectoryHandle;
}