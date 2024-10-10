import * as React from "react";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/handle-error";
import { uploadFiles } from "@/actions";

interface UseUploadFileProps {
  defaultUploadedFiles?: File[];
}

export function useUploadFile({
  defaultUploadedFiles = [],
}: UseUploadFileProps = {}) {
  const [uploadedFiles, setUploadedFiles] =
    React.useState<File[]>(defaultUploadedFiles);
  const [progresses, setProgresses] = React.useState<Record<string, number>>(
    {}
  );
  const [isUploading, setIsUploading] = React.useState(false);

  async function onUpload(files: File[]) {
    setIsUploading(true);

    // Initialize form data
    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));

    try {
      // Perform the upload using your existing uploadFiles function
      await uploadFiles(formData);

      // Mock progress tracking (if you want to add real progress tracking, server-side support is needed)
      files.forEach((file) => {
        setProgresses((prev) => ({
          ...prev,
          [file.name]: 100, // Assuming full upload
        }));
      });

      setUploadedFiles((prev) => [...prev, ...files]);
      toast.success("Files uploaded successfully!");
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setProgresses({});
      setIsUploading(false);
    }
  }

  return {
    uploadedFiles,
    progresses,
    isUploading,
    onUpload,
  };
}
