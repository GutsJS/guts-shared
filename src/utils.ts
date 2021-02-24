import * as firebase from 'firebase';

export const getResizedImageURI = async (
  uri: string | undefined,
  size: 400 | 800,
  storage: firebase.storage.Reference
) => {
  if (uri) {
    const originalStorageURI =
      'https://firebasestorage.googleapis.com/v0/b/lionne-c8424.appspot.com/o/';
    const newCloudStorageURI =
      'https://storage.googleapis.com/lionne-c8424.appspot.com/products/';
    if (uri.includes(originalStorageURI)) {
      try {
        const fullFileName = uri.split('?')[0].replace(originalStorageURI, '');
        const fileType = fullFileName.substr(fullFileName.lastIndexOf('.'));
        const fileName = fullFileName.substr(0, fullFileName.lastIndexOf('.'));
        const storageRef = storage.child(
          'resized/' + fileName + `_${size}x${size}` + fileType
        );
        const URI = await storageRef.getDownloadURL();
        return URI;
      } catch (err) {
        return uri;
      }
    } else if (uri.includes(newCloudStorageURI)) {
      const fileType = uri.substr(uri.lastIndexOf('.'));
      const fileName = uri.slice(uri.lastIndexOf('/'), uri.lastIndexOf('.'));
      const folderName = uri.slice(56, uri.lastIndexOf('/'));
      const storageRef = storage.child(
        folderName + '/resized' + fileName + `_${size}x${size}` + fileType
      );
      const URI = await storageRef.getDownloadURL();
      return URI;
    } else {
      return uri;
    }
  }
  return;
};
