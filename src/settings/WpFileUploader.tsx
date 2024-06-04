import React, { useRef, useEffect } from "react";
import { css } from "@emotion/css";
import { prefix } from "bsf-admin-ui/utility/utils";
import { uploader as uploaderVars } from "bsf-admin-ui/css-variables"

// Define the props type for the WpFileUploader component
interface WpFileUploaderProps {
  frameButtonTitle: string;
  frameHeaderTitle: string;
  uploadButtonText: string;
  containerClassName?: string;
  onSelect: (imageObject: { url: string } | null) => void;
}

const WpFileUploader: React.FC<WpFileUploaderProps> = (props) => {
  const { frameButtonTitle, frameHeaderTitle, uploadButtonText, onSelect } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openMediaUploader = () => {
    const mediaUploader = (window as any).wp.media({
      title: frameHeaderTitle,
      button: {
        text: frameButtonTitle,
      },
      multiple: false,
    });

    mediaUploader.on("select", () => {
      const imageObject = mediaUploader?.state()?.get("selection")?.first()?.toJSON();
      imageObject?.url ? onSelect(imageObject) : onSelect(null);
    });

    mediaUploader.open();

    mediaUploader.on("close", () => {
      // Additional state updates or actions can be done here
    });
  };

  useEffect(() => {
    if (!(window as any)?.wp?.media) {
      console.warn("wp.media not available please add wp_enqueue_media() in your plugin or theme");
      return;
    }

    if (buttonRef.current) {
      buttonRef.current.addEventListener("click", openMediaUploader);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("click", openMediaUploader);
      }
    };
  }, []);

  if (!(window as any)?.wp?.media) {
    return (
      <p style={{ color: "red" }}>
        wp.media not available please add wp_enqueue_media() in your plugin or theme
      </p>
    );
  }

  const containerClass = prefix() + "-file-uploader";

  const containerStyle = css({
    all: "unset",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 500,
    cursor: "pointer",
    width: "100%",
    gridGap: "14px",
    "> span": {
      padding: uploaderVars.inputPadding,
      "&:first-child": {
        flex: 1,
        fontSize: uploaderVars.inputFontSize,
        color: uploaderVars.inputColor,
        boxShadow: uploaderVars.inputBoxShadow,
        border: uploaderVars.inputBorder,
        borderRadius: uploaderVars.inputBorderRadius,
      },
      "&:last-child": {
        backgroundColor: uploaderVars.buttonBackgroundColor,
        color: uploaderVars.buttonColor,
        borderRadius: uploaderVars.buttonBorderRadius,
        padding: uploaderVars.buttonPadding,
      },
    },
  });
  return (
    <div className={containerClass}>
      <button className={containerStyle} ref={buttonRef} aria-label="Upload file">
        <span className="surerank-seo-popup-upload-input-area">Choose file</span>
        <span className="surerank-seo-popup-upload-button">{uploadButtonText}</span>
      </button>
    </div>
  );
};

export default WpFileUploader;
