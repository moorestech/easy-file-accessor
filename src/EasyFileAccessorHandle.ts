type FileSystemKind = 'file' | 'directory';
interface EasyFileAccessorHandle {
    readonly name: string;
    readonly kind: FileSystemKind;
    readonly path: string;
    readonly parentDirectory: DirectoryHandle;
}