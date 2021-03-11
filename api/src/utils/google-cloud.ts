import { Storage as GCPStorage } from '@google-cloud/storage';
import type { UploadResponse } from '@google-cloud/storage';

const storage = new GCPStorage({});

const bucket = storage.bucket('bucket');

const uploadFile = async (path: string, destination: string): Promise<UploadResponse> => {
  const response = await bucket.upload(path, {
    destination,
    public: true,
  });

  return response;
};

export default uploadFile;
