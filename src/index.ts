type OpenDirectoryMode =  'readwrite' | 'read';
type OpenDefaultDirectory = 'documents' | 'desktop' | 'downloads' | 'music' | 'pictures' | 'videos';
async function openDirectory(id:string = "", mode:OpenDirectoryMode = 'readwrite', defaultDirectory:OpenDefaultDirectory = 'documents'): Promise<DirectoryHandle> {
    const dirHandle: FileSystemDirectoryHandle = await showDirectoryPicker();
    const keys = await dirHandle.keys();
    for await (const key of keys) {
        console.log(key);
    }

    return new DirectoryHandle(undefined,"","",[],[]);
}

export default openDirectory;