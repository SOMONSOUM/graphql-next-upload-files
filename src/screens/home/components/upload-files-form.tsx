"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FileUploader } from "@/components/customs/file-uploader";
import { Loader2 } from "lucide-react";
import { useUploadFile } from "@/hooks";

const schema = z.object({
  files: z
    .array(z.instanceof(File))
    .nonempty({ message: "Please upload at least one PDF file." }),
});

type Schema = z.infer<typeof schema>;

export const UploadFilesForm = () => {
  const [pending, startTransition] = React.useTransition();
  const { onUpload, progresses, uploadedFiles, isUploading } = useUploadFile();
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      files: [],
    },
  });

  console.log({ progresses, uploadedFiles, isUploading });

  const onSubmit: SubmitHandler<Schema> = (input) => {
    startTransition(async () => {
      onUpload(input.files);
      form.reset();
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="files"
          render={({ field }) => (
            <div className="space-y-6">
              <FormItem className="w-full">
                <FormLabel>PDF files</FormLabel>
                <FormControl>
                  <FileUploader
                    value={field.value}
                    onValueChange={field.onChange}
                    maxFileCount={4}
                    maxSize={4 * 1024 * 1024}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <Button type="submit" className="w-fit flex gap-2" disabled={pending}>
          {pending && <Loader2 className="animate-spin size-5" />} Save
        </Button>
      </form>
    </Form>
  );
};
