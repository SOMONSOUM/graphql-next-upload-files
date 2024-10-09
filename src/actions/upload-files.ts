"use server";

import { MultipleUploadFilesMutationDocument } from "@/generated/graphql";
import client from "@/lib/apollo-server";

export const uploadFiles = async (formData: FormData) => {
  const files = formData.getAll("file") as File[];
  const uploadFiles = files.map((file) => file);

  try {
    const { data } = await client.mutate({
      mutation: MultipleUploadFilesMutationDocument,
      variables: { files: uploadFiles },
    });

    return {
      data: data?.multipleUploadFilesMutation.data,
    };
  } catch (error) {
    console.error("Error uploading files:", error);
  }
};
