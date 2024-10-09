import { gql } from "@apollo/client";

export const UPLOAD_FILES_MUTATION = gql`
  mutation MultipleUploadFilesMutation($files: [Upload!]!) {
    multipleUploadFilesMutation(files: $files) {
      status_code
      message
      data {
        filename
        url
        file_type
        file_size
      }
    }
  }
`;
