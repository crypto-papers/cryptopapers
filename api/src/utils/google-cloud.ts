import { Storage as GCPStorage } from '@google-cloud/storage';
import type { UploadResponse } from '@google-cloud/storage';

const storage = new GCPStorage({});

const uploadFile = async (
  file: string,
  destination: string,
  bucket: string
): Promise<UploadResponse> => {
  const response = await storage.bucket(bucket).upload(file, {
    destination,
  });

  return response;
};

export default uploadFile;
