import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

import { ImageUploadProps } from "../../utils/types";

const ImageUpload: React.FC<ImageUploadProps> = (props) => {
  const filePickerRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    props.initialValue || "badi.jpg"
  );
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (!file) {
      return;
    } else {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string | null);
      };
      fileReader.readAsDataURL(file);
    }
  }, [file]);

  const pickedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let pickedFile: File | undefined;
    let fileIsValid = isValid;
    const files = event.target.files as FileList | null;
    if (files && files.length === 1) {
      pickedFile = files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };

  return (
    <div className="form-control">
      <input
        ref={filePickerRef}
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Izaberi sliku</p>}
        </div>
        <Button size="small" type="button" onClick={pickImageHandler}>
          {props.action}
        </Button>
      </div>
      {!isValid && <p className="error-text">{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
